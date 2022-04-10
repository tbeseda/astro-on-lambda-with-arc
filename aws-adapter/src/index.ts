import type { AstroAdapter, AstroIntegration } from 'astro';

function getAdapter(): AstroAdapter {
	return {
		name: 'astro-aws-adapter',
		serverEntrypoint: './aws-adapter/dist/server.js',
		exports: ['handler'],
	};
}

export default function createIntegration(): AstroIntegration {
	return {
		name: 'astro-aws-adapter',
		hooks: {
			'astro:config:done': ({ setAdapter }) => {
				setAdapter(getAdapter());
			},
		},
	};
}
