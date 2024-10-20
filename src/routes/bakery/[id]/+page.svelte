<script lang="ts">
  import { onMount } from "svelte";
  import {
    PUBLIC_API_LOCAL,
    PUBLIC_API_GOOGLE_MAPS,
    PUBLIC_INSTAGRAM_ACCESS_TOKEN,
  } from "$env/static/public"; // Charger les clés API
  import * as GMaps from "@googlemaps/js-api-loader";
  const { Loader } = GMaps;
  import { page } from "$app/stores"; // Pour accéder à l'ID de l'URL
  import { clearUser } from "@/userStore";

  let bakery: any = null;
  let id = $page.params.id; // Récupérer l'ID depuis l'URL
  let mapElement: any; // Référence à l'élément de la carte
  let instagramPosts: any[] = [];

  const API = PUBLIC_API_LOCAL;
  const API_GOOGLE_MAPS = PUBLIC_API_GOOGLE_MAPS;
  const INSTAGRAM_ACCESS_TOKEN = PUBLIC_INSTAGRAM_ACCESS_TOKEN;

  // Fonction pour récupérer les détails de la boulangerie
  async function fetchBakery() {
    try {
      const response = await fetch(`${API}/bakery/${id}`);
      if (response.status === 401) {
        clearUser();
      } else if (response.ok) {
        bakery = await response.json();
        console.log("INFORMATIONS BOULANGERIE : ", bakery);

        // Initialiser la carte une fois les détails de la boulangerie récupérés
        initializeMap(bakery.address);

        // Récupérer les posts Instagram du compte
        fetchInstagramPosts("17841402390241020");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la boulangerie", error);
    }
  }

  // Fonction pour initialiser la carte Google Maps
  async function initializeMap(address: string) {
    const loader = new Loader({
      apiKey: API_GOOGLE_MAPS,
      version: "weekly",
    });

    const google = await loader.load(); // Charger Google Maps

    // Utiliser le Geocoder pour convertir l'adresse en latitude/longitude
    const geocoder = new google.maps.Geocoder();

    // Convertir l'adresse en coordonnées géographiques
    geocoder.geocode({ address: address }, (results: any, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;

        // Créer la carte centrée sur la position géographique de l'adresse
        const map = new google.maps.Map(mapElement, {
          center: location,
          zoom: 15, // Niveau de zoom
        });

        // Ajouter un marqueur à l'emplacement de la boulangerie
        new google.maps.marker.AdvancedMarkerElement({
          position: location,
          map: map,
          title: bakery?.name,
        });
      } else {
        console.error(
          "Erreur lors de la géolocalisation de l'adresse : ",
          status
        );
      }
    });
  }

  // Récupérer les posts Instagram du compte Business
  async function fetchInstagramPosts(
    instagram_business_account_id: "17841402390241020"
  ) {
    try {
      const response = await fetch(
        `https://graph.instagram.com/${instagram_business_account_id}/media?fields=id,caption,media_type,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`
      );
      if (response.ok) {
        const data = await response.json();
        instagramPosts = data.data;
      } else {
        console.error("Erreur lors de la récupération des posts Instagram");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des posts Instagram",
        error
      );
    }
  }

  // Exécuter la récupération de la boulangerie lors du montage du composant
  onMount(() => {
    fetchBakery();
  });
</script>

<main id="bakery-body" style="margin: 0 auto;">
  {#if bakery}
    <!-- Cover -->
    <div class="cover-container">
      <img src={bakery?.cover} alt={bakery?.name} />
    </div>

    <!-- Nom -->
    <div class="bakery-name">
      <span>{bakery?.name}</span>
    </div>

    <!-- Adresse -->
    <div class="bakery-address">
      <p>
        <span class="material-symbols-outlined">location_on</span>
        <span>{bakery?.address}</span>
      </p>
      <!-- Carte Google Maps -->
      <div bind:this={mapElement} id="map"></div>
    </div>

    <!-- Instagram API -->
    <div class="bakery-photos">
      <span>Douceurs</span>

      <div class="instagram-posts">
        {#if instagramPosts.length > 0}
          <h3>Publications Instagram</h3>
          <div class="posts-grid">
            {#each instagramPosts as post}
              <div class="post">
                {#if post.media_type === "IMAGE"}
                  <img src={post.media_url} alt={post.caption} />
                {/if}
                <p>{post.caption}</p>
              </div>
            {/each}
          </div>
        {:else}
          <p>Aucune publication Instagram disponible</p>
        {/if}
      </div>
    </div>
  {:else}
    <p>Un problème est survenu</p>
  {/if}
</main>

<style>
  @import "../../../global.css";

  #bakery-body {
    background-color: var(--mainBrown);
  }

  .cover-container {
    width: 100%;
    height: 300px;
    text-align: center;
  }

  .cover-container img {
    width: 100%;
    height: 100%;
  }

  .bakery-name {
    width: 100%;
    margin: 2em 0;
    padding: 0 2em;
  }

  .bakery-name span {
    width: auto;
    height: auto;
    color: var(--mainWhite);
    font-size: 2em;
    font-weight: bold;
  }

  .bakery-address {
    display: flex;
    flex-direction: column;
    align-content: center;
    column-gap: 5px;
    padding: 2em;
    color: var(--mainPurple);
  }

  .bakery-address p {
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin: 10px 0;
  }

  #map {
    height: 600px;
    width: 600px;
    border-radius: var(--buttonBorderRadius);
  }

  .bakery-photos {
    width: 100%;
    margin: 2em 0;
    padding: 2em;
  }

  .bakery-photos span {
    width: auto;
    height: auto;
    color: var(--mainBrown);
    font-size: 20px;
    padding: 10px;
    border-radius: var(--buttonBorderRadius);
    background-color: var(--mainWhite);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1em;
  }

  .post img {
    width: 100%;
    height: auto;
  }
</style>
