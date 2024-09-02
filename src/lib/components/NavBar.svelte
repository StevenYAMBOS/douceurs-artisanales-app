<!-- src/lib/components/NavBar.svelte -->

<script>
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
      <button id="theme-button">Theme</button>
    </div>

    <!-- Bouton connexion -->
    <div class="nav-button">
      <button id="auth-button">Connexion</button>
    </div>
  </div>
</nav>

<style>
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    padding: 20px 0;
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
    background-color: white;
  }

  .nav-buttons {
    display: flex;
    gap: 20px;
  }

  .nav-button {
    margin-left: 20px;
  }

  #logo {
    width: 30px;
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
