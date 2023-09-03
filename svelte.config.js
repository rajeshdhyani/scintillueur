// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(
			{
				// will create a Netlify Edge Function using Deno-based
				// rather than using standard Node-based functions
				edge: true
			}
		)
	}
};

export default config;
