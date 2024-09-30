<script lang="ts">
  // import { createEventDispatcher } from "svelte";
  // export let bakeries: any[] = [];
  // let searchTerm = "";

  // const dispatch = createEventDispatcher();

  // // Filtrer les boulangeries en fonction du terme de recherche
  // $: filteredBakeries = bakeries.filter(bakery =>
  //   bakery.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // // Emettre un événement de recherche lorsque le terme change
  // $: dispatch("search", searchTerm);
</script>

<div id="searchbar">
  <form role="search">
    <span>Trouvez la meilleure pâtisserie près de chez vous.</span>
    <input
      id="search"
      type="search"
      placeholder="Rechercher une boulangerie..."
      required
    />
  </form>

  <!-- Afficher les boulangeries filtrées -->
  <!-- {#if filteredBakeries.length > 0}
    <ul id="search-results">
      {#each filteredBakeries as bakery}
        <li>
          <a href={`/bakery/${bakery.id}`}>{bakery.name}</a>
        </li>
      {/each}
    </ul>
  {:else if searchTerm}
    <p>Aucune boulangerie trouvée.</p>
  {/if} -->
</div>

<style>
  @import "../../global.css";
  #searchbar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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

    /* Style pour le menu déroulant des résultats de recherche */
    #search-results {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    max-height: 200px;
    overflow-y: auto;
  }
  #search-results li {
    padding: 10px;
    background: white;
    border-bottom: 1px solid #ccc;
  }
  #search-results li a {
    text-decoration: none;
    color: black;
  }
  #search-results li:hover {
    background: #f0f0f0;
  }
</style>
