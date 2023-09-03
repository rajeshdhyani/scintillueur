<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<a href="/" class="btn-default" on:click={() => dispatch('click', true)} {...$$restProps}>
	<slot />
</a>

<style>
	.btn-default {
		padding: 0.2rem 0.25rem;
		text-decoration: none;
		box-sizing: border-box;
		color: grey;
		transition: color 0.2s ease;
		font-weight: 400;
		&:hover {
			color: #d4af37;
		}
	}
</style>
