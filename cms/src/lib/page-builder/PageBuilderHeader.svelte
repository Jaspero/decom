<script lang="ts">
  import { confirmation } from '../utils/confirmation';
  import { DEVICES } from './devices.const';

  export let grapesInstance: any;
  export let activeDevice = DEVICES[0].id;
  export let gridVisible = true;

  function setDevice(device: string) {
    grapesInstance.setDevice(device);
    activeDevice = device;
  }

  function toggleGrid() {
    if (gridVisible) {
      grapesInstance.Commands.stop('core:component-outline');
    } else {
      grapesInstance.Commands.run('core:component-outline');
    }

    gridVisible = !gridVisible;
  }

  function clearPage() {
    confirmation(async ({ confirmed }) => {
      if (!confirmed) {
        return;
      }

      grapesInstance.runCommand('core:canvas-clear');
    }, 'Clear the page?');
  }
</script>

<header>
  <div>
    <slot />
  </div>
  <div />
  <div>
    <div>
      {#each DEVICES as device}
        <button
          title={device.id}
          class="material-symbols-outlined"
          class:active={activeDevice === device.id}
          on:click={() => setDevice(device.id)}>{device.icon}</button
        >
      {/each}
    </div>
    <div>
      <button
        title="Toggle Grid"
        class="material-symbols-outlined"
        class:active={gridVisible}
        on:click={toggleGrid}>select_all</button
      >
      <button
        title="Undo"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('core:undo')}>undo</button
      >
      <button
        title="Redo"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('core:redo')}>redo</button
      >
      <button
        title="View Code"
        class="material-symbols-outlined"
        on:click={() => grapesInstance.runCommand('export-template')}>code</button
      >
      <button title="Clear Page" class="material-symbols-outlined" on:click={clearPage}>
        delete
      </button>
    </div>
  </div>
</header>

<style lang="postcss">
  header {
    @apply bg-white border-b;
    height: 55px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  header > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .material-symbols-outlined {
    @apply hover:bg-primary/[8%] duration-200;
    padding: 0.2rem;
  }

  .material-symbols-outlined.active {
    @apply bg-primary/[8%] text-secondary;
  }
</style>
