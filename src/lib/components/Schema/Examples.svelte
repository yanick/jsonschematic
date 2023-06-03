{#if examples.length > 0}
	<h2>Examples</h2>
	{#each examples as eg (eg)}
		<div class="example">
			<pre><code>{JSON.stringify(eg, null, 2)}</code></pre>
			<button
				class="small circle extra"
				use:clipboard={{ text: JSON.stringify(eg, null, 2) }}
				on:copied={copied}
				on:error={copyError}
			>
				<i>content_paste</i></button
			>
			<div class="toast" class:active={showCopied}>example copied to the clipboard</div>
			<div class="toast error" class:active={showError}>error copying example to the clipboard</div>
		</div>
	{/each}
{/if}

<script>
	import Property from './Property.svelte';
	import { clipboard } from '$lib/actions/clipboard.js';
	export let examples = [];

	let showCopied = false;
	let showError = false;

	const copied = () => (showCopied = true);
	const copyError = () => (showError = true);

	$: if (showError || showCopied)
		setTimeout(() => {
			showError = false;
			showCopied = false;
		}, 1000);
</script>

<style>
	h2 {
		font-size: var(--font-scale-11);
	}
	pre {
		background-color: var(--primary-container);
		border-radius: 0px;
		margin-top: 0.75em;
		margin-bottom: 1.5em;
		margin-right: 1.5em;
		padding: 0.75em;
		min-height: 5em;
	}
	.example {
		display: flex;
	}
	.example pre {
		flex: 1;
	}
	.example button {
		font-size: var(--font-scale-10);
		position: absolute;
		right: 5px;
		top: -15px;
	}
</style>
