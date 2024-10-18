<!-- src/routes/profile/+page.svelte -->

<script lang="ts">
  import { clearUser, user } from "@/userStore";

  let currentUser: any;
  let activeSection = "profile";

  // Fonction pour changer de section
  function setActiveSection(section: string) {
    activeSection = section;
  }

  // S'abonner au store pour obtenir les informations utilisateur
  user.subscribe((value) => {
    currentUser = value;
  });

  // Fonction pour changer le mot de passe (à implémenter)
  function changePassword() {}

  // Fonction de déconnexion
  function handleLogout() {
    clearUser();
    window.location.reload();
  }
</script>

<body id="profile-body" style="margin: 0 auto;">
  <!-- Mini header -->
  <div class="mini-header">
    <h2><strong>Profil</strong></h2>
    <span>Paramètres du profil</span>
  </div>

  <!-- Conteneur des menus -->
  <div class="profile-container">
    <!-- Menu de gauche -->
    <nav class="left-menu">
      <ul class="left-menu-wrapper">
        <li>
          <a
            href="/profile"
            on:click={() => setActiveSection("profile")}>Profil</a
          >
        </li>
        <!-- <li>
          <a
            href="/favorites"
            on:click={() => setActiveSection("favorites")}>Favoris</a
          >
        </li>
        <li>
          <a
            href="comments"
            on:click={() => setActiveSection("comments")}>Commentaires</a
          >
        </li>
        <li>
          <a
            href="status"
            on:click={() => setActiveSection("status-change")}
            >Changement de statut</a
          >
        </li> -->
        <button id="sign-out-btn" on:click={handleLogout}>Se déconnecter</button
        >
      </ul>
    </nav>

    <!-- Menu de droite -->
    <div class="profile-details">
      <section id="profile">
        <form id="login-form">
          <label for="profile-picture">Image de profil</label>
          <div class="profile-picture-wrapper">
            <img
              src={currentUser?.profilePicture ||
                "https://avatars.githubusercontent.com/u/95619191?v=4"}
              alt="PP"
              class="profile-image"
            />
          </div>

          <label for="email">Email</label>
          <input
            class="profil-input"
            type="email"
            id="email"
            placeholder={currentUser.email}
            value={currentUser.email}
          />

          <label for="firstname">Prénom</label>
          <input
            class="profil-input"
            type="text"
            id="firstname"
            placeholder={currentUser.firstname}
            value={currentUser.firstname}
          />

          <label for="lastname">Nom</label>
          <input
            class="profil-input"
            type="text"
            id="lastname"
            placeholder={currentUser.lastname}
            value={currentUser.lastname}
          />

          <label for="password">Nouveau mot de passe</label>
          <input
            class="profil-input"
            type="password"
            id="password"
            placeholder="Nouveau mot de passe"
          />

          <input
            id="update-profile-button"
            type="submit"
            value="Enregistrer les modifications"
          />
        </form>
      </section>
    </div>
  </div>
</body>

<style>
  @import "../../global.css";

  .mini-header {
    height: 100px;
    background-color: var(--mainPurple);
    padding: var(--pagePadding);
    /* margin: 2em 0; */
    border-bottom: 1px solid var(--mainWhite);
  }

  .mini-header h2 {
    color: var(--mainWhite);
  }
  .mini-header span {
    color: var(--mainWhite);
  }

  .profile-container {
    display: flex;
    height: 100vh;
  }

  .left-menu {
    /* margin: 2em; */
    width: 25%;
    background-color: var(--mainPurple);
    padding: 2em;
  }

  .left-menu ul {
    list-style: none;
    padding: 0;
  }

  .left-menu ul li {
    margin-bottom: 1.5em;
    text-decoration: none;
  }

  .left-menu ul li a {
    text-decoration: none;
    color: var(--mainWhite);
  }

  .left-menu ul li a:hover {
    text-decoration: underline;
  }

  .profile-details {
    width: 75%;
    background-color: var(--mainPurple);
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .profile-details section {
    display: flex;
    flex-direction: column;
    background-color: var(--mainPurple);
    justify-content: flex-start;
    align-items: left;
    margin-bottom: 2;
  }

  #profile img {
    width: 70px;
    height: 70px;
  }

  #sign-out-btn {
    background-color: var(--mainWhite);
    border-radius: var(--buttonBorderRadius);
    padding: 10px;
    color: var(--mainBrown);
    border: none;
    cursor: pointer;
  }

  #sign-out-btn:hover {
    background-color: var(--mainBrown);
    color: var(--mainWhite);
  }

  form {
    margin: 2em;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .profile-picture-wrapper {
    margin-bottom: 0.5rem;
  }

  label {
    margin-bottom: 0.5rem;
    color: var(--mainWhite);
  }

  #profile-picture {
    margin-bottom: 2.5rem;
  }

  /* Styles des champs input */
  input[type="email"],
  input[type="password"],
  input[type="text"] {
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
  input[type="password"]:focus,
  input[type="text"]:focus {
    border-color: var(--mainBrown); /* Bordure blanche au focus */
  }

  /* Hover pour changer la couleur de bordure */
  input[type="email"]:hover,
  input[type="password"]:hover,
  input[type="text"]:hover {
    border-color: var(--mainBrown); /* Couleur marron au survol */
  }

  .profil-input::placeholder {
    color: var(--mainWhite);
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
</style>
