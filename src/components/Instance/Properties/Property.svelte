<div>{name}</div>
<div class="property_def">
  <slot />
</div>

<script>
  export let name;
</script>

<style>
  .property_def {
    margin-left: 2em;
  }
  th,
  td {
    vertical-align: top;
  }
  td {
    /* border-bottom: 1px black solid;
     */
  }
  th {
    text-align: left;
    padding-left: 1em;
  }
</style>
