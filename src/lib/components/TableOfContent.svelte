<script>
  import SchemaLink from './SchemaLink.svelte';
  const { schema = {} } = $props();
</script>

<aside>
  <nav>
    <ul>
      <li><SchemaLink href="#">document root</SchemaLink></li>

      {#if schema.definitions}
        <li>
          #/definitions
          <ul>
            {#each Object.entries(schema.definitions) as [key, value] (key)}
              <li>
                <SchemaLink href={'#/definitions/' + key}>{'/' + key}</SchemaLink>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    </ul>
  </nav>
</aside>

<style>
  ul {
    margin-left: 1em !important;
  }
  aside {
    height: 90vh;
    overflow-y: scroll;
  }
</style>
