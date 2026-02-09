<script>
  const { title, children } = $props();
</script>

<dt>{title}</dt>
<dd>{@render children?.()}</dd>
