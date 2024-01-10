<script lang="ts">
  import {onMount, tick} from "svelte";

  export let variant: 'filled' | 'outlined' | 'ghost' | 'underlined' | 'icon' = 'filled';
  export let color: 'primary' | 'secondary' | 'warn' | 'error' = 'primary';

  /* Anchor */
  export let href = '';
  export let target = '';
  export let rel = '';

  /* Button */
  export let disabled = false;
  export let loading = false;
  export let form = '';
  export let type: 'button' | 'submit' | 'reset' = 'button'

  /* Other */
  let containerElement;
  let bindingElement;
  let ariaLabel: string | null = null;

  const rippleExpand = [
    { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
    { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
  ];

  const rippleTiming = {
    duration: 600,
    iterations: 1,
  };

  function ripple(event) {
    const targetElement = event.target.closest('.button');
    if (!targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;

    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    ripple.style.width = `${width}px`;
    ripple.style.height = `${width}px`;
    ripple.style.background = 'var(--ripple-color)';
    ripple.style.borderRadius = '50%';

    targetElement.appendChild(ripple);
    ripple.animate(rippleExpand, rippleTiming);

    setTimeout(() => {
      ripple.remove();
    }, 590);
  }

  $: properties = {
    class: [
      'button',
      variant == 'filled' && 'variant-filled',
      variant == 'outlined' && 'variant-outlined',
      variant == 'ghost' && 'variant-ghost',
      variant == 'underlined' && 'variant-underlined',
      variant == 'icon' && 'variant-icon',
      color == 'primary' && 'color-primary',
      color == 'secondary' && 'color-secondary',
      color == 'error' && 'color-error',
      color == 'warn' && 'color-warn'
    ]
            .filter(Boolean)
            .join(' ')
  };

  function updateAriaLabel() {
    if (bindingElement) {
      ariaLabel = bindingElement.textContent.trim();
    }
  }

  function handleRippleEvent(event) {
    // Check if the clicked element is a button or a link with ripple
    ripple(event);
  }

  onMount(async () => {
    containerElement.addEventListener('click', handleRippleEvent);

    await tick() // Wait for DOM to update
    updateAriaLabel();
  })
</script>

<div bind:this={containerElement}>
  {#if href}
    <a {...properties}
       {href}
       {target}
       {rel}
       aria-label={ariaLabel}
       on:click
       bind:this={bindingElement}>
      <slot />
    </a>
  {:else}
    <button {...properties}
            class:loading
            {disabled}
            {form}
            {type}
            aria-label={ariaLabel}
            on:click
            bind:this={bindingElement}>
      <slot />
    </button>
  {/if}
</div>

<style lang="postcss">
  .button {
    @apply relative transition-all overflow-hidden;
    border-radius: var(--border-radius);
    font-size: .875rem;
  }

  .button:not(.variant-icon) {
    @apply px-[.875rem] py-[.375rem];
  }

  .button:not(.variant-filled, .variant-outlined, .variant-ghost, .variant-underlined) {
    @apply w-10 h-10;
  }

  /* Button - Filled */
  .button.variant-filled.color-primary {
    background-color: var(--primary-color);
    color: var(--primary-contrast-color);
  }
  .button.variant-filled.color-secondary {
    background-color: var(--secondary-color);
    color: var(--secondary-contrast-color);
  }
  .button.variant-filled.color-warn {
    background-color: var(--warn-color);
    color: var(--warn-contrast);
  }
  .button.variant-filled.color-error {
    background-color: var(--error-colors);
    color: var(--error-contrast);
  }

  /* Button - Outlined */
  .button.variant-outlined.color-primary {
    box-shadow: inset 0 0 0 var(--border-width) var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .button.variant-outlined.color-secondary {
    box-shadow: inset 0 0 0 var(--border-width) var(--secondary-color);
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }
  .button.variant-outlined.color-warn {
    box-shadow: inset 0 0 0 var(--border-width) var(--warn-color);
    border-color: var(--warn-color);
    color: var(--warn-color);
  }
  .button.variant-outlined.color-error {
    box-shadow: inset 0 0 0 var(--border-width) var(--error-color);
    border-color: var(--error-color);
    color: var(--error-color);
  }

  /* Button - Ghost */
  .button.variant-ghost.color-primary {
    color: var(--primary-color);
  }
  .button.variant-ghost.color-secondary {
    color: var(--secondary-color);
  }
  .button.variant-ghost.color-warn {
    color: var(--warn-color);
  }
  .button.variant-ghost.color-error {
    color: var(--error-color);
  }

  /* Button - Underlined */
  .button.variant-underlined {
    border-bottom-width: var(--border-width);
    border-bottom-style: solid;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .button.variant-underlined.color-primary {
    border-color: var(--primary-color);
  }
  .button.variant-underlined.color-secondary {
    border-color: var(--secondary-color);
  }
  .button.variant-underlined.color-warn {
    border-color: var(--warn-color);
  }
  .button.variant-underlined.color-error {
    border-color: var(--error-color);
  }
</style>
