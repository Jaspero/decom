<script lang="ts">
    import {onMount} from 'svelte';
    import {collection, getDocs, query, where} from 'firebase/firestore';
    import {db} from '$lib/utils/firebase';
    import Product from "$lib/Product.svelte";
    import {writable} from "svelte/store";


    let products = [];
    let lastProductDoc;
    let loading = false;
    let noProductsFound = false;
    let currentFilters = {
        category: null,
        priceRange: { min: 0, max: 200 },
        tags: [],
    };
    let categories = [];
    let tags = [];

    $: if (currentFilters) {
        loadProducts().catch();
        noProductsFound = false;
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
        } else {
            products = [];
            noProductsFound = true;
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

        if (currentFilters.tags.length > 0) {
            filters.push(where('tags', 'array-contains-any', currentFilters.tags));
        }

        return filters;
    }

    async function loadCategories() {
        const categoriesRef = collection(db, 'categories');
        const categoriesSnap = await getDocs(categoriesRef);
        categories = categoriesSnap.docs.map(doc => ({id: doc.id, ...doc.data()}));
    }
    async function loadTags() {
        const tagsRef = collection(db, 'tags');
        const tagsSnap = await getDocs(tagsRef);
        tags = tagsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    function toggleTag(tag) {
        const index = currentFilters.tags.indexOf(tag);
        if (index === -1) {
            currentFilters.tags.push(tag);
        } else {
            currentFilters.tags.splice(index, 1);
        }

        const selectedTag = tags.find(t => t.id === tag);
        if (selectedTag) {
            selectedTag.active = !selectedTag.active;
            tags = [...tags]; // Trigger reactivity
        }

        loadProducts().catch();
    }


    onMount(async () => {
        await loadCategories();
        await loadTags();
    });
</script>

<div class="w-full">
    <div class="w-full text-center text-4xl py-12">
        <h1>Products</h1>
    </div>
    <div class="flex">
        <div class="w-[400px] bg-gray-200 p-4 h-[400px]">
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
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Tags:
                </label>
                <div class="w-full justify-start flex flex-wrap">
                    {#each tags as tag (tag.id)}
                        <button type="button"
                                class="{tag.active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} mr-2 mb-2 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            on:click={() => toggleTag(tag.id)}>
                            {tag.name}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
        <div class="flex-1 p-4">
            {#if noProductsFound}
                <div>No products found within the specified price range.</div>
            {:else}
                <div class="container grid grid-cols-4 gap-4">
                    {#each products as product (product.id)}
                        <Product {product}/>
                    {/each}
                </div>
            {/if}
        </div>
    </div>


<!--        <div class="flex items-center p-4">-->
<!--            <div>-->
<!--                <jp-range value={currentFilters.priceRange.min} name="priceRange" id="priceRange" min="0" max="200" step="1" discrete="false">-->
<!--                    <span>{currentFilters.priceRange.min}$ - {currentFilters.priceRange.max}$</span>-->
<!--                </jp-range>-->
<!--            </div>-->
<!--        </div>-->



</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
