<Type name="string">

  {#if minLength != undefined}
    <li class:invalid="{invalidNumber(minLength)}">&ge; {minLength}</li>
  {/if}

  {#if maxLength != undefined}
    <li class:invalid="{invalidNumber(maxLength)}">&le; {maxLength}</li>
  {/if}

  {#if pattern}
    <li>value matches pattern {pattern}</li>
  {/if}

</Type>

<script>
  import Type from "../Type.svelte";

  export let definition = {};
  let minLength, maxLength, pattern;

  $: ({ minLength, maxLength, pattern } = { ...definition });

  const invalidNumber = (n) => {
    if (isNaN(n) || n < 0) {
      return true;
    }
    return false;
  };
</script>
