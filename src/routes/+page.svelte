<script>
	import { onMount } from "svelte";
    import { writable } from 'svelte/store';
    let loading = writable(true);
    let splineLoaded = false;
	let splineLoadedDelay = false;
    let mountWelcome = false;
    onMount(async()=>{
        mountWelcome = !mountWelcome;
        await import ("https://unpkg.com/@splinetool/viewer@0.9.480/build/spline-viewer.js")
    })
    
</script>

<svelte:head>
    <title>Scintillueur | Home</title>
     <!-- {#if $loading}
		<style>
			body {
				overflow: hidden;
				padding-right: 12px;
			}
			@media (min-width: 1440px) {
				body {
					padding-right: 22px;
				}
			}
		</style>
	{/if}
	{#if !$loading}
		<style>
			body {
                overflow: auto;
				padding-right: 0px;
			}
		</style>
	{/if} -->
</svelte:head>

<h1 class="page-title">Welcome!</h1>
<div>
    <spline-viewer hint loading-anim url="https://prod.spline.design/G0BXTvz1DLxjI6hZ/scene.splinecode"></spline-viewer>
</div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas deserunt explicabo vitae mollitia, incidunt ullam aut perspiciatis! Accusamus magnam quo in, maiores architecto aliquam aperiam dolores molestiae quia, enim tenetur.</p>
<p>Optio consequuntur ut suscipit necessitatibus corrupti qui modi quisquam aliquid odio cupiditate, dolorum quod ullam? Voluptatem, culpa eaque. Doloremque optio corrupti earum cum ea architecto consectetur adipisci a ipsam libero!</p>
<p>Dolore expedita doloremque quae laboriosam eum dolorem repellat impedit autem sed. Optio enim ab nam, laborum nulla voluptates perferendis provident. Tenetur molestias laudantium quis dolor, provident distinctio doloremque iusto sit!</p>
<p>Architecto molestiae rem veritatis laborum animi eaque vel magni quis odit voluptatem, corporis quo, alias minus at delectus incidunt officia dolorum harum cumque error soluta repudiandae? Quae, voluptas dolor! Magnam?</p>

<style>
    ul{
        margin: 2rem 1.5rem;
    }
    li{
        list-style-type: none;
        margin-bottom: 0.5rem;
        list-style-position: inside;
        counter-increment: li;
        display: flex;
        position: relative;
        align-items: flex-start;
        margin-left: 1.5rem;
    }
    li:before{
        content: counter(li);
        /* margin-right: 1.5rem; */

        /* margin-left: -1rem; */
    }

    /* li:after{
        content: 'th';
        position: absolute;
        left: 0.7rem;
        top: -0.1rem;
        font-size: 0.8rem;
    }
    li:nth-child(n+10):after{
        left: 1.1rem;
    }
    li:nth-child(1):after{
        content: 'st';
    }
    li:nth-child(2):after{
        content: 'nd';
    } */
    li sup:after{
        content: 'th';
        margin-right: 0.5rem;
    }

    li:nth-child(1) sup:after{
        content: 'st';
    }
    li:nth-child(2) sup:after{
        content: 'nd';
    }
    li:nth-child(3) sup:after{
        content: 'rd';
    }
    .main-btn{
        padding: 0.5rem;
        color: antiquewhite;
        background-color:darkblue;
        outline: none;
        border: 2px solid black;
        border-radius: 0.5rem;
        transition: all 0.2s;
        min-width: 80px;
    }
    .main-btn:hover{
        cursor: pointer;
        background-color: brown;
    }
    .main-btn:hover span{
        opacity: 0;
        display: none;
    }
    .main-btn::before{
        content: attr(data-items) ;
        display: none;
        transition: all 0.2s;
    }
    .main-btn:hover::before{
        display: block;
    }
</style>