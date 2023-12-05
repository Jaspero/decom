<script lang="ts">
  export let required = false;
  export let checked: boolean | undefined = undefined;
</script>

<label>
  <input type="checkbox" on:click on:change bind:checked {required} />
  <slot />
</label>

<style lang="postcss">
  label {
    @apply inline-flex items-center gap-2 select-none cursor-pointer;
  }

  input {
    @apply w-5 h-5 cursor-pointer;
  }
</style>
