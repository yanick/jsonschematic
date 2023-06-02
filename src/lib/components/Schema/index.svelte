<article>
	<h1 class="primary-text">{schema.title ?? ''}</h1>
	{#if schema.writeOnly}
		<div class="write-only">Write-only</div>
	{/if}
	<div class="secondary-text schema-type">
		{schema.type}
	</div>

	{#if schema.const}
		<Property name="const"><code>{schema.const}</code></Property>
	{/if}
</article>

<script>
	import Property from './Property.svelte';
	export let schema = {};
</script>

<style>
	.write-only {
		font-variant: small-caps;
	}
	h1 {
		font-size: var(--font-scale-13);
	}
	.schema-type {
		font-size: var(--font-scale-11);
		margin-bottom: 0.5em;
	}
</style>
