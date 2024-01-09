<script>
    let isFavorite = false;

    const toggleFavorite = () => {
        isFavorite = !isFavorite;
    };
    export let product;

    const addToCart = () => {
        console.log(`Adding ${product.name} to cart`);
    };
</script>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {#if product.gallery && product.gallery.length > 0}
    <img class="w-full h-[200px] rounded-t-lg" src={product.gallery[0]} alt="product image" />
    {:else}
        <img class="w-full h-[200px] rounded-t-lg" src="images/dummy-img.jpg" alt="default image" />
    {/if}
    <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <div class="flex items-center justify-start flex-wrap">
            <span class="text-3xl w-full font-bold text-gray-900 dark:text-white">${product.quantity}</span>
            <span class="text-1xl w-full text-gray-900 dark:text-white">{product.shortDescription}</span>
            <div class="w-full flex justify-between items-center">
                <button on:click={addToCart} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                </button>
                    <img src={isFavorite ? 'images/favorites.svg' : 'images/favorites-unselected.svg'}
                            alt="Favorite"
                            width="35px"
                            height="35px"
                            on:click={toggleFavorite}/>
            </div>
        </div>
    </div>
</div>


<style>
    .pero {
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .pero:hover {
        opacity: 0.8;
    }

</style>
