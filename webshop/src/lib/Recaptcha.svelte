<script lang="ts">
  import { RecaptchaVerifier } from 'firebase/auth';
  import { onMount, onDestroy } from 'svelte';
  import {auth} from './utils/firebase';

  export let verify: (() => Promise<string>) | null = null;

  let recpatchaVerifier: RecaptchaVerifier;
  let created = false;

  onMount(() => {
    // @ts-ignore
    if (window.recaptchaVerify) {
      return;
    }

    recpatchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', { size: 'invisible' });

    recpatchaVerifier.render();

    verify = () => recpatchaVerifier.verify();

    // @ts-ignore
    window.recaptchaVerify = verify;
    created = true;
  });

  onDestroy(() => {
    if (created) {
      recpatchaVerifier.clear();

      // @ts-ignore
      delete window.recaptchaVerify;
    }
  });
</script>

<div id="recaptcha" />
