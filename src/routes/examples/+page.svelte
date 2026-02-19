<script>
  import release from './release-schema.json';
  import Schema from '$lib/components/Schema.svelte';
  import JsonSchematic from '$lib/components/JsonSchematic.svelte';
</script>

<JsonSchematic schema={release} />
