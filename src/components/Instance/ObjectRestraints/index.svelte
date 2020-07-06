<ul class="restraint-list">
  {#if minProperties || maxProperties}
    <li>nbr properties: {minProperties || ''}...{maxProperties || ''}</li>
  {/if}
</ul>

{#if required && required.length}
  <div class="label">required</div>
  <div>
    <ul>
      {#each required as r (r)}
        <li>{r}</li>
      {/each}
    </ul>
  </div>
{/if}

{#if properties}
  <BoxSegment legend="properties">
    <Properties
      {properties}
      {dependencies}
      {required}
      href={`${href}/properties`} />
  </BoxSegment>
{/if}

{#if propertyNames}
  <BoxSegment legend="property names">
    <Instance definition={propertyNames} />
  </BoxSegment>
{/if}

{#if patternProperties}
  <BoxSegment legend="pattern properties">
    <Properties
      properties={patternProperties}
      href={`${href}/patternProperties`} />
  </BoxSegment>
{/if}

<script>
  import Properties from "../Properties/index.svelte";
  import BoxSegment from "../BoxSegment.svelte";
  import Instance from "../index.svelte";

  export let href;
  export let properties;
  export let minProperties;
  export let maxProperties;
  export let dependencies;
  export let required = [];
  export let propertyNames;
  export let patternProperties;
</script>

<style>
  .label {
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
