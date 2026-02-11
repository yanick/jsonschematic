<script>
  const { schema = {} } = $props();
</script>

{#if schema.minLength !== undefined}
  <li>
    {#if schema.exclusive}>{:else}&ge;{/if}
    {schema.minLength}
  </li>
{/if}

{#if schema.maxLength !== undefined}
  <li>
    {#if schema.exclusive}&lt;{:else}&le;{/if}
    {schema.maxLength}
  </li>
{/if}
