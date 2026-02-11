<script>
  const { label, children } = $props();
</script>

<div class="constraint">
  <div class="label">{label}</div>

  <div>{@render children?.()}</div>
</div>

<style>
  .constraint {
    display: flex;
  }
  .label {
    width: 6em;
    text-align: right;
    margin-right: 1em;
  }
</style>
