<div class="property">
	<div class="name">{name}</div>
	<div class="definition"><slot /></div>
</div>

<script>
	export let name = '';
</script>

<style>
	.property {
		display: flex;
		margin-left: 2rem;
	}
	.name {
		min-width: 4em;
	}
</style>
