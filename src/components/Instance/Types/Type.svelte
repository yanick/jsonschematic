<div class="type">{name}</div>
<Restraints>
  <slot />
</Restraints>

<script>
  export let name;

  import Restraints from "./Restraints.svelte";
</script>

<style>
  .type {
    color: var(--color-cyan);
  }

  div {
    display: flex;
  }
</style>
