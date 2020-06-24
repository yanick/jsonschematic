<Type name="number">
  <ul>
    {#if multipleOf !== undefined}
      <li>&times;{multipleOf}</li>
    {/if}

    <Range min="{minimum}" max="{maximum}" />
    <Range min="{exclusiveMinimum}" max="{exclusiveMaximum}" exclusive="true" />
  </ul>
</Type>

<script>
  export let multipleOf;
  export let minimum;
  export let maximum;
  export let exclusiveMaximum;
  export let exclusiveMinimum;

  export let definition = {};

  $: ({
    multipleOf,
    minimum,
    maximum,
    exclusiveMaximum,
    exclusiveMinimum,
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
