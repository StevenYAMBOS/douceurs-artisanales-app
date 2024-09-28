<script>
  let email = "";
  let password = "";

  // Fonction pour gérer la soumission du formulaire
  /**
   * @param {{ preventDefault: () => void; }} event
   */
  function handleLogin(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }
</script>

<body id="login-body" style="margin: 0 auto;">
  <div id="login-wrapper">
    <!-- Conteneur logo -->
    <div class="logo-wrapper">
      <a href="/">
        <img
          id="logo"
          src="https://static-00.iconduck.com/assets.00/svelte-icon-1703x2048-c1sw8yt9.png"
          alt="Logo Douceurs Artisanales"
          class="logo"
        />
      </a>
    </div>

    <div id="left-side" class="login-card">
      <h2>Se connecter</h2>

      <!-- Formulaire de login avec gestion de la soumission -->
      <form id="login-form" on:submit={handleLogin}>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Votre email"
          bind:value={email}
          required
        />

        <label for="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Votre mot de passe"
          bind:value={password}
          required
        />

        <input type="submit" value="Se connecter" />
        <!-- Bouton 'Se connecter' -->
      </form>

      <div class="links">
        <a href="/register">
          <span>Pas encore de compte ?</span>
        </a>

        <a href="/forgot-password">
          <span>Mot de passe oublié ?</span>
        </a>
      </div>
    </div>

    <!-- Image de fond à droite -->
    <div id="right-side" class="login-card"></div>
  </div>
</body>

<style>
  @import "../../global.css";

  body {
    width: 100%;
    height: 100vh;
  }

  #logo {
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }

  #login-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: var(--mainPurple);
  }

  #left-side {
    width: 50%;
    padding: 2rem;
    background-color: var(--mainPurple);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 1.5rem;
    color: var(--mainWhite);
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    color: var(--mainWhite);
  }

  /* Styles des champs input */
  input[type="email"],
  input[type="password"] {
    margin-bottom: 2.5em;
    padding: 0.75rem;
    font-size: 1rem;
    width: 100%;
    color: var(--mainWhite);
    background-color: transparent;
    border: 3px solid var(--mainWhite); /* Bordure pleine */
    border-radius: var(--buttonBorderRadius);
    outline: none;
    transition: border-color 0.3s ease;
  }

  /* Couleur de focus */
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: var(--mainBrown); /* Bordure blanche au focus */
  }

  /* Hover pour changer la couleur de bordure */
  input[type="email"]:hover,
  input[type="password"]:hover {
    border-color: var(--mainBrown); /* Couleur marron au survol */
  }

  /* Styles du bouton submit avec dégradé diagonal et transition fluide */
  input[type="submit"] {
    padding: 0.75rem;
    background-image: linear-gradient(
      to bottom left,
      /* Début en haut à droite, fin en bas à gauche */ #f6d365 0%,
      #fda085 51%,
      #f6d365 100%
    );
    background-size: 200% auto; /* Permet l'effet de transition du dégradé */
    color: var(--mainWhite);
    border: none;
    border-radius: var(--buttonBorderRadius);
    font-size: 1rem;
    cursor: pointer;
    transition:
      background-position 0.5s ease,
      color 0.5s ease; /* Transition douce pour le fond et la couleur du texte */
  }

  /* Effet hover avec changement de direction du dégradé */
  input[type="submit"]:hover {
    background-position: right center; /* Déplacement du dégradé au survol */
    color: #fff; /* Changement de la couleur du texte */
  }

  /* Styles des liens */
  .links {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .links a {
    color: var(--mainWhite);
    text-decoration: none;
  }

  .links a:hover {
    color: var(--mainBrown);
  }

  #right-side {
    width: 50%;
    background-image: url(https://static.vecteezy.com/system/resources/previews/032/492/833/large_2x/bakery-general-store-graphic-novel-anime-manga-wallpaper-free-photo.jpg);
    background-position: center;
    background-size: cover;
    filter: brightness(60%);
  }
</style>
