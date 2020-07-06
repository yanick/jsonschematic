<fieldset>
  {#if legend}
    <legend>{legend}</legend>
  {/if}
  <slot />
</fieldset>

<script>
  export let legend;
</script>

<style>
  fieldset {
    grid-column: span 2;
  }
  fieldset legend {
    font-weight: bold;
  }
</style>
