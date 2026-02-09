<script>
  const { name, required, children } = $props();
</script>

<div class="property-name" class:required>{name}</div>

<div class="property_def">
  {@render children?.()}
</div>

<style>
  .property-name {
    margin-left: 1em;
  }
  .required:before {
    content: '!';
    font-weight: bold;
    color: var(--color-red);
  }
</style>
