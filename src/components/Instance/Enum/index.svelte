<Property name="enum" href="{href}/enum">
  <ul>
    {#each enumeration as e (e)}
      <li>{e}</li>
    {/each}
  </ul>
</Property>

<script>
  export let enumeration = [];
  export let href = "";

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
</style>
