<script>
  export let multipleOf;
  export let minimum;
  export let maximum;
  export let exclusiveMaximum;
  export let exclusiveMinimum;
</script>

<style>
  div {
    display: flex;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0px;
  }
  ul li {
    margin-right: 1em;
  }
  ul li:after {
    content: ",";
  }
  ul li:last-child:after {
    content: "";
  }
</style>

<div>
  <span>number</span>

  <ul>
      {#if multipleOf !== undefined }<li>&times;{multipleOf}</li>{/if}
      {#if minimum !== undefined }<li>&gt;{minimum}</li>{/if}
      {#if exclusiveMinimum !== undefined }<li>&ge;{exclusiveMinimum}</li>{/if}
      {#if maximum !== undefined }<li>&lt;{maximum}</li>{/if}
      {#if exclusiveMaximum !== undefined }<li>&le;{exclusiveMaximum}</li>{/if}
  </ul>
</div>
