<!-- src/lib/components/NavBar.svelte -->

<script lang="ts">
  let isMenuOpen = false;

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

  <!-- Menu burger -->
  <div class="burger-menu" on:click={toggleMenu}>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <!-- Conteneur des boutons -->
  <div class="nav-buttons" class:open={isMenuOpen}>
    <!-- Bouton thèmes -->
    <div class="nav-button">
      <div id="theme-button">
        <span class="material-symbols-outlined">
          light_mode
          </span>
      </div>
    </div>

    <!-- Bouton connexion -->
    <div class="nav-button">
      <a href="/login" id="auth-button">
          <span class="material-symbols-outlined">
            person
            </span>
      </a>
    </div>
  </div>
</nav>

<style>
  nav {
    width: 100%;
    background-color: #f3eae4;
    padding: 20px 0;
    margin: 0 auto;
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
    margin-left: 20px;
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
    color: #372221;
    text-decoration: none;
  }
  #auth-button:hover {
    opacity: 0.9;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .burger-menu {
      display: flex;
    }

    .nav-buttons {
      position: absolute;
      top: 50px;
      right: 0;
      flex-direction: column;
      align-items: flex-end;
      background-color: transparent;
      padding: 10px;
      display: none;
    }

    .nav-buttons.open {
      display: flex;
    }

    .nav-button {
      margin-left: 0;
    }
  }
</style>
