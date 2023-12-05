<script lang="ts">
  import '../app.postcss';
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import '$lib/utils/firebase';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';

  let loading = false;

  beforeNavigate(() => {
    loading = true;
  });

  afterNavigate(() => {
    loading = false;
  });
</script>

{#if loading}
  <div class="loader">
    <div class="loader-inner" />
  </div>
{/if}

<slot />

<style lang="postcss">
  @keyframes rotating {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  @keyframes delay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    height: 4px;
    background-color: #e1ebe6;
    z-index: 21;
    animation-delay: 5s;
    animation: delay 0.3s linear;
    animation-fill-mode: forwards;
  }

  .loader-inner {
    position: absolute;
    width: 30%;
    height: 100%;
    background: #09371f;
    animation: rotating 2s linear infinite;
  }
</style>
