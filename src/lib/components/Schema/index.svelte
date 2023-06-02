<article>
	<h1 class="primary-text">{schema.title ?? ''}</h1>
	{#if schema.writeOnly}
		<div class="write-only">Write-only</div>
	{/if}
	<div class="secondary-text schema-type">
		{schema.type}
	</div>

	{#if schema.const}
		<Property name="const"><code class="secondary-container">{schema.const}</code></Property>
	{/if}
	{#if schema.enum}
		<Property name="enum">
			{#each schema.enum as value (value)}
				<code class="secondary-container">{value}</code>
			{/each}
		</Property>
	{/if}

	{#if schema.minLength || schema.maxLength}
		<div>
			length {#if schema.minLength}&geq;
				{schema.minLength}{/if}{#if schema.minLength && schema.maxLength},
			{/if}{#if schema.maxLength}&leq;{schema.maxLength}{/if}
		</div>
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
	code {
		border-radius: 0px;
		padding: 0.3em;
		margin-right: 0.5em;
	}
</style>
