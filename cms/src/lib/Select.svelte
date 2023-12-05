<script lang="ts">
  export let label: string = '';
  export let value: string = '';
  export let required: boolean = false;
  export let disabled: boolean = false;
</script>

<label class:has-hint={$$slots.hint}>
  {#if label}
    {label}
  {/if}

  <select {required} {disabled} bind:value>
    <slot />
  </select>

  {#if $$slots.hint}
    <div class="hint">
      <slot name="hint" />
    </div>
  {/if}
</label>

<style lang="postcss">
  label {
    @apply flex flex-col gap-1 font-bold;
  }

  .has-hint {
    @apply relative;
  }

  select {
    @apply border rounded pl-4 pr-6 py-3 font-normal hover:border-black/50 focus:outline-2 focus:outline-offset-4 focus:outline-dashed;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background: url('/images/expand.svg') no-repeat 98% white;
  }
</style>
