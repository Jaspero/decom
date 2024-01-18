<script lang="ts">
    import {onMount} from 'svelte';
    import {collection, getDocs, query, where} from 'firebase/firestore';
    import {db} from '$lib/utils/firebase';
    import Product from "$lib/Product.svelte";


    let products = [];
    let lastProductDoc;
    let loading = false;
    let showBtn = true;
    let currentFilters = {
        category: null,
        priceRange: { min: 0, max: 200 }
    };
    let categories = [];

    $: if (currentFilters) {
        loadProducts().catch();
    }

    async function loadProducts() {
        loading = true;

        const discountsRef = collection(db, 'products');
        let filters = buildFilters();

        let queryRef = query(discountsRef, ...filters);

        const snap = await getDocs(queryRef);

        if (!snap.empty) {
            lastProductDoc = snap.docs[snap.docs.length - 1];
            products = snap.docs.map(doc => ({id: doc.id, ...doc.data()}));
        }

        loading = false;
    }

    function buildFilters() {
        let filters = [];

        if (currentFilters.category !== null && currentFilters.category !== undefined) {
            filters.push(where('category', '==', currentFilters.category));
        }


            filters.push(where('price', '>=', currentFilters.priceRange.min));
            filters.push(where('price', '<=', currentFilters.priceRange.max));


        return filters;
    }

    async function loadCategories() {
        const categoriesRef = collection(db, 'categories');
        const categoriesSnap = await getDocs(categoriesRef);
        categories = categoriesSnap.docs.map(doc => ({id: doc.id, ...doc.data()}));
    }

    onMount(async () => {
        await loadCategories();
    });
</script>

<div class="w-full grid">
    <div class="w-full text-center text-4xl py-12">
        <h1>Products</h1>
    </div>
    <div class="mb-[20px] w-[300px]">
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={currentFilters.category}>
            <option value={null}>All Categories</option>
            {#each categories as cat (cat.id)}
                <option value={cat.id}>{cat.name}</option>
            {/each}
        </select>
        <div class="mb-[20px]">
            <label for="priceRange">Price Range:</label>
            <input type="range" id="priceRange" bind:value={currentFilters.priceRange.min} min="0" max="200" on:input={loadProducts} />
            <span>{currentFilters.priceRange.min}$ - {currentFilters.priceRange.max}$</span>
        </div>
    </div>
    <div class="container grid grid-cols-4 gap-4">
        {#each products as product (product.id)}
            <Product {product}/>
        {/each}
    </div>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
