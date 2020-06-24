{#if min !== undefined}
  <li>
    {@html greater}
    {min}
  </li>
{/if}

{#if max !== undefined}
  <li>
    {@html less}
    {max}
  </li>
{/if}

<script>
  export let min;
  export let max;
  export let exclusive = false;

  function isNumber(n) {
    return +n === n;
  }

  min = isNumber(min) ? min : undefined;
  max = isNumber(max) ? max : undefined;

  if (exclusive !== undefined && isNumber(exclusive)) {
    exclusive = false;
  }

  const greater = exclusive ? ">" : "&ge;";
  const less = exclusive ? "<" : "&le;";
</script>
