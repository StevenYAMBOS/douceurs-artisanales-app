<!-- src/routes/+layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header></Header>

<slot></slot>

<Footer></Footer>

<style>
</style>
