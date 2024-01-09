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

  function addToCart() {
    console.log(`Added ${data.productInfo.product.name} to the cart!`);
  }

  function navigateToImage(index: number) {
    currentImageIndex = index;
  }

  function beautifyDate(dateString: string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  }
</script>

<div class="single-product">
  <div class="product-gallery">
    <img alt="{data.productInfo.product.name}" class="product-img" src={data.productInfo.product.gallery[currentImageIndex]} />
    <div class="navigation-bubbles">
      {#each data.productInfo.product.gallery as imageUrl, index}
        <div class="bubble" class:selected={index === currentImageIndex} on:click={() => navigateToImage(index)}></div>
      {/each}
    </div>
    <ProductReview averageRating={data.productInfo.product.averageRating} enableStarsInput={true} data={data}/>
  </div>

  <div class="product-details">
    <h2>{data.productInfo.product.name}</h2>
    <p class="price">${data.productInfo.product.price}</p>
    <button class="add-to-cart-btn" on:click={addToCart}>Add to Cart</button>
    <p class="description">{data.productInfo.product.description}</p>
  </div>

  <div class="reviews">
    <h3>Customer Reviews</h3>
    <div class="product-review">
      {#each data.productInfo.reviews as review}
        <div class="review">
          <p class="customer">{review.customer}</p>
          <p class="comment">{review.comment}</p>
          <ProductReview averageRating={review.rating} enableStarsInput={false} data={data} />
          <p class="created-on">{beautifyDate(review.createdOn)}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
    .single-product {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    }

    .product-gallery {
        flex: 1 1 40%;
        margin-right: 20px;
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

    .product-details {
        flex: 1 1 50%;
    }

    h2, h3 {
        margin-top: 0;
    }

    .price {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .add-to-cart-btn {
        background-color: #4caf50;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .description {
        line-height: 1.4;
    }

    .reviews {
        flex: 1 1 100%;
        margin-top: 20px;
    }

    .product-review {
        display: grid;
        gap: 20px;
    }

    .review {
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 5px;
    }

    .customer {
        font-weight: bold;
    }

    .created-on {
        color: #888;
    }
</style>
