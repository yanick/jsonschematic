import { writable, get, derived } from 'svelte/store';

const has = (matcher) => (obj) => {
    for (const m in matcher) {
        if (typeof matcher[m] === 'function') {
            if (!matcher[m](obj[m])) return false;
        } else if (matcher[m] != obj[m]) {
            return false;
        }
    }

    return true;
};

export default function () {
    const schemas = writable([]);

    const activeSchema = derived(schemas, (schemas) =>
        schemas.find(has({ active: true })),
    );

    const updateSchema = (url, update) => {
        schemas.update((schemas) => {
            let found = false;
            const updated = schemas.map((schema) => {
                if (schema.url !== url) return schema;
                found = true;
                return { ...schema, ...update };
            });
            if (found) return updated;
            return [...updated, { url, ...update }];
        });
    };

    const setSchema = (url = null, definition = null, active = true) => {
        if (definition) updateSchema(url, definition);

        if (active) {
            schemas.update((schemas) =>
                schemas.map((schema) => ({ ...schema, active: false })),
            );
            updateSchema(url, { active: true });
        }

        let schema = get(schemas).find(has({ url }));
        if (schema.definition) return;

        schema.loading = true;

        updateSchema(url, { loading: true });

        fetch(schema.url)
            .then((res) => res.json())
            .then((definition) => {
                updateSchema(url, { definition });
            })
            .catch((error) => {
                updateSchema(url, { error });
            })
            .finally(() => updateSchema(url, { loading: false }));
    };

    return {
        schemas,
        activeSchema,
        setSchema,
    };
}
