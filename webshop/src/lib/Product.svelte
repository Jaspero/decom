<script lang="ts">
    import {db, user} from "./utils/firebase";
    import {doc, updateDoc,arrayRemove,arrayUnion } from "firebase/firestore";
    import {writable} from "svelte/store";
    import {notification} from "./notification/notification";


    export let product;
    export let userId;


    const isFavoriteStore = writable(false);

    $: {
        userId = $user ? $user.id : null;
        isFavoriteStore.set(($user?.favorites || []).includes(product.id));
    }
    async function  toggleFavorite  () {
        const userRef = doc(db, 'customers', userId);
        let isFavorite = $isFavoriteStore;
        if (isFavorite) {
            console.log('Removing product from user favorites in the database:', userId, product.id);
            await updateDoc(userRef, {
                favorites: arrayRemove(product.id)
            });
            notification.set({
                type: 'error',
                content: `${product.name} has been removed from favorites.`
            });
        } else {
            console.log('Adding product to user favorites in the database:', userId, product.id);
            await updateDoc(userRef, {
                favorites: arrayUnion(product.id)
            });
            notification.set({
                type: 'success',
                content: `${product.name} has been added to favorites.`
            });
        }
        isFavoriteStore.set(!isFavorite);
    };



    const addToCart = () => {
        console.log(`Adding ${product.name} to cart`);
    };

    $: console.log(product, $user);


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
                <img class="cursor-pointer transition-opacity duration-300 hover:opacity-80"
                     src={$isFavoriteStore ? 'images/favorites.svg' : 'images/favorites-unselected.svg'}
                     alt="Favorite"
                     width="35px"
                     height="35px"
                     on:click={toggleFavorite} />
            </div>
        </div>
    </div>
</div>


<style>


</style>
