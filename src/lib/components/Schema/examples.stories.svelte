<Meta title="Schema/examples" component={Schema} />

<Template let:args>
	<Schema {...args} />
</Template>

<Story
	name="string w/ const"
	args={{
		schema: {
			title: 'string w/ const',
			type: 'string',
			const: 'potato'
		}
	}}
/>

<Story
	name="string w/ enum"
	args={{
		schema: {
			title: 'string w/ enum',
			type: 'string',
			enum: ['potato', 'cauliflower', 'beet']
		}
	}}
/>

<Story
	name="string type w/ minLength, maxLength"
	args={{
		schema: {
			title: 'string type w/ minLength, maxLength',
			type: 'string',
			minLength: 3,
			maxLength: 13
		}
	}}
/>

<Story
	name="string w/ content type and encoding"
	args={{
		schema: {
			title: 'string w/ content type and encoding',
			type: 'string',
			contentEncoding: 'base64',
			contentMediaType: 'image/png'
		}
	}}
/>

<Story
	name="string with a date-time format"
	args={{
		schema: {
			title: 'string with a date-time format',
			type: 'string',
			format: 'date-time',
			description: 'the format comes with a tooltip too! Hover over the format to see it.'
		}
	}}
/>

<Story
	name="writeOnly"
	args={{
		schema: {
			title: 'writeOnly',
			writeOnly: true,
			type: 'string'
		}
	}}
/>

<Story
	name="readOnly"
	args={{
		schema: {
			title: 'readOnly',
			readOnly: true,
			type: 'string'
		}
	}}
/>

<Story
	name="boolean type"
	args={{
		schema: {
			title: 'boolean type',
			type: 'boolean'
		}
	}}
/>

<Story
	name="examples"
	args={{
		schema: {
			title: 'examples',
			type: 'number',
			examples: [1, 2, 3]
		}
	}}
/>

<Story
	id="number_min_max"
	name="number w/ minimum, maximum"
	args={{
		schema: {
			title: 'number w/ minimum, maximum',
			keywords: ['number', 'minimum', 'maximum'],
			type: 'number',
			minimum: 3,
			maximum: 10
		}
	}}
/>

<!--

    <Story name="number w/ exclusiveMinimum, exclusiveMaximum"
        args={{ schema: {
  "title": "number w/ exclusiveMinimum, exclusiveMaximum",
  "keywords": [
    "number",
    "exclusiveMaximum",
    "exclusiveMinimum"
  ],
  "type": "number",
  "exclusiveMinimum": 3,
  "exclusiveMaximum": 10
} 
        }}
    />


    <Story name="integer w/ exclusiveMinimum, exclusiveMaximum"
        args={{ schema: {
  "title": "integer w/ exclusiveMinimum, exclusiveMaximum",
  "type": "integer",
  "exclusiveMinimum": 3,
  "exclusiveMaximum": 10
} 
        }}
    />


    <Story name="integer w/ default"
        args={{ schema: {
  "title": "integer w/ default",
  "type": "integer",
  "default": 13
} 
        }}
    />


    <Story name="number w/ multipleOf"
        args={{ schema: {
  "title": "number w/ multipleOf",
  "keywords": [
    "number",
    "multipleOf"
  ],
  "type": "number",
  "multipleOf": 3
} 
        }}
    />


    <Story name="null type"
        args={{ schema: {
  "title": "null type",
  "type": "null"
} 
        }}
    />


    <Story name="'true' as the schema"
        args={{ schema: {
  "title": "'true' as the schema",
  "type": "array",
  "items": true
} 
        }}
    />


    <Story name="'false' as the schema"
        args={{ schema: {
  "title": "'false' as the schema",
  "type": "array",
  "items": false
} 
        }}
    />


    <Story name="items as a schema"
        args={{ schema: {
  "type": "array",
  "items": {
    "type": "number",
    "title": "the item"
  },
  "title": "items as a schema"
} 
        }}
    />


    <Story name="items as a tuple"
        args={{ schema: {
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    }
  ],
  "title": "items as a tuple"
} 
        }}
    />


    <Story name="additionalItems set to false"
        args={{ schema: {
  "title": "additionalItems set to false",
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": [
        "Street",
        "Avenue",
        "Boulevard"
      ]
    },
    {
      "type": "string",
      "enum": [
        "NW",
        "NE",
        "SW",
        "SE"
      ]
    }
  ],
  "additionalItems": false
} 
        }}
    />


    <Story name="additionalItems set to true"
        args={{ schema: {
  "title": "additionalItems set to true",
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": [
        "Street",
        "Avenue",
        "Boulevard"
      ]
    },
    {
      "type": "string",
      "enum": [
        "NW",
        "NE",
        "SW",
        "SE"
      ]
    }
  ],
  "additionalItems": true
} 
        }}
    />


    <Story name="additionalItems set to schema"
        args={{ schema: {
  "title": "additionalItems set to schema",
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": [
        "Street",
        "Avenue",
        "Boulevard"
      ]
    },
    {
      "type": "string",
      "enum": [
        "NW",
        "NE",
        "SW",
        "SE"
      ]
    }
  ],
  "additionalItems": {
    "type": "number"
  }
} 
        }}
    />


    <Story name="additionalItems with object items"
        args={{ schema: {
  "title": "additionalItems with object items",
  "type": "array",
  "items": {
    "type": "number"
  },
  "additionalItems": {
    "type": "number"
  }
} 
        }}
    />


    <Story name="array type"
        args={{ schema: {
  "title": "array type",
  "type": "array",
  "maxItems": 10,
  "minItems": 3,
  "maxContains": 2,
  "minContains": 1,
  "uniqueItems": true
} 
        }}
    />


    <Story name="additionalProperties as `false`"
        args={{ schema: {
  "title": "additionalProperties as `false`",
  "type": "object",
  "properties": {
    "foo": {
      "type": "string"
    }
  },
  "additionalProperties": false
} 
        }}
    />


    <Story name="additionalProperties as object"
        args={{ schema: {
  "title": "additionalProperties as object",
  "type": "object",
  "properties": {
    "foo": {
      "type": "string"
    }
  },
  "additionalProperties": {
    "type": "string"
  }
} 
        }}
    />


    <Story name="patternProperties"
        args={{ schema: {
  "type": "object",
  "properties": {
    "builtin": {
      "type": "number"
    }
  },
  "patternProperties": {
    "^S_": {
      "type": "string"
    },
    "^I_": {
      "type": "integer"
    }
  },
  "additionalProperties": {
    "type": "string"
  },
  "title": "patternProperties"
} 
        }}
    />


    <Story name="object with properties, required, minProperties, maxProperties"
        args={{ schema: {
  "title": "object with properties, required, minProperties, maxProperties",
  "type": "object",
  "properties": {
    "foo": {
      "type": "string"
    },
    "bar": {
      "type": "number"
    },
    "baz": {
      "type": "boolean"
    }
  },
  "required": [
    "foo"
  ],
  "minProperties": 2,
  "maxProperties": 3
} 
        }}
    />


    <Story name="object examples"
        args={{ schema: {
  "title": "object examples",
  "type": "object",
  "examples": [
    {
      "level": 3
    }
  ]
} 
        }}
    />
-->

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Schema from './index.svelte';

	import examples from './examples.js';

	const eg = examples.slice(0, 1);
</script>
