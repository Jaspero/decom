<script lang="ts">
  import { onMount } from 'svelte';
  import '@jaspero/web-components/dist/review-stars.wc';
  import { authenticated, db, user } from '$lib/utils/firebase';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import Button from '$lib/Button.svelte';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import type { User } from 'firebase/auth';
  import {
    addDoc,
    collection,
    doc,
    updateDoc
  } from 'firebase/firestore';
  import type { ProductInfo } from '$lib/types/product/product-info.interface';
  import type { ProductReviews } from '$lib/types/product/product-reviews.interface';
  let instance: any;
  let el: HTMLDivElement;
  let isModalOpen = false;
  let comment = '';
  let userRating = 0;
  let loading = false;
  let recaptchaVerify: () => Promise<string>;
  let selectedReview: string | null;
  let rating = 0;
  export let data: any;
  export let averageRating: number;
  export let enableStarsInput: boolean;
  onMount(() => {
    instance = document.createElement('jp-review-star-rating') as any;

    instance.value = averageRating;
    instance.starsInput = enableStarsInput;

    instance.addEventListener('rating', (e: any) => {
      if (e.detail) {
        rating = e.detail;
        openModal();
      }
    });
    el.appendChild(instance);
  })

  function openModal() {
    selectedReview = null;
    comment = '';
    isModalOpen = true;
  }

  function closeModal() {
    comment = '';
    isModalOpen = false;
  }

  async function saveReview() {
    loading = true;
    const customer = $user?.name || ($authenticated as User).displayName || 'Anonymous';
    const reviewData = {
      author: ($authenticated as User).uid,
      customer,
      rating,
      comment,
      createdOn: new Date().toISOString()
    };

    await alertWrapper(
      recaptchaVerify().then(
        () =>
          (selectedReview
            ? updateDoc(doc(db, 'products', data.productInfo.product.id, 'reviews', selectedReview), reviewData)
            : addDoc(collection(db, 'products', data.productInfo.product.id, 'reviews'), reviewData)) as any
      ),
      'Review saved',
      '',
      () => (loading = false)
    );

    rating = 0;
    comment = '';
    loading = false;
    isModalOpen = false;
  }
</script>

<div bind:this={el}></div>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        width: 300px;
        text-align: center;
    }

    h2 {
        margin-bottom: 10px;
        color: #333333;
        font-size: 1.5rem;
    }

    textarea {
        width: 100%;
        margin-bottom: 15px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        border-radius: 5px;
        resize: vertical;
        font-size: 1rem;
    }

</style>

{#if isModalOpen}
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Enter your comment</h2>
      <textarea bind:value={comment} rows="4" placeholder="Optional comment"></textarea>
      <div class="flex justify-center">
      <Button on:click={saveReview} loading={loading}>Save</Button>
      <Button on:click={closeModal} color="secondary">Cancel</Button>
      </div>
    </div>
  </div>
{/if}

<Recaptcha bind:verify={recaptchaVerify} />
