<script>
  const { icon } = $props();
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<span class="material-symbols-outlined icon">{icon}</span>

<style>
  span {
    vertical-align: sub;
  }
</style>
