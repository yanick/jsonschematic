<script>
  export let multipleOf;
  export let mininum;
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
    <li>
      {#if multipleOf}&times;{multipleOf}{/if}
    </li>
    <li>
      {#if mininum}&gt;{mininum}{/if}
    </li>
    <li>
      {#if exclusiveMinimum}&ge;{exclusiveMinimum}{/if}
    </li>
    <li>
      {#if maximum}&lt;{maximum}{/if}
    </li>
    <li>
      {#if exclusiveMaximum}&le;{exclusiveMaximum}{/if}
    </li>
  </ul>
</div>
