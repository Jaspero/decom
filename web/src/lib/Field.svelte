<script lang="ts">
  export let label = '';
  export let value = '';
  export let placeholder = '';
  export let wfull = false;
  export let autocomplete = 'off';

  export let disabled = false;
  export let required = false;

  export let type:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'range'
    | 'color'
    | 'radio'
    | 'file'
    | 'submit'
    | 'reset'
    | 'button'
    | 'image'
    | 'hidden'
    | 'search' = 'text';
  export let minlength: null | number = null;

  export let alt = '';
</script>

<label class="field" class:has-hint={$$slots.hint} class:w-full={wfull}>
  {#if label}
    <span class="label" class:move={value || placeholder}>{label}</span>
  {/if}

  {#if type === 'text'}
    <input type="text" {required} {minlength} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'password'}
    <input
      type="password"
      {required}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'email'}
    <input type="email" {required} {minlength} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'number'}
    <input type="number" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'tel'}
    <input type="tel" {required} {minlength} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'url'}
    <input type="url" {required} {minlength} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'date'}
    <input type="date" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'time'}
    <input type="time" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'datetime-local'}
    <input type="datetime-local" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'month'}
    <input type="month" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'week'}
    <input type="week" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'color'}
    <input type="color" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'file'}
    <input type="file" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'submit'}
    <input type="submit" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'reset'}
    <input type="reset" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'button'}
    <input type="button" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'image'}
    <input type="image" {alt} {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'hidden'}
    <input type="hidden" {required} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'search'}
    <input type="search" {required} {disabled} {autocomplete} name={type} bind:value />
  {/if}

  {#if placeholder && !value}
    <span class="placeholder">{placeholder}</span>
  {/if}

  {#if $$slots.hint}
    <div class="hint">
      <slot name="hint" />
    </div>
  {/if}
</label>

<style lang="postcss">
  .field {
    @apply relative flex transition-all border rounded-full;
  }

  .field:hover {
    @apply border-black/30;
  }

  .field:not(.w-full) {
    @apply max-w-[350px];
  }

  .label {
    @apply absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-300 select-none cursor-pointer bg-white;
  }

  .label.move {
    @apply top-0 text-xs left-2 px-1 rounded-full;
  }

  .placeholder {
    @apply absolute top-4 left-0 opacity-50 select-none;
  }

  input {
    @apply block flex-1 px-3 py-2 outline-0 rounded-full;
  }
</style>
