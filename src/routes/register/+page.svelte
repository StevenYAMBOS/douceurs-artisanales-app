<script lang="ts">
  import ToggleButton from "@/components/ToggleButton.svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";
  import { goto } from "$app/navigation";

  let firstname = "";
  let lastname = "";
  let email = "";
  let password = "";
  let isOwner = false;
  let passwordError = ""; // Pour stocker les erreurs de mot de passe
  let showPasswordInfo = false; // Pour afficher la popup d'info sur le mot de passe
  let showPopup = false; // Pour afficher ou non la popup
  let popupMessage = ""; // Message de la popup (succès ou erreur)
  let isError = false; // Pour distinguer succès ou erreur

  const API = PUBLIC_API_LOCAL;

  // Fonction pour gérer la soumission du formulaire
  async function handleRegister(event: Event) {
    event.preventDefault();

    // Validation du mot de passe
    if (!validatePassword(password)) {
      passwordError =
        "Le mot de passe doit avoir au moins 10 caractères, inclure une majuscule, un chiffre, et un caractère spécial.";
      return;
    } else {
      passwordError = ""; // Réinitialiser si le mot de passe est valide
    }

    const response = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        isOwner,
      }),
    });

    if (response.ok) {
      popupMessage = "Inscription réussie !";
      isError = false; // Succès
      showPopup = true; // Afficher la popup

      // Masquer la popup après 3 secondes
      setTimeout(() => {
        showPopup = false;
      }, 3000);

      // Redirection après 1.5 secondes
      setTimeout(() => {
        goto("/login");
      }, 1500);
    } else {
      // Récupérer le message d'erreur du back-end
      const errorMessage = await response.text();
      popupMessage =
        errorMessage || "Erreur lors de l'enregistrement. Veuillez réessayer.";
      isError = true; // Erreur
      showPopup = true; // Afficher la popup

      // Masquer la popup après 3 secondes
      setTimeout(() => {
        showPopup = false;
      }, 3000);
    }
  }

  // Validation du mot de passe
  function validatePassword(password: string) {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;
    return regex.test(password);
  }

  // Fonction pour afficher la popup d'info sur le mot de passe
  function togglePasswordInfo() {
    showPasswordInfo = !showPasswordInfo;
  }
</script>

