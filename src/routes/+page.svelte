<!-- src/routes/+page.svelte -->

<script lang="ts">
  import SearchBar from "@/components/SearchBar.svelte";
  import { onMount } from "svelte";
  import { PUBLIC_API_LOCAL } from "$env/static/public";
  import { clearUser } from "@/userStore";

  const API = PUBLIC_API_LOCAL;

  // Liste des arrondissements avec leur zipCode, url et image de fond
  const districts = [
    {
      name: "Paris 1",
      zipCode: "75001",
      url: "bakeries?zipCode=75001",
      backgroundImageUrl:
        "https://relaisduvin.com/2021_RELAISDUVIN_Recette-eclair-chocolat0.jpg",
    count: null
    },
    {
      name: "Paris 2",
      zipCode: "75002",
      url: "bakeries?zipCode=75002",
      backgroundImageUrl:
        "https://relaisduvin.com/2021_RELAISDUVIN_Recette-eclair-chocolat0.jpg",
    count: null
      },
    {
      name: "Paris 3",
      zipCode: "75003",
      url: "bakeries?zipCode=75003",
      backgroundImageUrl:
        "https://i.ytimg.com/vi/QG9H0QdfMz8/maxresdefault.jpg",
    count: null
      },
    {
      name: "Paris 4",
      zipCode: "75004",
      url: "bakeries?zipCode=75004",
      backgroundImageUrl:
        "https://as1.ftcdn.net/v2/jpg/05/49/23/38/1000_F_549233892_XAhb9NPxq2cAKJ1p7EAXRQRwyM5vLeqY.jpg",
    count: null
      },
    {
      name: "Paris 5",
      zipCode: "75005",
      url: "bakeries?zipCode=75005",
      backgroundImageUrl:
        "https://www.lespepitesdenoisette.fr/wp-content/uploads/2021/06/Recette-tarte-fraise-coco.jpg",
    count: null
      },
    {
      name: "Paris 6",
      zipCode: "75006",
      url: "bakeries?zipCode=75006",
      backgroundImageUrl:
        "https://img.passeportsante.net/1200x675/2022-10-25/shutterstock-663722134.webp",
    count: null
      },
    {
      name: "Paris 7",
      zipCode: "75007",
      url: "bakeries?zipCode=75007",
      backgroundImageUrl:
        "https://www.creacorner.be/ShowImage.ashx?d_id=bavar9ffgm&imgfield=D_IC_IMAGE",
    count: null
      },
    {
      name: "Paris 8",
      zipCode: "75008",
      url: "bakeries?zipCode=75008",
      backgroundImageUrl:
        "https://www.produits-laitiers.com/app/uploads/2011/12/adobestock_77175980.jpg",
    count: null
      },
    {
      name: "Paris 9",
      zipCode: "75009",
      url: "bakeries?zipCode=75009",
      backgroundImageUrl:
        "https://mongraindesucre.com/wp-content/uploads/2024/05/1715382733_recette-de-la-tarte-tropezienne-authentique-saveurs-du-sud-en-cuisine-1024x701.jpg",
    count: null
      },
    {
      name: "Paris 10",
      zipCode: "75010",
      url: "bakeries?zipCode=75010",
      backgroundImageUrl:
        "https://www.specialgastronomie.com/wp-content/uploads/2021/12/tarte_au_citron_meringuee-1.jpg",
    count: null
      },
    {
      name: "Paris 11",
      zipCode: "75011",
      url: "bakeries?zipCode=75011",
      backgroundImageUrl:
        "https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/import/recettes-ddf/cheesecake-au-citron-2058492/22002812-1-fre-FR/Cheesecake-au-citron.jpg",
    count: null
      },
    {
      name: "Paris 12",
      zipCode: "75012",
      url: "bakeries?zipCode=75012",
      backgroundImageUrl: "https://media.ccmbg.com/tc/5831956842/907341",
      count: null
    },
    {
      name: "Paris 13",
      zipCode: "75013",
      url: "bakeries?zipCode=75013",
      backgroundImageUrl:
        "https://www.lifemadedelicious.ca/-/media/gmi/core-sites/lmd/legacy/images/lmd/recipes/pumpkin-spice-dessert_16x9.jpg",
    count: null
      },
    {
      name: "Paris 14",
      zipCode: "75014",
      url: "bakeries?zipCode=75014",
      backgroundImageUrl:
        "https://chovdelices.com/wp-content/uploads/2016/12/Choux-%C3%A0-la-cr%C3%A8me-pralin%C3%A9.jpg",
    count: null
      },
    {
      name: "Paris 15",
      zipCode: "75015",
      url: "bakeries?zipCode=75015",
      backgroundImageUrl:
        "https://image.over-blog.com/Dqn3CLTvi6ZAwC1BlHBy2vgteaw=/filters:no_upscale()/image%2F2499040%2F20210523%2Fob_352ecb_img-1594.jpg",
    count: null
      },
    {
      name: "Paris 16",
      zipCode: "75016",
      url: "bakeries?zipCode=75016",
      backgroundImageUrl:
        "https://www.surprisesetgourmandises.fr/wp-content/uploads/2022/11/tartelette-praline-gianduja04.jpg",
    count: null
      },
    {
      name: "Paris 17",
      zipCode: "75017",
      url: "bakeries?zipCode=75017",
      backgroundImageUrl:
        "https://caviar-champagne.com/wp-content/uploads/2020/05/flan-patissier-recette-3-scaled.jpg",
    count: null
      },
    {
      name: "Paris 18",
      zipCode: "75018",
      url: "bakeries?zipCode=75018",
      backgroundImageUrl:
        "https://www.gastronomico.fr/wp-content/uploads/2018/10/photo-eclair-vanille-version-legere-didier-laurent.jpg",
    count: null
      },
    {
      name: "Paris 19",
      zipCode: "75019",
      url: "bakeries?zipCode=75019",
      backgroundImageUrl:
        "https://cache.marieclaire.fr/data/photo/w1200_h630_ci/67/recette-gateaux-congolais-noix-de-coco.jpg",
    count: null
      },
    {
      name: "Paris 20",
      zipCode: "75020",
      url: "bakeries?zipCode=75020",
      backgroundImageUrl:
        "https://philippeconticini.fr/cdn/shop/files/Croissant2.jpg?v=1689159034",
    count: null
      },
  ];

  let bakeries : any[] = [];

  // Fonction pour gérer les erreurs d'authentification
  async function fetchBakeries() {
    try {
      const response = await fetch(`${API}/bakery/get-all`);
      if (response.status === 401) {
        // Si une erreur d'authentification survient, déconnecter l'utilisateur
        clearUser(); 
        // Peut-être rediriger vers la page de login
      } else {
        bakeries = await response.json();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des boulangeries", error);
    }
  }

  onMount(() => {
    fetchBakeries();
  });
</script>

<header>
  <div class="background-image"></div>
  <div id="searchbar-wrapper">
    <SearchBar />
  </div>
</header>

<body style="margin: 0 auto;">
  <section id="districts-section">
    <h2 style="margin: 1.5em auto; color: #BE7408; font-size: 2rem;">
      Arrondissements
    </h2>
    <div id="districts-wrapper">
      {#each districts as district}
        <div class="district">
          <a href={district.url} class="district-link">
            <div
              class="district-background"
              style="background-image: url({district.backgroundImageUrl});"
            ></div>
            count: null<p class="district-text
            ">
              <span style="font-size: 20px;">{district.name}</span>
              <span style="font-weight: 300;">{district.count ?? 'X'} boulangeries ></span>
            </p>
          </a>
        </div>
      {/each}
    </div>
  </section>
</body>

<style>
  @import "../global.css";

  header {
    width: 100%;
    height: 100vh;
    background-color: var(--mainGrey);
    backdrop-filter: blur(5px);
    background-color: #000;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(https://static.vecteezy.com/system/resources/previews/032/492/821/large_2x/bakery-general-store-graphic-novel-anime-manga-wallpaper-free-photo.jpg);
    background-position: center;
    background-size: cover;
    /* opacity: 0.6; */
    filter: brightness(60%);
  }

  #searchbar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  #districts-section {
    width: 100%;
    text-align: center;
    padding: var(--pagePadding);
    margin: 2em 0;
  }

  #districts-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Grille de 2 colonnes */
    gap: 20px;
    align-items: center;
    justify-content: center; /* Centre les cards */
    /* max-width: 1200px;  Limite la largeur totale de la grille */
  }

  .district {
    position: relative;
    padding: 20px;
    margin: 0 auto;
    width: 100%;
    /* max-width: 500px;  Limite la largeur des cards */
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.4s ease;
    cursor: pointer;
  }

  .district-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    transition: transform 0.4s ease;
    z-index: 0;
  }

  .district:hover .district-background {
    transform: scale(1.1); /* Zoom de 10% */
  }

  .district-text {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    opacity: 1;
    transition: 0.4s;
  }

  .district-text:hover {
    opacity: 0.7;
  }

  .district span {
    position: relative;
    z-index: 1;
    color: #fff;
  }

  .district-link {
    display: flex;
    flex-direction: column;
    text-align: start;
    text-decoration: none;
  }
</style>
