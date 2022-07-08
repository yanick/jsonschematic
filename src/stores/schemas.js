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

export default class Schemas {
    schemas = writable([]);

    activeDefinition = writable({
        schemaUrl: '',
        url: '',
        definitionPath: '',
        loading: false,
        definition: undefined,
        error: undefined,
    });

    updateSchema(url, update) {
        this.schemas.update((schemas) => {
            let found = false;
            const updated = schemas.map((schema) => {
                if (schema.url !== url) return schema;
                found = true;
                return { ...schema, ...update };
            });
            if (found) return updated;
            return [...updated, { url, ...update }];
        });
    }

    getSchema(url) {
        return get(this.schemas).find(has({ url }));
    }

    async loadSchema(url, definition = null) {
        if (definition) this.updateSchema(url, definition);

        let schema = this.getSchema(url);
        if (schema && schema.definition) return schema;

        this.updateSchema(url, { loading: true });

        await fetch(url)
            .then((res) => res.json())
            .then((definition) => {
                this.updateSchema(url, { definition });
            })
            .catch((error) => {
                this.updateSchema(url, { error });
            })
            .finally(() => this.updateSchema(url, { loading: false }));

        return this.getSchema(url);
    }

    updateActiveDefinition(delta) {
        console.log(this.activeDefinition);
        this.activeDefinition.update((def) => ({ ...def, ...delta }));
    }

    async gotoDefinition(uri, parentUri = null) {
        console.log(uri, parentUri);

        this.updateActiveDefinition({ loading: true, error: undefined });

        let [schemaUrl, hashPath] = uri.split('#');

        console.log({ schemaUrl, hashPath });

        this.updateActiveDefinition({ definitionPath: hashPath });

        if (schemaUrl) {
            this.updateActiveDefinition({ schemaUrl });
        } else {
            schemaUrl = get(this.activeDefinition).schemaUrl;
        }

        const schema = await this.loadSchema(schemaUrl);

        if (!schema) {
            this.updateActiveDefinition({
                error: 'schema not found',
                loading: false,
            });
            return;
        }

        if (!hashPath) {
            this.updateActiveDefinition({ definition: schema.definition });
            return;
        }

        let definition = schema.definition;
        hashPath
            .split('/')
            .filter((x) => x)
            .forEach((key) => (definition = definition[key]));

        this.updateActiveDefinition({ definition });
    }
}
