{#each definitionNames as definition}
    <dt>
        <a href={'#' + ref(definition)} title={definition}>{definition}</a>
    </dt>
{/each}

<script>
    export let definitions = {}; //definitions section of the schema
    export let baseUrl = ''; //main schema url

    $: definitionNames = Object.keys(definitions).sort();

    const ref = (definition) => {
        return baseUrl + '#/definitions/' + definition;
    };
</script>
