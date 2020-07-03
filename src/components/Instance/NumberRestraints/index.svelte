  <ul class="restraint-list">
    {#if multipleOf !== undefined}
      <li>&times;{multipleOf}</li>
    {/if}

    <Range min="{minimum}" exclusive="{exclusiveMinimum}" />
    <Range max="{maximum}" exclusive="{exclusiveMaximum}" />
    <Range min="{exclusiveMinimum}" max="{exclusiveMaximum}" exclusive="true" />
  </ul>

<script>
  export let multipleOf;
  export let minimum;
  export let maximum;
  export let exclusiveMinimum;
  export let exclusiveMaximum;

  import Range from "../Types/Range.svelte";
</script>
