<Type {name}>
  <ul>
    {#if multipleOf !== undefined}
      <li>&times;{multipleOf}</li>
    {/if}

    <Range min="{minimum}" exclusive="{exclusiveMinimum}" />
    <Range max="{maximum}" exclusive="{exclusiveMaximum}" />
    <Range min="{exclusiveMinimum}" max="{exclusiveMaximum}" exclusive="true" />
  </ul>
</Type>

<script>
  export let multipleOf;
  export let minimum;
  export let maximum;
  export let exclusiveMinimum;
  export let exclusiveMaximum;
  export let name = "number";

  export let definition = {};

  $: ({
    multipleOf,
    minimum,
    maximum,
    exclusiveMinimum,
    exclusiveMaximum,
  } = definition);
  import Type from "../Type.svelte";
  import Range from "../Range.svelte";
</script>

<style>
  div {
    display: flex;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0px;
  }
  ul li {
    margin-right: 1em;
  }
  ul li:after {
    content: ",";
  }
  ul li:last-child:after {
    content: "";
  }
</style>
