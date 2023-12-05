<script lang="ts">
  import {alertWrapper} from '$lib/utils/alert-wrapper';
  import {goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {auth} from '$lib/utils/firebase';
  import {applyActionCode, checkActionCode} from 'firebase/auth';
  import {onMount} from 'svelte';

  onMount(async () => {
    let oobCode: string;

    const { searchParams } = $page.url;

    if (searchParams.has('oobCode')) {
      oobCode = searchParams.get('oobCode') as string;
    } else {
      goto('/dashboard');
      return;
    }

    async function process() {
      await checkActionCode(auth, oobCode);
      await applyActionCode(auth, oobCode);
    }

    await alertWrapper(
      process(),
      'Email verified successfully.',
      'There was a problem verifying your email. Please try again.',
      () => {
        goto('/dashboard');
      }
    );

		goto('/dashboard');
  });
</script>

<div class="loader">
  <div class="loader-inner" />
</div>

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
