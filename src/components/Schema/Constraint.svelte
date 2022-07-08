<div class:fullwidth>
    <strong>{label}</strong>
    <slot />
</div>

<script>
    export let label = '';
    export let fullwidth = false;
</script>

<style>
    .fullwidth {
        width: 100%;
    }
    div {
        margin-right: 1em;
        margin-top: 0.5em;
    }
    strong {
        margin-right: 1em;
    }
</style>
