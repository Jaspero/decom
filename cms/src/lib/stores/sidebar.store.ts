import { writable } from 'svelte/store';

const initialValue = typeof window !== 'undefined' && window.innerWidth > 767;

export const sidebarStore = writable(initialValue);

if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    sidebarStore.set(window.innerWidth > 767);
  });
}
