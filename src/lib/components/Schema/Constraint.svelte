<script>
  const { label = '', children } = $props();
</script>

<div class="constraint">
  <div class="label">{label}</div>

  <div class="content">{@render children?.()}</div>
</div>

<style>
  .constraint {
    margin-left: 2em;
  }
  .content {
    margin-left: 2em;
  }
  .label {
    width: 6em;
    margin-right: 1em;
  }
</style>
