<script lang="ts">
  export let label = ""; // Label à afficher
  export let option = false; // Option initiale (true/false)

  // Envoi d'un événement personnalisé (si besoin, mais pas nécessaire pour juste un toggle)
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<label class="switchSmall2 m5">
  {label}
  <input type="checkbox" bind:checked={option} />
  <small></small>
</label>


<style>
  @import "../../global.css";

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
</style>
