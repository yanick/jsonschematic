<script>

  export let definition = {};
  let minLength, maxLength, pattern;

  ({ minLength, maxLength, pattern } = {...definition });

  const invalidNumber = n => { 
    if (isNaN(n) || n < 0 ) {
        return true;
    } 
    return false;
  };

</script>

<style>

  div { background-color: lightblue;}
  div.invalid {
     background-color: pink;
   }
   div.default {
     background-color: grey;
   }
</style>

<div>

  {#if minLength != undefined}
    <div class:invalid = {invalidNumber(minLength)} >minLength {minLength}</div>
  {:else }
    <div class="default" >minLength 0</div>
  {/if}

  {#if maxLength != undefined}
    <div class:invalid = {invalidNumber(maxLength)} >maxLength {maxLength}</div>
  {:else }
    <div class="default" >maxLength &infin</div>
  {/if}

  {#if pattern} 
    <div >pattern {pattern}</div>
  {/if}

</div>
