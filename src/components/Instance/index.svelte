<div class="instance" class:top_level>
  <div class="top_section">
    {#if id}
      <div class="instance_href">{id}</div>
    {/if}

    {#if schema}
      <div class="schema">
        <a href={schema}>{schema_name(schema)}</a>
      </div>
    {/if}
  </div>

  {#if title}
    <h1 class="title">{title}</h1>
  {/if}

  {#if description}
    <div class="description">{description}</div>
  {/if}

  {#if expanded_def.writeOnly}
    <div class="writeOnly">write-only</div>
  {/if}
  {#if expanded_def.readOnly}
    <div class="writeOnly">read-only</div>
  {/if}

  <ul class="types">
    {#each types as type (type)}
      <li>{type}</li>
    {/each}
  </ul>

  <Dependencies {dependencies} />

  {#if default_value !== undefined}
    <div class="label">default</div>
    <pre>
      <code>{JSON.stringify(default_value, null, 2)}</code>
    </pre>
  {/if}

  {#if ref}
    <div>extends</div>
    <div>
      <a href={relative_ref(ref)}>{ref}</a>

      {#if is_expanded_ref}
        <input on:click={remove_ref} type="button" value="unexpand" />
      {:else}
        <input
          on:click={fetch_ref}
          disabled={loading_ref}
          type="button"
          value={loading_ref ? 'fetching...' : 'expand'} />
      {/if}
    </div>
  {/if}

  {#if enumeration}
    <Enum {enumeration} {href} />
  {/if}

  {#if constant}
    <Enum enumeration={[constant]} constant {href} />
  {/if}

  <ArrayRestraints {...expanded_def} {href} />
  <StringRestraints {...expanded_def} {href} />
  <NumberRestraints {...expanded_def} {href} />
  <ObjectRestraints {...expanded_def} {href} />

  <Not definition={expanded_def.not} />

  {#each ['allOf', 'anyOf', 'oneOf'] as type (type)}
    <SomeOf {type} alternatives={expanded_def[type]} />
  {/each}

  <IfThenElse {...if_then_else} {href} />

  {#if examples}
    <Examples {examples} {href} />
  {/if}

</div>

<script>
  import * as store from "../../routes/_schemas";
  const fp = require("lodash/fp");

  export let definition = {};
  export let href;
  export let fetch_segment = store.fetch_segment;
  export let top_level = false;
  export let dependencies = false;

  import Examples from "./Examples/index.svelte";
  import Enum from "./Enum/index.svelte";
  import Dependencies from "./Dependencies.svelte";
  import ArrayRestraints from "./ArrayRestraints/index.svelte";
  import StringRestraints from "./StringRestraints/index.svelte";
  import NumberRestraints from "./NumberRestraints/index.svelte";
  import ObjectRestraints from "./ObjectRestraints/index.svelte";
  import IfThenElse from "./IfThenElse/index.svelte";
  import SomeOf from "./SomeOf.svelte";
  import Not from "./Not.svelte";

  let schema,
    types,
    items,
    ref,
    title,
    id,
    description,
    properties,
    examples,
    enumeration,
    constant,
    default_value;
  let expanded_ref = {};
  let loading_ref = false;
  let is_expanded_ref = false;

  let expanded_def = definition;

  $: {
    expanded_def = { ...expanded_ref, ...definition };

    ({
      default: default_value,
      $id: id,
      description,
      title,
      $schema: schema,
      type: types,
      items,
      examples,
      $ref: ref,
      enum: enumeration,
      const: constant,
      properties,
    } = expanded_def);

    // always pass an array, to make it easier
    if (!Array.isArray(types)) {
      types = types ? [types] : [];
    }
  }

  let if_then_else = {};
  $: if_then_else = fp.mapKeys(
    (key) => key + "_cond",
    fp.pick(["if", "then", "else"], expanded_def)
  );

  $: if (!id) id = href || "";
  $: if (id && !id.includes("#")) id = id + "#";

  $: if (href && !href.includes("#")) {
    href = href + "#";
  }
  const fetch_ref = async () => {
    loading_ref = true;

    const def = await fetch_segment(ref, href);

    is_expanded_ref = true;
    expanded_ref = def;
  };

  const remove_ref = async () => {
    loading_ref = false;
    expanded_ref = {};
    is_expanded_ref = false;
  };

  function schema_name(url) {
    const draft = url.match(/draft-(\d\d)/);
    if (!draft) return url;

    return `v${draft[1]}`;
  }

  function relative_ref(ref) {
    if (ref.startsWith("#")) {
      console.log({ ref, id });
      return "#" + id.replace(/#.*/, "") + ref;
    }

    return "#" + ref;
  }
</script>

<style>
  .instance {
    display: grid;
    grid-template-columns: 1fr 100fr;
    align-items: first baseline;
    grid-column-gap: 1em;
    margin-bottom: 1em;
  }

  .instance > :global(.type) {
    grid-column: 1;
  }

  .instance > :global(.type_restraints) {
    grid-column: 2;
  }

  .top_level > .top_section {
    display: flex;
  }

  .top_section {
    display: none;
    grid-column: span 2;
  }

  .description {
    grid-column: span 2;
  }

  .title {
    grid-column: span 2;
    color: var(--color-blue);
    font-size: var(--font-scale-10);
  }

  .types {
    grid-column: span 2;
    list-style: none;
    padding: 0px;
    margin: 0px;
    color: var(--color-cyan);
  }

  .top_level > .title {
    font-size: var(--font-scale-14);
  }

  .instance_href {
    font-style: italic;
  }

  .top_section div {
    flex: 1;
  }

  .schema {
    text-align: right;
  }
  pre {
    background-color: #f0f0f0;
  }

  .writeOnly {
    grid-column: span 2;
    font-variant: small-caps;
  }
</style>
