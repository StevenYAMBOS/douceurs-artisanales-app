<!-- src/routes/bakeries/+page.svelte -->

<script lang="ts">
  import SearchBar from "@/components/SearchBar.svelte";
  import { onMount } from "svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";
  import { page } from "$app/stores";

  const API = PUBLIC_API_LOCAL;
  let bakeries: any[] = [];

  onMount(async function () {
    const zipCode = new URLSearchParams($page.url.search).get("zipCode");
    if (zipCode) {
      const response = await fetch(
        `${API}/bakery/get-bakeries-by-zip-code?zipCode=${zipCode}`
      );
      const data = await response.json();
      bakeries = data;
      console.log(bakeries);
    }
  });
</script>

<header
  style="height: 100vh; display: flex; flex-direction: column; justify-content: space-around;align-items: center; background-color: var(--mainBrown);"
>
  <h2 style="color: var(--mainPurple); text-align: center; font-size: 2.5rem;">
    Paris
    <!-- {zipCode} -->
  </h2>
  <div id="bakeries-searchbar">
    <SearchBar />
  </div>
</header>

<body id="bakeries-body" style="margin: 0 auto;">
  <section id="list-of-bakeries-wrapper">
    {#each bakeries as bakery}
      <div class="bakery-card">
        <!-- Image et nom de la boulangerie -->
        <div
          class="cover-wrapper"
          style="background-image: url({bakery.cover});"
        >
          <div class="buttons">
            <img
              src={bakery.logo}
              alt="Logo de {bakery.name}"
              height="50"
              style="border-radius: 50%; cursor: pointer;"
            />
            <!-- Logo de la boulangerie -->
            <button id="like-button" type="button" class="like-button">
              <span class="material-symbols-outlined" style="color: var(--mainBrown);"> favorite </span>
            </button>
          </div>

          <div class="name">
            <span>{bakery.name}</span>
            <!-- Nom de la boulangerie -->
          </div>
        </div>

        <p style="font-size: 10px;">{bakery.description}</p>
        <!-- Informations supplémentaires -->
        <div class="infos-wrapper">
          <div class="socials">
            <a style="text-transform: none;" href={bakery.instagram} target="_blank">Instagram</a>
          </div>
          <div class="multiple-locations">
            {bakery.multipleLocations
              ? "Plusieurs adresses"
              : "Une seule adresse"}
          </div>
        </div>
      </div>
    {:else}
      <h3>Aucune Boulangerie</h3>
    {/each}
  </section>
</body>

<style>
  @import "../../global.css";

  #bakeries-body {
    background-color: var(--mainBrown);
  }
  #bakeries-searchbar {
    width: 100%;
    /* height: 50vh; */
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    align-items: center;
    text-align: center;
    /* background-color: var(--mainBrown); */
  }

  #list-of-bakeries-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Grille de 4 colonnes */
    gap: 20px;
    align-items: center;
    justify-content: center; /* Centre les cards */
    /* background-color: var(--mainBrown); */
    padding: 2em;
  }

  .bakery-card {
    max-width: 400px;
    height: 250px;
    border-radius: 10px;
    background-color: var(--mainWhite);
  }

  .cover-wrapper {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: aqua; */
    /* background-image: url(https://static.vecteezy.com/system/resources/previews/032/492/821/large_2x/bakery-general-store-graphic-novel-anime-manga-wallpaper-free-photo.jpg); */
    background-position: center;
    background-size: cover;
  }

  .like-button {
    display: flex;
    justify-content: center;
    background-color: var(--mainWhite);
    height: 50px;
    width: 50px;
    border-radius: var(--buttonBorderRadius);
    padding: 10px;
    border: none;
    align-items: center;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .name {
    padding: 10px 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.513);
    text-align: center;
  }

  .name span {
    color: var(--mainWhite);
  }

  .infos-wrapper {
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .multiple-locations {
    width: auto;
    height: auto;
    background-color: var(--mainPurple);
    border-radius: var(--buttonBorderRadius);
    padding: 10px;
    color: var(--mainWhite);
    font-size: 9px;
  }

</style>
