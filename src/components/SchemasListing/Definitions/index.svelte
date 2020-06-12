{#if definitions }
  {#each definition_names as definition }
   <dt>
     <a on:click|preventDefault={select_instance(ref( definition, base_url))} href="#"
       title={definition}>
       {definition}</a>
   </dt>
  {/each}
{/if}

<script>
  export let definitions = {}; //definitions section of the schema
  export let select_instance;  //handler function 
  export let base_url = '';    //main schema url

  let definition_names = [];
  $: {
   definition_names = Object.keys(definitions);
   definition_names.sort()
  }

  const ref = (str,base) => { return base+'#/definitions/'+str; };

</script>

<style>
</style>
