<script>
  import Constraint from './Constraint.svelte';
  import Icon from '../Icon.svelte';
  import SchemaLink from '../SchemaLink.svelte';

  const { schema = {} } = $props();
  // TODO resolve the ref and expands

  const onclick = () => {
    window.location.hash = '#' + schema.$ref;
  };
</script>

<Constraint label="ref">
  {#snippet title()}
    <Icon icon="article_shortcut" />

    <SchemaLink href={'#' + schema.$ref}>{schema.$ref}</SchemaLink>
  {/snippet}
</Constraint>
