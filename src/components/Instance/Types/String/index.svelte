<Type name="string">

  <ul>
    {#if minLength != undefined}
      <li>&ge; {minLength}</li>
    {/if}

    {#if maxLength != undefined}
      <li>&le; {maxLength}</li>
    {/if}

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
  </ul>

</Type>

<script>
  import tippy_orig from "sveltejs-tippy";
  const tippy = tippy_orig || (() => {});

  import Type from "../Type.svelte";

  import formats from "./formats";

  export let definition = {};

  let minLength, maxLength, pattern, format, format_tip;

  $: ({ minLength, maxLength, pattern, format } = definition);

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
