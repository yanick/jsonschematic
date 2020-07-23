{#if if_cond}
  <BoxSegment legend="if">
    <Instance definition={if_cond} />
    {#if then_cond}
      <BoxSegment legend="then">
        <Instance definition={then_cond} />
      </BoxSegment>
    {/if}
    {#if else_cond}
      <BoxSegment legend="else">
        <Instance definition={else_cond} />
      </BoxSegment>
    {/if}
  </BoxSegment>
{/if}

<script>
  export let if_cond;
  export let then_cond;
  export let else_cond;

  import BoxSegment from "../BoxSegment.svelte";
  import Instance from "../index.svelte";
</script>
