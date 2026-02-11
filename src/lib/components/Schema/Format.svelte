<script>
  const { schema = {} } = $props();
  import formats from './formats.js';
</script>

<li>
  format: <span data-tooltip={formats[schema.format]}>{schema.format}</span>
</li>
