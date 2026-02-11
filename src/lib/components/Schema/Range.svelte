<script>
  const { min = undefined, max = undefined, exclusive = false } = $props();
</script>

{#if min != undefined}
  <li>
    {#if exclusive}>{:else}&ge;{/if}
    {min}
  </li>
{/if}

{#if max != undefined}
  <li>
    {#if exclusive}&lt;{:else}&le;{/if}
    {max}
  </li>
{/if}
