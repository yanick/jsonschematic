<script>
  const { href, children } = $props();

  const onclick = () => {
    window.location.hash = '#' + href;
  };
</script>

<a href={'#' + href} {onclick}>{@render children?.()}</a>
