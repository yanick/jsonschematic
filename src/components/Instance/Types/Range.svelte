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

  let greater = "";
  let less = "";

  //coerce the variable to numeric and see if it's still strictly equal to itself
  const isNumber = (n) => +n === n;

  $: {
    min = isNumber(min) ? min : undefined;
    max = isNumber(max) ? max : undefined;
    if (isNumber(exclusive)) {
      exclusive = false;
    }

    greater = exclusive ? ">" : "&ge;";
    less = exclusive ? "<" : "&le;";
  }
</script>
