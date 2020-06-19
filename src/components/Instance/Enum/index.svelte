<input class="filter" bind:value={filter} placeholder="enum filtering regex"  on:focus={clearBox} on:input={filterEnum}/>
<Property name="enum" href="{href}/enum" >
  <ul>
    {#each display as e (e)}
      <li>{e}</li>
    {/each}
  </ul>
</Property>

<script>
  export let enumeration = [];
  export let href = "";

  let filter="";
  let display = [];

  $: display=enumeration;

  const clearBox = (event) => {
    filter = "";
  }

  const filterEnum = (event) => {
    let re = new RegExp(filter,'i');
    display = enumeration.filter( (e) => e !== null && e.match(re) );
  }

  import Property from "../Properties/Property.svelte";

</script>

<style>
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
  }
  li:after {
    content: ",";
  }
  li:last-child:after {
    content: "";
  }
  li {
    margin-right: 0.5em;
  }
  input.filter {
    grid-column: span 2; 
    width: min-content;
  }
</style>
