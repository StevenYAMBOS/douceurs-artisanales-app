<script>
</script>

<div id="searchbar">
  <form role="search">
    <span>Trouvez la meilleure pâtisserie près de chez vous.</span>
    <input
      id="search"
      type="search"
      placeholder="Rechercher une boulangerie..."
      required
    />
  </form>
</div>

<style>
  @import "../../global.css";
  #searchbar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  form {
    position: relative;
    width: 50%;
    height: 300px;
    background: transparent;
    border-radius: var(--buttonBorderRadius);
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  input,
  input[type="search"] {
    outline: 0;
    width: 100%;
    height: 50px;
    background-color: var(--mainWhite);
    color: var(--mainBrown);
    padding: 0 1.6rem;
    border: 2px var(--mainWhite) solid;
    border-radius: 50px;
    appearance: none;
    transition: all;
    opacity: 1;
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  input:not(:placeholder-shown) {
    border-radius: var(--buttonBorderRadius);
    width: 100%;
    color: var(--mainBrown);
  }
  input,
  input[type="search"]::placeholder {
    color: var(--mainPurple);
    opacity: 0.5;
  }
  input[type="search"]:focus {
    border-color: var(--mainBrown);
  }
  span {
    color: var(--mainWhite);
    font-size: var(--title2);
  }
</style>
