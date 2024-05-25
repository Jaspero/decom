<script lang="ts">
  export let autoRows = false;
</script>

<div class="grid grid-cols-12 max-w-7xl w-full gap-6 p-6 mx-auto" class:auto-rows={autoRows}>
  <slot />
</div>

<style>
  .auto-rows {
    grid-auto-rows: 1fr;
  }
</style>
