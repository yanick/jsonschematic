<div class="property-name" class:required>{name}</div>

<div class="property_def">
  <slot />
</div>

<script>
  export let name;
  export let required = false;
</script>

<style>
  .property-name {
    margin-left: 1em;
  }
  .required:before {
    content: "!";
    font-weight: bold;
    color: var(--color-red);
  }
</style>
