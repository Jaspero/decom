<script lang="ts">
    import { fly } from 'svelte/transition';
    import { clickOutside } from './utils/click-outside';

    let x = 0;
    let y = 0;
    let clickedOnRight = false;
    let dropdown: boolean | null = null;

    function handleClick(event: any) {
        const elementRect = event.currentTarget.getBoundingClientRect();
        clickedOnRight = elementRect.left >= window.innerWidth / 2;
        x = clickedOnRight ? window.innerWidth - elementRect.left : elementRect.right;
        y = elementRect.top;
        dropdown = true;
    }
</script>

<button
        class="dropdown-button"
        class:loading
        class:disabled
        {type}
        {name}
        {form}
        {disabled}
        {id}
        on:click={handleClick}
>
    {#if loading}
        <Loader />
    {:else}
        {#if $$slots.prefix && variant !== 'icon'}
        <span class="prefix">
          <slot name="prefix" />
        </span>
        {/if}
        <slot />
        {#if $$slots.suffix && variant !== 'icon'}
        <span class="suffix">
          <slot name="suffix" />
        </span>
        {/if}
    {/if}
</button>

{#if dropdown}
    <div class="z-10 fixed top-0 left-0 w-screen h-screen bg-transparent" />
    <div
            class="z-20 fixed flex flex-col bg-white shadow"
            style="top: {y}px; {clickedOnRight ? 'right' : 'left'}: {Math.abs(x)}px;"
            transition:fly={{ y: -20, duration: 300 }}
            use:clickOutside
            on:click_outside={() => (dropdown = false)}
    >
        <slot name="dropdown" />
        <!--TODO: add closing after clicking on a button inside-->
    </div>
{/if}