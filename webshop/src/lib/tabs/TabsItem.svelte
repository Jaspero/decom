<script lang="ts">
  export let active = false;
  export let href: string;
</script>

<a {href} class:active>
  <slot />
</a>

<style>
  a {
    padding: 0.375rem 1rem;
    background-color: rgba(9, 55, 31, 0.1);
    color: var(--text-lighter);
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 100px;
    transition: 0.35s;
    margin: 0.5rem;
  }

  a:hover {
    color: var(--text);
  }

  a.active {
    background-color: var(--accent);
    color: var(--accent-c);
  }
</style>
