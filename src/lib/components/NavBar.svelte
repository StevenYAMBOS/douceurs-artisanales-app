<!-- src/lib/components/NavBar.svelte -->

<script lang="ts">
  import { user } from "@/userStore"; // Importer le store utilisateur

  let isMenuOpen = false;
  let currentUser: any;

  // S'abonner au store pour obtenir les informations utilisateur
  user.subscribe((value) => {
    currentUser = value;
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav>
  <!-- Conteneur logo -->
  <div class="logo-wrapper">
    <img
      id="logo"
      src="https://static-00.iconduck.com/assets.00/svelte-icon-1703x2048-c1sw8yt9.png"
      alt="Logo Douceurs Artisanales"
      class="logo"
    />
  </div>

  <!-- Menu burger responsive -->
  <div class="burger-menu-icon" aria-hidden="true" on:click={toggleMenu}>
    <span class="material-symbols-outlined" style="color: var(--mainWhite);">
      menu
    </span>
  </div>

  <!-- Conteneur des boutons -->
  <div class="nav-buttons" class:open={isMenuOpen}>
    <!-- Bouton Accueil -->
    <div class="nav-button">
      <a href="/" id="auth-button">Accueil</a>
    </div>

    <!-- Bouton Contact -->
    <div class="nav-button">
      <a href="/contact" id="auth-button">Contact</a>
    </div>

    {#if currentUser}
      <div class="nav-button">
        <a href="/profile">
          <img
            class="profilePicture"
            src={currentUser?.profilePicture ||
              "https://avatars.githubusercontent.com/u/95619191?v=4"}
            width="30"
            alt="Profile"
          />
        </a>

        <!-- <a href="/login" class="test">
          <span class="material-symbols-outlined">
            logout
          </span>
        </a> -->
      </div>
    {:else}
      <!-- Bouton connexion -->
      <div class="nav-button">
        <a href="/login" id="auth-button">
          <span class="material-symbols-outlined">person</span>
        </a>
      </div>
    {/if}
  </div>
</nav>

<style>
  @import "../../global.css";

  nav {
    width: 100%;
    background-color: var(--mainPurple);
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .logo-wrapper {
    flex-grow: 1;
  }

  .burger-menu {
    display: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
  }

  .burger-menu .line {
    width: 25px;
    height: 3px;
    background-color: #372221;
  }

  .nav-buttons {
    gap: 20px;
    display: flex;
    align-items: center;
  }

  .nav-button {
    /* margin-left: 20px; */
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #372221;
  }

  #logo {
    width: 30px;
    cursor: pointer;
  }

  #auth-button {
    height: 100%;
    color: var(--mainWhite);
    text-decoration: none;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  #auth-button:hover {
    color: var(--mainBrown);
  }
  #auth-button a span {
    height: 100%;
    text-align: center;
  }

  .profilePicture {
    border-radius: var(--buttonBorderRadius);
    height: 30px;
  }

  /* Ajout de styles pour l'icône du menu burger */
  .burger-menu-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    /* Afficher l'icône burger uniquement pour les petits écrans */
    .burger-menu-icon {
      display: block;
    }

    /* Masquer le menu traditionnel sur les petits écrans */
    .nav-buttons {
      display: none;
    }

    .nav-buttons.open {
      display: flex;
      flex-direction: column;
    }
  }
</style>
