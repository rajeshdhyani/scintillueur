<script>
	import Card from '$lib/Card.svelte';


    const data = [
		{title: "First Love", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, maxime! Suscipit veniam dolores ullam et?", price: "399"},
		{title: "Jungle Myst 1234", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit esse perspiciatis ratione error culpa reiciendis sed similique.", price: "399"},
		{title: "Nirvana", description: "Corrupti quasi alias harum nisi doloribus totam officiis iusto nemo aliquam numquam fugit sunt necessitatibus accusantium maxime, quidem similique! Maxime, soluta possimus?", price: "399"},
		{title: "Indulgence", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, maxime! Suscipit veniam dolores ullam et?", price: "399"},
		{title: "Tranquility", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore facilis.", price: "399"},
		{title: "Winter Cottage", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit esse perspiciatis ratione error culpa reiciendis sed similique.", price: "399"},
		{title: "Intuition", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore facilis", price: "399"},
		{title: "Yummilicious", description: "Corrupti quasi alias harum nisi doloribus totam officiis iusto nemo aliquam numquam fugit sunt necessitatibus accusantium maxime, quidem similique! Maxime, soluta possimus?", price: "399"},]
</script>

<svelte:head>
	<title>Scintillueur | Products</title>
</svelte:head>

<h1 class="page-title">100% soy wax candles, hand made with love!</h1>
<div class="row row-cards">
    {#each data as item}
    <Card title={item.title} description={item.description} price={item.price} />
    {/each}
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 0.3rem;
	}
</style>
