<div>

  {#each types as type (type)}
    <svelte:component this="{comp_for(type)}" {definition} />
  {/each}

</div>

<script>
  export let types = [];
  export let definition = {};

  import ArrayType from "./Array/index.svelte";
  import NumberType from "./Number/index.svelte";
  import StringType from "./String/index.svelte";
  import BooleanType from "./Boolean/index.svelte";
  import ObjectType from "./ObjectType/index.svelte";

  const type_components = {
    object: ObjectType,
    array: ArrayType,
    number: NumberType,
    string: StringType,
    boolean: BooleanType,
  };

  const comp_for = (type) => type_components[type];
</script>

<style>
  div {
    display: flex;
  }
  div > :global(div:after) {
    content: "|";
    margin-right: 0.5em;
  }
  div > :global(div:last-child:after) {
    content: "";
    margin-right: 0em;
    color: var(--color-base01);
  }
</style>
