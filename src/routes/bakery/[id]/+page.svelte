<!-- src/routes/bakery/[id]/+page.svelte -->

<script lang="ts">
  import { onMount } from "svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";
  import { page } from "$app/stores"; // Pour accéder à l'ID de l'URL
  import { clearUser } from "@/userStore";

  let bakery: any = null;
  let id = $page.params.id; // Récupérer l'ID depuis l'URL
  let name = $page.params.name; // Récupérer l'ID depuis l'URL

  const API = PUBLIC_API_LOCAL;

  async function fetchBakery() {
    try {
      const response = await fetch(`${API}/bakery/${id}`);
      if (response.status === 401) {
        clearUser();
      } else if (response.ok) {
        bakery = await response.json();
        console.log(bakery);
        
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la boulangerie", error);
    }
  }

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
      <span class="material-symbols-outlined">
        location_on
        </span>
      <span>{bakery?.address}</span>
    </div>

    <!-- Google Map API -->
    <div class="bakery-address">
      Intégration de Google Maps (plus tard)...
    </div>

    <!-- Instagram API -->
    <div class="bakery-photos">
      <span>Douceurs</span>
    </div>


  {:else}
    <p>Un problème est survenue</p>
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
    background-color: aqua;
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

  .bakery-name
  span {
    width: auto;
    height: auto;
    color: var(--mainWhite);
    font-size: 2em;
    font-weight: bold;
    /* padding: 10px;
    border-radius: var(--buttonBorderRadius);
    background-color: var(--mainWhite); */
  }

  .bakery-address {
    display: flex;
    align-content: center;
    column-gap: 5px;
    padding: 2em;
    color: var(--mainPurple);
  }

  .bakery-photos {
    width: 100%;
    margin: 2em 0;
    padding: 0 2em;
  }

  .bakery-photos
  span {
    width: auto;
    height: auto;
    color: var(--mainBrown);
    font-size: 20px;
    padding: 10px;
    border-radius: var(--buttonBorderRadius);
    background-color: var(--mainWhite);
  }

</style>
