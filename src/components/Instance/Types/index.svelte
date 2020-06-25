{#each types as type (type)}
  <svelte:component this="{comp_for(type)}" {definition} {href} />
{/each}

<script>
  export let types = [];
  export let definition = {};
  export let href;

  import ArrayType from "./Array/index.svelte";
  import NumberType from "./Number/index.svelte";
  import IntegerType from "./Integer/index.svelte";
  import StringType from "./String/index.svelte";
  import BooleanType from "./Boolean/index.svelte";
  import ObjectType from "./ObjectType/index.svelte";
  import Null from "./Null/index.svelte";

  const type_components = {
    object: ObjectType,
    array: ArrayType,
    number: NumberType,
    string: StringType,
    boolean: BooleanType,
    integer: IntegerType,
    null: Null,
  };

  const comp_for = (type) => type_components[type];
</script>
