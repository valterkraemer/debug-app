/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	return {
		body: [{ name: 'Arnold' }]
	};
}
