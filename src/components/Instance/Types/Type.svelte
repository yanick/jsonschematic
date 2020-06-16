<div class="type">{name}</div>
<div class="type_restraints">
  <slot />
</div>

<script>
  export let name;
  let hasDetails;
</script>

<style>
  .type {
    color: var(--color-cyan);
  }

  .type_restraints {
    display: grid;
    grid-template-columns: 1fr 100fr;
    grid-column-gap: 1em;
  }

  div {
    display: flex;
  }
  .type_restraints > :global(ul) {
    grid-column: span 2;
    display: flex;
    list-style: none;
    margin: 0px;
    margin-left: 0.5em;
    padding: 0px;
  }

  .type_restraints > :global(ul) > :global(li) {
    margin-right: 0.5em;
    font-style: italic;
  }
  .type_restraints > :global(ul) > :global(li:after) {
    content: ",";
  }

  .type_restraints > :global(ul) > :global(li:last-child:after) {
    content: "";
  }
</style>