<body id="register-body" style="margin: 0 auto;">
  <div id="register-wrapper">
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
    <div id="left-side" class="register-card">
      <h2>Créer un compte</h2>

      <!-- Formulaire de register avec gestion de la soumission -->
      <form id="register-form" on:submit={handleRegister}>
        <div class="username-wrapper">
          <div class="username">
            <label for="firstname">Prénom</label>
            <input
              type="text"
              id="firstname"
              placeholder="Votre prénom"
              bind:value={firstname}
              required
            />
          </div>

          <div class="username">
            <label for="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              placeholder="Votre nom de famille"
              bind:value={lastname}
              required
            />
          </div>
        </div>

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Votre email"
          bind:value={email}
          required
        />

        <!-- Wrapper du champ de mot de passe avec l'icône d'info -->
        <div class="password-wrapper">
          <label for="password">Mot de passe</label>
          <button
            type="button"
            id="password-information"
            style="color: var(--mainBrown); cursor: pointer;"
            class="material-symbols-outlined"
            on:click={togglePasswordInfo}
          >
            info
          </button>
          <!-- Popup d'info sur le mot de passe -->
          {#if showPasswordInfo}
            <div class="password-popup">
              <p>
                Le mot de passe doit avoir :

                <li>au moins 10 caractères</li>
                <li>une majuscule</li>
                <li>un chiffre</li>

                <li>un caractère spécial</li>
              </p>
            </div>
          {/if}
        </div>

        <!-- Champ mot de passe -->
        <input
          type="password"
          id="password"
          placeholder="Votre mot de passe"
          bind:value={password}
          required
          class:input-error={passwordError}
        />
        <!-- Message d'erreur sous l'input -->
        {#if passwordError}
          <p class="error-message">{passwordError}</p>
        {/if}

        <ToggleButton
          label="Êtes-vous artisan boulanger ?"
          bind:option={isOwner}
        />

        <input type="submit" value="Créer son compte" />
        <!-- Bouton 'Se connecter' -->
      </form>

      <div class="links">
        <a href="/login">
          <span>Déjà un compte ?</span>
        </a>

        <a href="/forgot-password">
          <span>Mot de passe oublié ?</span>
        </a>
      </div>
    </div>

    <!-- Image de fond à droite -->
    <div id="right-side" class="register-card"></div>
  </div>

  {#if showPopup}
    <div class="popup {isError ? 'error' : 'success'}">
      <p>{popupMessage}</p>
    </div>
  {/if}
</body>

<style>
  @import "../../global.css";

  body {
    width: 100%;
    height: 100vh;
  }

  #logo-wrapper {
    margin: 1em;
  }

  #logo {
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }

  #register-wrapper {
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
    margin-bottom: 2rem;
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

  .username-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 1.5em;
  }

  .username {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  /* Styles des champs input */
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    margin-bottom: 2em;
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
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: var(--mainBrown); /* Bordure blanche au focus */
  }

  /* Hover pour changer la couleur de bordure */
  input[type="text"]:hover,
  input[type="email"]:hover,
  input[type="password"]:hover {
    border-color: var(--mainBrown); /* Couleur marron au survol */
  }

  /* Styles du bouton submit avec dégradé diagonal et transition fluide */
  input[type="submit"] {
    padding: 0.75rem;
    background-image: linear-gradient(
      to bottom left,
      #f6d365 0%,
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

  .password-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-bottom: 0.5rem;
  }
  .password-wrapper span {
    width: auto;
  }
  .password-wrapper label {
    margin-bottom: 0rem;
  }

  #password-information {
    /* width: 10px; */
    background-color: transparent;
    border: none;
  }

  /* Champ de saisie avec bordure rouge en cas d'erreur */
  .input-error {
    border-color: red;
  }

  /* Message d'erreur en dessous du champ mot de passe */
  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: -1.5em;
    margin-bottom: 1.5em;
  }

  /* Popup d'information sur le mot de passe */
  .password-popup {
    position: absolute;
    background-color: var(--mainBrown);
    padding: 1em;
    border-radius: 20px;
    bottom: 2em;
    left: 10em;
    width: 250px;
    color: var(--mainWhite);
    text-align: justify;
    font-size: 0.875rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Rest of your styles remain unchanged */
  .password-wrapper {
    display: flex;
    /* align-items: center; */
    gap: 0.5em;
    position: relative; /* Pour positionner la popup d'info */
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
    background-image: url(https://storage.googleapis.com/pai-images/4c3c14cdaff44f8994338e718da71e3d.jpeg);
    background-position: center;
    background-size: cover;
    filter: brightness(60%);
  }

  .switchSmall2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  .switchSmall2 input {
    display: none;
  }
  .switchSmall2 small {
    display: inline-block;
    width: 38px;
    height: 15px;
    background: #212121;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }
  .switchSmall2 small:before {
    content: "";
    position: absolute;
    width: 19px;
    height: 19px;
    background: var(--mainGrey);
    border-radius: 50%;
    top: -2px;
    left: -1px;
    transition: 0.3s;
    box-shadow: -3px 0 3px rgba(0, 0, 0, 0.25);
  }
  .switchSmall2 input:checked ~ small {
    background: var(--mainBrown);
    transition: 0.3s;
  }
  .switchSmall2 input:checked ~ small:before {
    transform: translate(20px, 0px);
    transition: 0.3s;
    box-shadow: 3px 0 3px rgba(0, 0, 0, 0.25);
  }

  .popup {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1em 2em;
    border-radius: var(--buttonBorderRadius);
    z-index: 1000;
    font-size: 16px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .popup.success {
    background-color: var(--mainGrey);
    color: green;
  }

  .popup.error {
    background-color: var(--mainGrey);
    color: red;
  }
</style>
