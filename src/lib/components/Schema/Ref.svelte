<script>
  import Constraint from './Constraint.svelte';
  import Icon from '../Icon.svelte';

  const { schema = {} } = $props();
  // TODO resolve the ref and expands
</script>

<Constraint label="ref">
  {#snippet title()}
    <Icon icon="article_shortcut" />

    <a href={schema.$ref}>{schema.$ref}</a>
  {/snippet}
</Constraint>
