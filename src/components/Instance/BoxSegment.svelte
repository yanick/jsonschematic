<fieldset>
  <legend>{legend}</legend>
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
