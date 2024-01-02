<script lang="ts">
  export let type: 'by' | 'read-more' | 'about' = 'by';
  export let name: string;
  export let image: string = '';
  export let about: string = '';
  export let link: string;
</script>

<section class:about={type === 'about'}>
  <div class="flex">
    {#if image}
      <img src={image} alt={name} />
    {/if}
    <div class="flex-1">
      {#if type === 'by'}
        <h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;">
          WRITTEN BY
        </h1>
        <a href={link}>{name}</a>
      {/if}
      {#if type === 'read-more'}
        <h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;">
          ARTICLE BY
        </h1>
        <a href={link}>{name}</a>
      {/if}
      {#if type === 'about'}
        <h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;">ABOUT</h1>
        <p>{name}</p>
      {/if}
    </div>
  </div>
  {#if type == 'about' && about}
    <div class="w-full m-t-m">
      {@html about}
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .about {
    align-items: flex-start;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    section {
      width: 100%;
    }
  }
</style>
