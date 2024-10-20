<!-- src/routes/bakeries/+page.svelte -->

<script lang="ts">
  import SearchBar from "@/components/SearchBar.svelte";
  import { onMount } from "svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  const API = PUBLIC_API_LOCAL;
  let bakeries: any[] = [];
  const zipCode = new URLSearchParams($page.url.search).get("zipCode");

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

  // Fonction pour rediriger vers la page de détails d'une boulangerie
  function goToBakery(id: string, name : string) {
    goto(`/bakery/${id}`);// Rediriger vers la route dynamique
  }
</script>

<body id="bakeries-body" style="margin: 0 auto;">
  {#each bakeries as bakery}
    <div id="searchbar">
      <form role="search">
        <span style="font-size: 2rem;">{bakery.zipCode} Paris</span>
        <input
          id="search"
          type="search"
          placeholder="Rechercher une boulangerie..."
          required
        />
      </form>
    </div>

    <section id="list-of-bakeries-wrapper">
      <div class="bakery-card" on:click={() => goToBakery(bakery?.id, bakery?.name)}>
        <!-- Image et nom de la boulangerie -->
        <div
          class="cover-wrapper"
          style="background-image: url({bakery?.cover});"
        >
          <div class="buttons">
            <img
              src={bakery?.logo}
              alt="Logo de {bakery?.name}"
              height="50"
              style="border-radius: 50%; cursor: pointer;"
            />
            <!-- Logo de la boulangerie -->
            <button id="like-button" type="button" class="like-button">
              <span
                class="material-symbols-outlined"
                style="color: var(--mainBrown);"
              >
                favorite
              </span>
            </button>
          </div>

          <div class="name">
            <span>{bakery?.name}</span>
            <!-- Nom de la boulangerie -->
          </div>
        </div>

        <!-- Informations supplémentaires -->
        <div class="infos-wrapper">
          <!-- <p style="font-size: 10px;">{bakery?.description}</p> -->
          <div class="socials">
            <a
              style="text-transform: none;"
              href={bakery?.instagram}
              target="_blank"
              ><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                alt="Instagram logo"
                width="30"
              /></a
            >
          </div>
          <div class="multiple-locations">
            {bakery?.multipleLocations
              ? "Plusieurs adresses"
              : "Une seule adresse"}
          </div>
        </div>
      </div>
    </section>
  {:else}
    <div class="no-bakeries">
      <span style="font-size: 2rem;">{zipCode} Paris</span>
      <button type="button">
        <a href="/" style="text-decoration: none;">Aucune boulangerie</a>
      </button>
    </div>
  {/each}
</body>

<style>
  @import "../../global.css";

  #searchbar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  #bakeries-body {
    background-color: var(--mainBrown);
  }
  #bakeries-searchbar {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  #list-of-bakeries-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }

  .no-bakeries {
    width: 100%;
    height: 100vh;
    background-color: var(--mainBrown);
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    color: var(--mainWhite);
    /* margin: 2em 0; */
  }

  .no-bakeries button {
    padding: 10px 20px;
    border-radius: var(--buttonBorderRadius);
    border: none;
    background-color: var(--mainWhite);
  }

  .bakery-card {
    max-width: 500px;
    height: 300px;
    max-height: 300px;
    border-radius: 10px;
    background-color: var(--mainWhite);
    cursor: pointer;
  }

  .cover-wrapper {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    height: 20%;
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

  #searchbar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--mainBrown);
    /* margin-top: 4em; */
  }
  form {
    position: relative;
    width: 50%;
    height: 300px;
    background: transparent;
    border-radius: var(--buttonBorderRadius);
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;
  }
  input,
  input[type="search"] {
    outline: 0;
    width: 100%;
    height: 50px;
    background-color: var(--mainWhite);
    color: var(--mainBrown);
    padding: 0 1.6rem;
    border: 2px var(--mainWhite) solid;
    border-radius: 50px;
    appearance: none;
    transition: all;
    opacity: 1;
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  input:not(:placeholder-shown) {
    border-radius: var(--buttonBorderRadius);
    width: 100%;
    color: var(--mainBrown);
  }
  input,
  input[type="search"]::placeholder {
    color: var(--mainPurple);
    opacity: 0.5;
  }
  input[type="search"]:focus {
    border-color: var(--mainBrown);
  }
  span {
    color: var(--mainWhite);
    font-size: var(--title2);
  }
</style>
