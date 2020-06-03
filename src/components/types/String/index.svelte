<script>
  export let definition = {};

  let title, description, minLength;
  $: {
    title = definition.title;
    description = definition.description;
    minLength = definition.minLength;
  }
</script>

<details>
  <summary>
    <div class="title">{title}</div>
    <div class="type">
      string
      <span class="type-details">
      {#if minLength}
        {minLength}...
        {/if}
      </span>
    </div>
  </summary>
  <div>{description}</div>
</details>


<style>
  .title {
    color: blue;
  }
  .type {
    color: darkgreen;
  }
  summary {
    display: flex;
  }
  summary div {
   flex-grow: 1;
  }
  .type {
    text-align: left;
  }
  .type-details {
    text-size: smaller;
    color: green;
  }
</style>
