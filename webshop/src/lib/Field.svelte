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

<label class="field" class:has-hint={$$slots.hint} class:wfull>
  {#if label}
    <span class="label" class:move={value}>{label}</span>
  {/if}

  {#if type === 'text'}
    <input
      type="text"
      {required}
      {placeholder}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'password'}
    <input
      type="password"
      {required}
      {placeholder}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'email'}
    <input
      type="email"
      {required}
      {placeholder}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'number'}
    <input
      type="number"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'tel'}
    <input
      type="tel"
      {required}
      {placeholder}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'url'}
    <input
      type="url"
      {required}
      {placeholder}
      {minlength}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'date'}
    <input type="date" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'time'}
    <input type="time" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'datetime-local'}
    <input
      type="datetime-local"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'month'}
    <input type="month" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'week'}
    <input type="week" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'color'}
    <input type="color" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'file'}
    <input type="file" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'submit'}
    <input
      type="submit"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'reset'}
    <input type="reset" {required} {placeholder} {disabled} {autocomplete} name={type} bind:value />
  {:else if type === 'button'}
    <input
      type="button"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'image'}
    <input
      type="image"
      {alt}
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'hidden'}
    <input
      type="hidden"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {:else if type === 'search'}
    <input
      type="search"
      {required}
      {placeholder}
      {disabled}
      {autocomplete}
      name={type}
      bind:value
    />
  {/if}

  {#if $$slots.hint}
    <div class="hint">
      <slot name="hint" />
    </div>
  {/if}
</label>

<style lang="postcss">
  .field {
    @apply relative flex border-b border-black/10 hover:border-black/30 transition-all;
  }

  .field:not(.wfull) {
    @apply max-w-[350px];
  }

  .label {
    @apply absolute top-4 left-0 transition-all duration-300 select-none cursor-pointer;
  }

  .label.move {
    @apply top-0 text-xs;
  }

  input {
    @apply block flex-1 px-0 pt-4 pb-1 outline-0;
  }
</style>
