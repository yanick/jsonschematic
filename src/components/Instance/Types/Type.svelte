<div class="type_block">
  <div>{name}</div>
  <ul>
    <slot />
  </ul>
</div>

<script>
  export let name;
</script>

<style>
  .type_block {
    color: var(--color-cyan);
  }

  div {
    display: flex;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0px;
    margin-left: 0.5em;
    padding: 0px;
  }
  ul :global(li) {
    margin-right: 0.5em;
    font-style: italic;
  }
  ul li:after {
    content: ",";
  }
  ul li:last-child:after {
    content: "";
  }
</style>
