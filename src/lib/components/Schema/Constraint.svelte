<script>
  const { label, children } = $props();
</script>

<dt>{label}</dt>
<dd>{@render children?.()}</dd>
