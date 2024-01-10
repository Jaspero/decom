<script lang="ts">
    import { db, auth } from '$lib/utils/firebase';
    import { slide } from 'svelte/transition';
    import { doc, onSnapshot } from 'firebase/firestore';
    import { onMount } from 'svelte';
    import { lastPublishedOn } from './stores/last-published-on.store';
    import { clickOutside } from './utils/click-outside';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import AccountCircle from "svelte-material-icons/AccountCircle.svelte";
    import Button from "$lib/Button.svelte";

    export let links: Array<{
        label: string;
        icon: string;
        href?: string;
        links?: Array<{
            label: string;
            href: string;
        }>;
        checked?: boolean;
    }>;

    let dropdown = false;
    let menu = false;

    $: pathname = $page.url.pathname;

    onMount(() => {
        onSnapshot(doc(db, 'settings', 'status'), (doc) => {
            const { lastPublished } = doc.data() || {};

            if (lastPublished) {
                lastPublishedOn.set(lastPublished);
            }
        });

        links = links.map((link) => {
            if (link.links) {
                return {
                    ...link,
                    checked: false
                };
            }
            return link;
        });
    });
</script>

<aside>
    {#if links}
        <nav>
            {#each links as link}
                <div class="border-t border-t-black/10 first:border-t-0 last:border-b last:border-b-black/10">
                    {#if link.href}
                        <a class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all" href={link.href} class:active={pathname === link.href}>
                            {#if link.icon}
                                <span class="material-symbols-outlined">{link.icon}</span>
                            {/if}
                            {link.label}
                        </a>
                    {:else if link.links}
                        <button class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all" on:click={() => {link.checked = !link.checked;}}>
                            {#if link.icon}
                                <span class="material-symbols-outlined">{link.icon}</span>
                            {/if}
                            <span class="flex-1 text-left">{link.label}</span>
                            <img
                                    class="w-6 h-6 transition-transform duration-500"
                                    class:-scale-y-100={link.checked}
                                    src="/images/expand_more.svg"
                                    alt={link.checked ? 'Expand less' : 'Expand more'}
                            />
                        </button>


                        {#if link.checked}
                            <div class="flex flex-col px-4" transition:slide>
                                {#each link.links as inner}
                                    <a class="flex gap-2 hover:underline py-2 hover:translate-x-2 transition-all" href={inner.href} class:active={pathname === inner.href}>
                                        <span class="w-6 h-6"></span>
                                        {inner.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    {/if}
                </div>
            {/each}
        </nav>
    {/if}

    <footer class="border-t border-t-black/10">
        <button class="flex gap-2 w-full px-4 py-3 font-bold hover:bg-black/5 transition-all" on:click={() => {dropdown = true;}}>
            <span class="material-symbols-outlined">account_circle</span>
            <span class="flex-1 text-left">Account</span>
            <span class="material-symbols-outlined">chevron_right</span>
        </button>

        {#if dropdown}
            <div class="absolute bottom-full right-4 bg-white shadow flex flex-col whitespace-nowrap divide-y"
                 use:clickOutside on:click_outside={() => (dropdown = false)} transition:slide>
                <a class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer" href="/dashboard/account" on:click={() => {dropdown = false}}>Account</a>
                <button class="px-4 py-3 text-sm hover:bg-black/5 transition-colors cursor-pointer" on:click={() => {
                    auth.signOut();
                    goto('/');
                }}>Sign out</button>
            </div>
        {/if}
    </footer>
</aside>

<style lang="postcss">
    aside {
        @apply fixed top-16 flex flex-col w-[256px] h-[calc(100%-4rem)] shadow;
        background-color: var(--sidebar)
    }
    nav {
        @apply flex-1 overflow-y-auto;
    }
    footer {
        @apply sticky bottom-0;
    }
</style>
