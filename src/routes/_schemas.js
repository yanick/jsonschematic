import { writable, derived, get } from "svelte/store";

/**
 * all the schemas the app is aware of
 */
const schemas = writable({});

/**
 * the currently viewed instance url
 */
const selected_instance_url = writable(null);
const set_selected_instance_url = selected_instance_url.set;

const selected_instance = derived(
  [schemas, selected_instance_url],
  ([$schemas, $selected_instance_url]) => {
    if (!$selected_instance_url) return null;

    const [url, segment] = $selected_instance_url.split("#");

    return $schemas[url];
  }
);

const add_schema = (schema, url) => {
  const id = schema.id || "file:///" + url;

  if(!schema.id) {
      schema = { ...schema, id };
  }

  schemas.update(($s) => ({ ...$s, [id]: schema }));

  selected_instance_url.update( $url => $url || id );
};

export {
  schemas,
  add_schema,
  selected_instance_url,
  set_selected_instance_url,
  selected_instance,
};
