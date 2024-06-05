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
    background-color: var(--secondary-color);
    color: var(--secondary-contrast-color);
    border-color: var(--secondary-color);
  }

  a.active {
    background-color: var(--primary-color);
    color: var(--primary-contrast-color);
    border-color: var(--primary-color);
  }
</style>
