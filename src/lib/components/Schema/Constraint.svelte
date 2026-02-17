<script>
  const { label = '', children, details = false } = $props();
</script>

<div class="constraint">
  {#if details}
    <details>
      <summary>{label}</summary>
      {@render children?.()}
    </details>
  {:else}
    <div class="label">{label}</div>

    <div class="content">{@render children?.()}</div>
  {/if}
</div>

<style>
  summary {
    color: var(--pico-accordion-active-summary-color) !important;
  }
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
