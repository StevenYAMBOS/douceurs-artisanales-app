<script>
</script>

<div id="searchbar">
  <form role="search">
    <label for="search">Search for stuff</label>
    <input
      id="search"
      type="search"
      placeholder="Arrondissement, Boulangerie..."
      required
    />
    <button type="submit">Go</button>
  </form>
</div>

<style>
  #searchbar {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  form {
    position: relative;
    width: 50%;
    background: #000000;
    border-radius: 15px;
  }
  input,
  button {
    height: var(--height);
    font-family: var(--font-fam);
    border: 0;
    color: var(--color-dark);
    font-size: 1.8rem;
  }
  input[type="search"] {
    outline: 0;
    width: 100%;
    background: var(--color-light);
    padding: 0 1.6rem;
    border-radius: var(--rad);
    appearance: none;
    transition: all var(--dur) var(--bez);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: var(--btn-width);
    font-weight: bold;
    background: var(--color-brand);
    border-radius: 0 var(--rad) var(--rad) 0;
  }
  input:not(:placeholder-shown) {
    border-radius: var(--rad) 0 0 var(--rad);
    width: calc(100% - var(--btn-width));
    /* + button {
    display: block;
  } */
  }
  label {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
</style>
