{#if min != undefined}
  <li>
    {@html greater}
    {min}
  </li>
{/if}

{#if max != undefined}
  <li>
    {@html less}
    {max}
  </li>
{/if}

<script>
  export let min;
  export let max;
  export let exclusive = false;

  const greater = exclusive ? "&gt;" : "&ge;";
  const less = exclusive ? "&lt;" : "&le;";
</script>
