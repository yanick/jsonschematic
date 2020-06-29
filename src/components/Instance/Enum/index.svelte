<Property {name} href="{href}/{name}">
  <ul>
    {#each display as e (e)}
      <li>{e}</li>
    {/each}
  </ul>

  {#if enumeration.length > 1}
    <div class="filter">
      <input
        class="label"
        type="button"
        value="filter..."
        on:click="{toggle_filter}" />

      {#if show_filter}
        <input
          class="filter_box"
          bind:value="{filter}"
          placeholder="filtering regex" />
      {/if}
    </div>
  {/if}
</Property>

<script>
  export let enumeration = [];
  export let href = "";
  export let constant = false;

  let name = constant ? "const" : "enum";

  let filter = "";
  let display = [];
  let show_filter = false;

  function toggle_filter() {
    show_filter = !show_filter;
  }

  $: {
    if (!show_filter) {
      display = enumeration;
    } else {
      let re = new RegExp(filter, "i");
      display = enumeration.filter((e) => e !== null && e.match(re));
    }
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
  .filter input {
    font-size: var(--font-scale-8);
  }
  .filter .filter_box {
    margin-top: 0px;
    margin-bottom: 0px;
  }
</style>
