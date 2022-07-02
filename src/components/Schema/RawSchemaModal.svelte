<dialog {open}>
    <article>
        <header>
            <span> raw json schema </span>

            <Clipboard
                text={definitionText}
                let:copy
                on:copy={() => (hasCopied = true)}
            >
                <button class="outline" on:click={copy}>
                    {#if hasCopied}Copied!{:else} Copy{/if}
                </button>
            </Clipboard>
            <a
                href="#close"
                aria-label="Close"
                class="close"
                on:click={() => (open = false)}
            />
        </header>
        <pre><code>{definitionText}</code></pre>
    </article>
</dialog>

<script>
    import Clipboard from 'svelte-clipboard';

    export let definition;
    export let open = false;
    $: console.log({ open });

    $: definitionText = JSON.stringify(definition, null, 2);

    let hasCopied = false;
    $: if (hasCopied) setTimeout(() => (hasCopied = false), 750);
</script>

<style>
    button {
        width: 5em;
        padding: 0.25em 0.25em;
        margin-right: 2em;
    }
    header {
        align-items: baseline;
        align-content: center;
        display: flex;
    }

    a {
        order: 10;
    }
    header > span {
        display: inline-block;
        flex: 1;
    }
</style>
