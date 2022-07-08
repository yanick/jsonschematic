<aside>
    <h2>schemas</h2>

    <!-- TODO with the extra-long urls? -->
    <!-- TODO with the id vs $id -->
    <!-- TODO show definitions -->
    {#each $schemas as schema (schema.url)}
        <div>{schema.definition.title}</div>
        <div class="id">{schema.definition.id}</div>
    {/each}
</aside>

<script>
    import { getContext } from 'svelte';

    const { schemas } = getContext('schemas');

</script>

<style>
.id { margin-left: 1em; }
</style>
