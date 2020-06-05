<script>

    console.log($$props);
  export let definition = {};
  let minLength, maxLength, pattern;

  ({ minLength, maxLength, pattern } = {...definition });

  function validNumber(n) { 
    if (isNaN(n) || n < 0 ) {
        return "invalid";
    } 
    return "valid";
  };

</script>

<style>
  .invalid {
    background-color: pink;
  }
  .valid {
    background-color: white;
  }
  .default {
    background-color: grey;
  }
</style>

<div>

  {#if minLength}
    <div class="{validNumber(minLength)}" >minLength {minLength}</div>
  {:else }
    <div class="default" >minLength 0</div>
  {/if}

  {#if definition.maxLength}
    <div class="{validNumber(maxLength)}" > maxLength {definition.maxLength}</div>
  {:else }
    <div class="default" >maxLength &infin</div>
  {/if}

  {#if definition.pattern} 
    <div class="valid" >pattern {definition.pattern}</div>
  {/if}

</div>
