<script>
	export let title;
	export let description;
	export let price;
</script>

<div class="card">
	<div class="product-image">
		<img src="/images/20230626_174239.jpg" alt="Scintillueur Wax Candle" />
	</div>
	<h3 class="card-header">{title}</h3>
	<div class="card-body">
		<div class="description">{description}</div>
	</div>
	<div class="card-footer">₹ {price}</div>
</div>

<style>
	.card {
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 1px 2px rgba(0, 0, 0.1);
		margin: 20px 0;
		max-width: 320px;
		padding: 0.6rem;
		display: grid;
		align-items: stretch;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0 1px 4px rgba(0, 0, 0.4);
			cursor: pointer;
			background-color: whitesmoke;
		}
	}
	.product-image {
		width: 300px;
		align-self: center;
	}
	.product-image img {
		width: 300px;
		height: 300px;
		object-fit: cover;
		border-radius: 5px;
	}
	.card-header {
		/* background: whitesmoke; */
		font-size: 1rem;
		font-weight: 600;
		padding: 0.2rem 0;
	}
	.card-body {
		font-size: 0.9rem;
		margin: 0.3rem 0;
	}
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
        -webkit-box-orient: vertical;
         -webkit-line-clamp: 3;
         display: -webkit-box;
	}
	.card-footer {
		font-size: 0.8rem;
		font-weight: 700;
		text-align: center;
		border-top: 1px dotted #696969;
		padding: 0.3rem 0 0;
		margin-top: 0.3rem;
		letter-spacing: -1px;
	}
</style>
