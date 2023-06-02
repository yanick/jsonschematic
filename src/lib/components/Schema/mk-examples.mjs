import egs from './examples.js';

egs.forEach((ex) => {
	console.log(`
    <Story name="${ex.title}"
        args={{ schema: ${JSON.stringify(ex, null, 2)} 
        }}
    />
`);
});
