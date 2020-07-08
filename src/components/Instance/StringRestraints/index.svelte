<ul class="restraint-list">

  <Range min={minLength} max={maxLength} />

  {#if pattern}
    <li>value matches pattern {pattern}</li>
  {/if}

  {#if format}
    <li
      class="format"
      use:tippy={{ placement: 'right', content: format_tip, allowHTML: true, interactive: true }}>
      {format}
    </li>
  {/if}

  {#if contentEncoding}
    <li>encoding: {contentEncoding}</li>
  {/if}

  {#if contentMediaType}
    <li>media type: {contentMediaType}</li>
  {/if}

</ul>

<script>
  import tippy_orig from "sveltejs-tippy";
  const noop = require("lodash/noop");

  const tippy = tippy_orig || noop;

  import Range from "../Types/Range.svelte";

  import formats from "../Types/String/formats";

  export let minLength;
  export let maxLength;
  export let pattern;
  export let format;
  export let contentEncoding;
  export let contentMediaType;

  let format_tip;
  $: format_tip = formats[format] || "no tip";
</script>

<style>
  .format {
    cursor: help;
  }
  :global(.tooltip) {
    color: var(--color-base2) !important;
  }
</style>
