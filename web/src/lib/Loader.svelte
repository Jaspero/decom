<script lang="ts">
  export let variant: 'full' | 'normal' | 'small' = 'normal';
</script>

{#if variant === 'full'}
  <div class="w-screen h-screen bg-white flex justify-center items-center gap-2">
    <div
      class="w-4 h-4 border-2 border-l-secondary border-secondary/25 rounded-full animate-spin"
    />
    Loading...
  </div>
{:else if variant === 'normal'}
  <div class="w-full h-full text-white flex justify-center items-center gap-2">
    <div class="w-4 h-4 border-2 border-l-white border-white/50 rounded-full animate-spin" />
    Loading...
  </div>
{:else if variant === 'small'}
  <div class="w-4 h-4 text-white flex justify-center items-center">
    <div class="w-4 h-4 border-2 border-l-white border-white/50 rounded-full animate-spin" />
  </div>
{/if}
