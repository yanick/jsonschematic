<script>

  export let definition = {};
  let minLength, maxLength, pattern;

  $: ({ minLength, maxLength, pattern } = {...definition });


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
   <div name="elementType">string</div>

  {#if minLength != undefined}
    <div class:invalid = {invalidNumber(minLength)} >minLength &ge; {minLength}</div>
  {:else }
    <div class="default" >minLength &ge; 0</div>
  {/if}

  {#if maxLength != undefined}
    <div class:invalid = {invalidNumber(maxLength)} >maxLength &le; {maxLength}</div>
  {:else }
    <div class="default" >maxLength &le; &infin; </div>
  {/if}

  {#if pattern} 
    <div >value matches pattern {pattern}</div>
  {/if}

</div>
