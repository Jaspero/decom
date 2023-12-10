<script lang="ts">
  export let label = '';
  export let value = '';
  export let placeholder = '';

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
</script>

<label class:has-hint={$$slots.hint}>
  {#if label}
    {label}
  {/if}

  {#if type === 'text'}
    <input type="text" {required} {placeholder} {minlength} {disabled} bind:value />
  {:else if type === 'password'}
    <input type="password" {required} {placeholder} {minlength} {disabled} bind:value />
  {:else if type === 'email'}
    <input type="email" {required} {placeholder} {minlength} {disabled} bind:value />
  {:else if type === 'number'}
    <input type="number" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'tel'}
    <input type="tel" {required} {placeholder} {minlength} {disabled} bind:value />
  {:else if type === 'url'}
    <input type="url" {required} {placeholder} {minlength} {disabled} bind:value />
  {:else if type === 'date'}
    <input type="date" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'time'}
    <input type="time" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'datetime-local'}
    <input type="datetime-local" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'month'}
    <input type="month" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'week'}
    <input type="week" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'range'}
    <input type="range" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'color'}
    <input type="color" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'radio'}
    <input type="radio" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'file'}
    <input type="file" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'submit'}
    <input type="submit" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'reset'}
    <input type="reset" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'button'}
    <input type="button" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'image'}
    <!-- svelte-ignore a11y-missing-attribute -->
    <input type="image" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'hidden'}
    <input type="hidden" {required} {placeholder} {disabled} bind:value />
  {:else if type === 'search'}
    <input type="search" {required} {placeholder} {disabled} bind:value />
  {/if}

  {#if $$slots.hint}
    <div class="hint">
      <slot name="hint" />
    </div>
  {/if}
</label>
