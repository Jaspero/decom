<script lang="ts">
  import '@jaspero/web-components/dist/carousel.wc.js';
  import '@jaspero/web-components/dist/review-stars.wc.js';

  export let data;

  console.log('Product Info:', data);
</script>

<div class="max-w-[1400px] mx-auto flex flex-wrap py-[80px]">
  <div class="w-3/6 gallery-container h-[400px]">
    {#if data.gallery && data.gallery.length > 0}
      <jp-carousel images={JSON.stringify(data.gallery.map((src) => ({ src })))} sliderBar="true" />
    {:else}
      <img class="w-full h-[200px] rounded-t-lg" src="/images/dummy-img.jpg" alt="default image" />
    {/if}
  </div>
  <div class="w-3/6">
    <div class="product-info">
      <jp-review-stars value={data.averageRating} rating={data.enableStarsInput} />
      <h1>{data.name}</h1>
      <p class="text-[30px]">Price: <span class="font-600">{data.price}€</span></p>
    </div>
    <div>
      <p>Description: {data.description}</p>
      <div class="w-full flex justify-between items-center text-gray-900 dark:text-white">
        <div class="w-full flex justify-between items-center" style="flex-direction: column">
          {#each data.variants as variant}
            <div class="w-full flex justify-around items-center">
              <p>{variant.name}</p>
              {#if variant.options}
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  bind:value={data.selectedVariant}
                >
                  {#each variant.options as opt}
                    <option value={opt}>{opt}</option>
                  {/each}
                </select>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .slider {
    height: 100%;
  }
</style>
