<script lang="ts">
  import { page } from "$app/stores";
  import Footer from "$lib/components/Footer.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import "../global.css";

  $: isLoginPage = $page.url.pathname.startsWith("/login");
  $: isRegisterPage = $page.url.pathname.startsWith("/register");
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
