// TODO move out of the /routes hierarchy and into /src/stores

import { writable, derived, get } from "svelte/store";
import ptr from "jsonpointer";

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

    if (segment) {
      return fetch_segment("#" + segment, $selected_instance_url);
    }

    return $schemas[url];
  }
);

const add_schema = (schema, url) => {
  // $id for >v4, id before
  let id = schema["$id"] || schema.id || "file://" + url;

  if (!schema["$id"]) {
    schema = { ...schema, $id: id };
  }

  id = id.replace(/#.*/, "");

  schemas.update(($s) => ({ ...$s, [id]: schema }));

  if (!document.location.hash) document.location.hash = id;
};

const fetch_segment = (target, origin) => {
  let schema_id, path;

  if (target.indexOf("#") === 0) {
    [schema_id] = origin.split("#");
    path = target.substr(1);
  } else if (target.indexOf("#") === -1) {
    schema_id = target;
  } else {
    [schema_uri, path] = target.split("#");
  }

  const schema = get(schemas)[schema_id];

  if (!path) return schema;

  if (!schema) return {};

  return ptr.get(schema, path);
};

export {
  schemas,
  add_schema,
  selected_instance_url,
  set_selected_instance_url,
  selected_instance,
  fetch_segment,
};
