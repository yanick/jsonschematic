<Type name="integer">
  {#if multipleOf !== undefined}
    <li>&times;{multipleOf}</li>
  {/if}

  {#if minimum !== undefined || maximum !== undefined}
    <li>
      {exclusiveMinimum ? ']' : ''} {minimum !== undefined ? minimum : ''} ... {maximum !== undefined ? maximum : ''}
      {exclusiveMaximum ? '[' : ''}
    </li>
  {/if}
</Type>

<script>
  export let multipleOf;
  export let minimum;
  export let maximum;
  export let exclusiveMaximum;
  export let exclusiveMinimum;

  import Type from "./Type.svelte";
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
