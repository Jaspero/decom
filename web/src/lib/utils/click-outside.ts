import type { ActionReturn } from 'svelte/action';

interface Return {
  'on:click_outside': () => void;
}

/**
 * Dispatch event on click outside of node
 * @example
 * <div use:clickOutside on:click_outside={handleClickOutside}>Click outside me!</div>
 **/

export function clickOutside(node: HTMLElement): ActionReturn<{}, Return> {
  function dispatch() {
    node.dispatchEvent(new CustomEvent('click_outside', node));
  }

  function handleClick(event: MouseEvent) {
    if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
      dispatch();
    }
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      dispatch();
    }
  }

  window.addEventListener('keydown', handleEscape, true);
  document.addEventListener('mousedown', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('mousedown', handleClick, true);
      window.removeEventListener('keydown', handleEscape, true);
    }
  };
}
