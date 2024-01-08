<script lang="ts">
  import { onMount } from 'svelte';
  import type { ProductInfo } from '$lib/types/product/product-info.interface';
  import type { ProductReviews } from '$lib/types/product/product-reviews.interface';
  import ProductReview from '$lib/ProductReview.svelte';

  export let data: {
    productInfo: {
      product: ProductInfo,
      reviews: ProductReviews[]
    }
  };

  let currentImageIndex = 0;

  onMount(() => {
  });

  function addToCart() {
    console.log(`Added ${data.productInfo.product.name} to the cart!`);
  }

  function navigateToImage(index: number) {
    currentImageIndex = index;
  }
  function beautifyDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  }
</script>
<div class="flex">
  <div class="flex-col mt-5 ml-5 items-center justify-center w-1/3">
    <div class="gallery">
      <img alt="{data.productInfo.product.name}" class="product-img"
           src={data.productInfo.product.gallery[currentImageIndex]} />
    </div>
    <div class="navigation-bubbles">
      {#each data.productInfo.product.gallery as imageUrl, index}
        <div class="bubble" class:selected={index === currentImageIndex} on:click={() => navigateToImage(index)}></div>
      {/each}
    </div>
    <ProductReview averageRating={data.productInfo.product.averageRating} enableStarsInput={true} data={data}/>

  </div>
  <div class="product-details w-2/3">
    <div class="flex">
      <div class="product-info">
        <h2>{data.productInfo.product.name}</h2>
        <p>${data.productInfo.product.price}</p>
      </div>
    </div>
    <button class="add-to-cart-btn" on:click={addToCart}>Add to Cart</button>
    <div class="product-review">
      {#each data.productInfo.reviews as review}
        <p>{review.customer}</p>
        <p>{review.comment}</p>
        <ProductReview averageRating={review.rating} enableStarsInput={false} data={data}/>
        <p>{beautifyDate(review.createdOn)}</p>
      {/each}
    </div>
  </div>
</div>
<style>
    .product-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    .gallery {
        position: relative;
    }

    .product-img {
        max-width: 100%;
        max-height: 400px;
    }

    .navigation-bubbles {
        display: flex;
        margin-top: 10px;
    }

    .bubble {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #bbb;
        margin-right: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .bubble:selected {
        background-color: #4caf50;
    }

    .product-info {
        margin-top: 20px;
        text-align: center;
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
