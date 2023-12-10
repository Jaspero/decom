<script lang="ts">
  export let emojiColor = '';
</script>

<div class="flex items-center gap-4 flex-wrap">
  {#if $$slots.emoji}
    <span class="emoji" style="background-color: {emojiColor};">
      <slot name="emoji" />
    </span>
  {/if}

  {#if $$slots.default}
    <h1>
      <slot />
    </h1>
  {/if}

  {#if $$slots.description}
    <p>
      <slot name="description" />
    </p>
  {/if}
</div>

<style lang="postcss">
  .emoji {
    @apply text-4xl w-12 h-12 flex items-center justify-center rounded-full;
  }

  h1 {
    @apply text-3xl font-bold;
  }
</style>
