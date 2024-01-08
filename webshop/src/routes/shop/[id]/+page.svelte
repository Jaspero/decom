<script lang="ts">
  import { onMount } from 'svelte';
  import type { ProductInfo } from '$lib/types/product/product-info.interface';
  import type { ProductReviews } from '$lib/types/product/product-reviews.interface';

  export let data: { productInfo: {
    product: ProductInfo,
    reviews: ProductReviews[]
    } };

  onMount(() => {
    // Fetch product details from the server
    // and update the product variable
    console.log(data.productInfo);
  });


  function addToCart() {
    // Implement your cart logic here
    console.log(`Added ${data.productInfo.product.name} to the cart!`);
  }
</script>

<main>
  <div class="product-details">
<!--    <img {data.product.gallery[0]} alt="{data.product.name}" class="product-img">-->
    <div class="product-info">
      <h2>{data.productInfo.product.name}</h2>
      <p>${data.productInfo.product.price}</p>
    </div>
  </div>
  <button on:click={addToCart} class="add-to-cart-btn">Add to Cart</button>
</main>

<style>
    main {
        max-width: 800px;
        margin: 50px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .product-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    .product-img {
        max-width: 200px;
        max-height: 200px;
    }

    .product-info {
        flex: 1;
        margin-left: 20px;
    }

    .add-to-cart-btn {
        background-color: #4caf50;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
