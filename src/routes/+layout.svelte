<!-- src/routes/+layout.svelte -->

<script lang="ts">
  import { page } from "$app/stores";
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import { onMount, onDestroy } from "svelte";
  import "../global.css";
  import { initializeUser, user } from "@/userStore";
  import { goto } from "$app/navigation";

  $: isLoginPage = $page.url.pathname.startsWith("/login");
  $: isRegisterPage = $page.url.pathname.startsWith("/register");

  let unsubscribe: any;

  onMount(() => {
    // Initialiser l'utilisateur à partir du localStorage
    initializeUser();

    // Vérification immédiate si l'utilisateur est déconnecté
    user.subscribe((value) => {
      if (!value && !$page.url.pathname.startsWith("/login")) {
        goto("/login"); // Rediriger immédiatement si pas connecté
      }
    });

    // S'abonner à l'état utilisateur pour gérer les changements de connexion
    unsubscribe = user.subscribe((value) => {
      if (!value && !$page.url.pathname.startsWith("/login")) {
        goto("/login");
      }
    });
  });

  // Nettoyer l'abonnement pour éviter les fuites de mémoire
  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>

{#if !isLoginPage && !isRegisterPage}
  <NavBar />
{/if}

<main>
  <slot></slot>
</main>

{#if !isLoginPage && !isRegisterPage}
  <Footer />
{/if}

<style>
</style>
