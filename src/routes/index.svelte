<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		const search = page.query.get('search');

		if (!search) {
			return {};
		}

		const res = await fetch(search);

		if (res.ok) {
			return {
				props: {
					results: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load page`)
		};
	}
</script>

<script>
	import { term } from './term';
	export let results;

	let value = term;
</script>

<h1>Supersearch</h1>

{#if results}
  Found results
{/if}

<input type="text" bind:value />

<a target="_blank" href={`?search=${value}`}>Search</a>
