<script>
	import Menu from './Menu.svelte';
	import './styles.css';
</script>

<div class="wrapper">
	<Menu />
	<main>
		<slot />
	</main>
	<footer class="footer">
		<p>&copy; 2023. Scintillueur. All rights reserved</p>
	</footer>
</div>

<style>
	main{
		display: inline-block;
		max-width: 80vw;
	}
</style>
