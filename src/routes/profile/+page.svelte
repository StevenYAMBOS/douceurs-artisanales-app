<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";

  let user = {
    firstName: '',
    lastName: '',
    profileImage: '',
  };
  let role = ""; // Rôle de l'utilisateur
  let error = "";

  const API = PUBLIC_API_LOCAL;

  // Récupérer les informations de l'utilisateur
  onMount(async () => {
    try {
      const token = localStorage.getItem("token");
      const userConnected = localStorage.getItem("user");
      const response = await fetch(`${API}/user/profile?email=${userConnected}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        user = data.user;
        role = data.role;
        console.log(data);
        
      } else {
        error = "Impossible de récupérer les informations utilisateur";
      }
    } catch (err) {
      console.error(err);
      error = "Erreur lors de la récupération des informations utilisateur";
    }
  });

  // Fonction pour changer le mot de passe (à implémenter)
  function changePassword() {
    // Implémenter la logique de changement de mot de passe
  }
</script>

<body>
  {#if error}
    <p>{error}</p>
  {/if}

  <!-- Menu de gauche -->
  <div class="profile-container">
    <nav class="left-menu">
      <ul>
        <li><a href="#profile">Profil</a></li>
        <li><a href="#favorites">Favoris</a></li>
        <li><a href="#comments">Commentaires</a></li>
        <li><a href="#status-change">Changement de statut</a></li>
      </ul>
    </nav>

    <!-- Contenu du profil à droite -->
    <div class="profile-details">
      <section id="profile">
        <h2>Profil</h2>
        <img
          src={user.profileImage || "/static/default-avatar.png"}
          alt="Photo de profil"
          class="profile-image"
        />
        <p><strong>Nom :</strong> {user.lastName}</p>
        <p><strong>Prénom :</strong> {user.firstName}</p>
        <button on:click={changePassword}>Changer de mot de passe</button>
      </section>
    </div>
  </div>
</body>

<style>
  .profile-container {
    display: flex;
  }

  .left-menu {
    width: 25%;
    background-color: #f7f7f7;
    padding: 1em;
  }

  .left-menu ul {
    list-style: none;
    padding: 0;
  }

  .left-menu ul li {
    margin-bottom: 1.5em;
  }

  .left-menu ul li a {
    text-decoration: none;
    color: #333;
  }

  .profile-details {
    width: 75%;
    padding: 2em;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .profile-details section {
    margin-bottom: 2em;
  }
</style>
