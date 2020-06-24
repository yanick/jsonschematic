<Type name="string">

  <ul>

    <Range min="{minLength}" max="{maxLength}" />

    {#if pattern}
      <li>value matches pattern {pattern}</li>
    {/if}

    {#if format}
      <li
        class="format"
        use:tippy="{{ placement: 'right', content: format_tip, allowHTML: true, interactive: true }}">
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

</Type>

<script>
  import tippy_orig from "sveltejs-tippy";
  const tippy = tippy_orig || (() => {});

  import Type from "../Type.svelte";
  import Range from "../Range.svelte";

  import formats from "./formats";

  export let definition = {};

  let minLength, maxLength, pattern, format, format_tip,
    contentEncoding, contentMediaType;

  $: ({ minLength, maxLength, pattern, format, contentEncoding,
    contentMediaType } = definition);

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
