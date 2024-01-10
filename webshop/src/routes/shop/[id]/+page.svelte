<script lang="ts">
  import { onMount } from 'svelte';
  import type { ProductInfo } from '$lib/types/product/product-info.interface';
  import ProductReview from '$lib/ProductReview.svelte';
  import { collection, getDocs, limit, orderBy, query, startAt } from 'firebase/firestore';
  import { db } from '$lib/utils/firebase';
  import type { ProductReviews } from '$lib/types/product/product-reviews.interface';
  import Loader from '$lib/Loader.svelte';
  import Button from '$lib/Button.svelte';

  export let data: {
    productInfo: {
      product: ProductInfo,
      reviews: ProductReviews[]
    }
  };

  let averageRating = 0;
  let currentImageIndex = 0;
  let currentPage = 0;
  const pageSize = 10;

  async function allReviews(page: number) {
    const reviewsCollectionRef = collection(db, 'products', data.productInfo.product.id, 'reviews');
    const querySnapshot = await getDocs(query(reviewsCollectionRef, orderBy('createdOn'), limit(pageSize), startAt(page * pageSize)));

    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as ProductReviews[];
  }

  onMount(() => {
    allReviews(currentPage).then((reviews) => {
      data.productInfo.reviews = reviews;
    });

  });

  function loadMoreReviews() {
    currentPage++;
    allReviews(currentPage).then((reviews) => {
      data.productInfo.reviews = [...data.productInfo.reviews, ...reviews];
    });
  }

  async function calculateAverageRating(reviews: ProductReviews[]) {
    reviews.forEach((review) => {
      averageRating = (averageRating + review.rating);
    });
    averageRating = averageRating / reviews.length;
    return averageRating;
  }

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
    <img alt="{data.productInfo.product.name}" class="product-img"
         src={data.productInfo.product.gallery[currentImageIndex]} />
    <div class="navigation-bubbles">
      {#each data.productInfo.product.gallery as imageUrl, index}
        <div class="bubble" class:selected={index === currentImageIndex} on:click={() => navigateToImage(index)}></div>
      {/each}
    </div>
    {#await allReviews(currentPage)}
      <Loader />
    {:then reviews}
      {#await calculateAverageRating(reviews)}
        <Loader />
      {:then averageRating}
        <ProductReview averageRating={averageRating} data={data} enableStarsInput={true} />
      {/await}
    {/await}

  </div>

  <div class="product-details">
    <h2>{data.productInfo.product.name}</h2>
    <p class="price">${data.productInfo.product.price}</p>
    <button class="add-to-cart-btn" on:click={addToCart}>Add to Cart</button>
    <p class="description">{data.productInfo.product.description}</p>
  </div>

  {#await allReviews(currentPage)}
    <Loader />
  {:then reviews}
    <div class="reviews">
      <h3>Customer Reviews</h3>
      <div class="product-review">
        {#each reviews as review}
          <div class="review">
            <p class="customer">{review.customer}</p>
            <p class="comment">{review.comment}</p>
            <ProductReview averageRating={review.rating} enableStarsInput={false} data={data} />
            <p class="created-on">{beautifyDate(review.createdOn)}</p>
          </div>
        {/each}
      </div>
      <div class="pt-5 flex justify-center">
      <Button on:click={loadMoreReviews}>Load More Reviews</Button>
      </div>
    </div>
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}

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
