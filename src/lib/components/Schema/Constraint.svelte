<script>
  const { label = '', children, details = false, title = undefined } = $props();
</script>

<div class="constraint">
  {#if details}
    <details>
      <summary>
        {#if title}
          {@render title()}
        {:else}{label}{/if}
      </summary>
      {@render children?.()}
    </details>
  {:else}
    <div class="label">
      {#if title}
        {@render title()}
      {:else}{label}{/if}
    </div>

    <div class="content">{@render children?.()}</div>
  {/if}
</div>

<style>
  summary {
    color: var(--pico-accordion-active-summary-color) !important;
  }
  .constraint {
//    margin-left: 2em;

  }
  .content {
    margin-left: 2em;
  }
</style>
