<script>
	import 'beercss';

	export let schema = {};
</script>

<article>
	<h1 class="primary-text">{schema.title}</h1>
	{#if schema.writeOnly}
		<div class="write-only">Write-only</div>
	{/if}
	<div class="secondary-text schema-type">
		{schema.type}
	</div>
</article>

<style>
	.write-only {
		font-variant: small-caps;
	}
	h1 {
		font-size: var(--font-scale-13);
	}
</style>
