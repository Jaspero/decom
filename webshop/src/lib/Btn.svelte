<script lang="ts">
    export let label = 'Add label attribute';
    export let variant: 'filled' | 'stroked' | 'ghost' | 'icon' = 'filled';
    export let color: 'primary' | 'accent' | 'warn' | 'error' = 'primary';

    /* Anchor */
    export let href = '';
    export let target = '';
    export let rel = '';
    export let download = '';

    /* Button */
    export let disabled = false;
    export let loading = false;
    export let form = '';

    /* Other */
    let bindingElement;

    const rippleExpand = [
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
    ];

    const rippleTiming = {
        duration: 350,
        iterations: 1
    };

    function ripple(event) {
        const rect = bindingElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const width = rect.width;

        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.top = `${y}px`;
        ripple.style.left = `${x}px`;
        ripple.style.width = `${width}px`;
        ripple.style.height = `${width}px`;
        ripple.style.transform = `translate(-50%, -50%) scale(0)`;
        ripple.style.opacity = `1`;
        ripple.style.background = 'var(--ripple-color)';
        ripple.style.borderRadius = '50%';

        this.appendChild(ripple);
        ripple.animate(rippleExpand, rippleTiming);

        setTimeout(() => {
            ripple.remove();
        }, 350);
    }

    $: properties = {
        class: [
            'button',
            variant == 'filled' && 'variant-filled',
            variant == 'stroked' && 'variant-stroked',
            variant == 'ghost' && 'variant-ghost',
            variant == 'icon' && 'variant-icon',
            color == 'primary' && 'color-primary',
            color == 'secondary' && 'color-secondary',
            color == 'error' && 'color-error',
            color == 'warn' && 'color-warn'
        ]
        .filter(Boolean)
        .join(' ')
    };
</script>

{#if href}
    <a {...properties} {disabled} {href} {target} {rel} {download} on:click={ripple} bind:this={bindingElement}>
        {@html label}
    </a>
{:else}
    <button {...properties} class:loading {disabled} {form} name={label} on:click={ripple} bind:this={bindingElement}>
        {@html label}
    </button>
{/if}

<style lang="postcss">
    .button {
        @apply relative px-4 py-2 transition-all overflow-hidden;
        border: 1px solid transparent;
        border-radius: var(--border-radius-base);
    }

    .button:not(.variant-icon) {
        @apply px-4 py-2;
    }

    .button:not(.variant-filled, .variant-stroked, .variant-ghost) {
        @apply w-10 h-10;
    }

    /* Button - Filled */
    .button.variant-filled.color-primary {
        background-color: var(--primary);
        color: var(--primary-contrast)
    }
    .button.variant-filled.color-secondary {
        background-color: var(--secondary);
        color: var(--secondary-contrast)
    }
    .button.variant-filled.color-warn {
        background-color: var(--warn);
        color: var(--warn-contrast)
    }
    .button.variant-filled.color-error {
        background-color: var(--error);
        color: var(--error-contrast)
    }

    /* Button - Stroked */
    .button.variant-stroked.color-primary {
        border-color: var(--primary);
        color: var(--primary)
    }
    .button.variant-stroked.color-secondary {
        border-color: var(--secondary);
        color: var(--secondary)
    }
    .button.variant-stroked.color-warn {
        border-color: var(--warn);
        color: var(--warn)
    }
    .button.variant-stroked.color-error {
        border-color: var(--error);
        color: var(--error)
    }

    /* Button - Ghost */
    .button.variant-ghost.color-primary {
        color: var(--primary)
    }
    .button.variant-ghost.color-secondary {
        color: var(--secondary)
    }
    .button.variant-ghost.color-warn {
        color: var(--warn)
    }
    .button.variant-ghost.color-error {
        color: var(--error)
    }
</style>
