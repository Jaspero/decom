<script lang="ts">
  export let active = false;
  export let href: string;
</script>

<a {href} class:active>
  <slot />
</a>

<style lang="postcss">
  a {
    @apply px-4 py-1 border rounded-full transition-colors;
  }

  a:hover {
    background-color: var(--secondary);
    color: var(--secondary-contrast);
    border-color: var(--secondary);
  }

  a.active {
    background-color: var(--primary);
    color: var(--primary-contrast);
    border-color: var(--primary);
  }
</style>
