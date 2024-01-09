<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import { auth } from '$lib/utils/firebase';
  import Recaptcha from '$lib/Recaptcha.svelte';
  import { notificationWrapper } from '$lib/notification/notification';
  import {
    RecaptchaVerifier,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    getMultiFactorResolver,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    signInWithPopup,
    GoogleAuthProvider
  } from 'firebase/auth';
  import Dialog from '$lib/Dialog.svelte';
  import { onMount } from 'svelte';
  import { formatEmail } from '$lib/utils/format-emails';

  let email = '';
  let password = '';
  let loading = false;
  let type: 'password' | 'text' = 'password';
  let recaptchaVerify: () => Promise<string>;

  let rEmail = '';
  let rLoading = false;
  let rDialog = false;

  let recaptchaVerifier: any;
  let showCodeInput = false;
  let confirmLoader = false;
  let codeInput: string;
  let resolver: any;
  let verId: string;

  async function submit() {
    const { searchParams } = $page.url;

    email = formatEmail(email);

    if (loading) {
      return;
    }

    loading = true;

    try {
      await recaptchaVerify();

      await notificationWrapper(
        signInWithEmailAndPassword(auth, email, password),
        'Login successful',
        (e) => {
          if (e.code == 'auth/multi-factor-auth-required') {
            resolver = getMultiFactorResolver(auth, e);
            if (resolver.hints) {
              const phoneInfoOptions = {
                multiFactorHint: resolver.hints[0],
                session: resolver.session
              };
              const phoneAuthProvider = new PhoneAuthProvider(auth);

              phoneAuthProvider
                .verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
                .then((verificationId) => {
                  verId = verificationId;
                  showCodeInput = true;
                  loading = false;
                })
                .catch((error) => {
                  console.log('second error', error);
                });

              return '';
            }
          }

          return '';
        },
        () => (loading = false)
      );

      goto(
        searchParams.has('forward')
          ? decodeURIComponent(searchParams.get('forward') as string)
          : '/'
      );
    } catch {
      password = '';
    }

    loading = false;
  }

  async function loginGoogle() {
    const { searchParams } = $page.url;

    loading = true;

    await notificationWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Login successful',
      (e) => {
        if (e.code == 'auth/multi-factor-auth-required') {
          resolver = getMultiFactorResolver(auth, e);
          if (resolver.hints) {
            const phoneInfoOptions = {
              multiFactorHint: resolver.hints[0],
              session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            phoneAuthProvider
              .verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
              .then((verificationId) => {
                verId = verificationId;
                showCodeInput = true;
                loading = false;
              })
              .catch((error) => {
                console.log('second error', error);
              });
          }
        }
      },
      () => (loading = false)
    );

    setTimeout(() => {
      goto(
        searchParams.has('forward')
          ? decodeURIComponent(searchParams.get('forward') as string)
          : '/'
      );
    }, 1000);
  }

  async function resetPassword() {
    rEmail = rEmail.trim().toLowerCase();

    if (!rEmail) {
      return;
    }

    rLoading = true;

    try {
      await recaptchaVerify();

      await notificationWrapper(
        sendPasswordResetEmail(auth, rEmail, { url: `${location.origin}/reset-password` }),
        'A password reset link has been sent to your email.'
      );

      rDialog = false;
    } catch (e) {
      console.error(e);
    }

    rLoading = false;
  }

  function toggleVisible() {
    type = type === 'password' ? 'text' : 'password';
  }

  function back() {
    showCodeInput = false;
    codeInput = '';
  }

  async function confirm() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verId, codeInput);

    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await notificationWrapper(
      resolver.resolveSignIn(multiFactorAssertion),
      'Login successful',
      '',
      () => (confirmLoader = false)
    );

    const { searchParams } = $page.url;
    goto(
      searchParams.has('forward') ? decodeURIComponent(searchParams.get('forward') as string) : '/'
    );
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
  });
</script>

<div class="max-w-7xl mx-auto p-12 flex justify-center items-center">
  <div id="recaptcha-container-id" />

  {#if showCodeInput}
    <div>
      <Button href="/login" on:click={back}>Back to login</Button>
      <p>
        We have sent you a 6-digit verification code to: <!--<b>{resolver.hints[0].phoneNumber}</b>-->
      </p>

      <Field required label="MFA Verification Code:" type="text" bind:value={codeInput} />

      <Button loading={confirmLoader} on:click={confirm}>Confirm and sign in</Button>
    </div>
  {:else}
    <form on:submit|preventDefault={submit} class="shadow-xl p-8 rounded">
      <div class="flex flex-col gap-4">
        <Field label="Email" type="email" bind:value={email} autocomplete="email" required />
        <Field
          label="Password"
          {type}
          bind:value={password}
          autocomplete="current-password"
          required
        />
          <Button variant="outlined" type="button" on:click={toggleVisible}>{type === 'password' ? 'Show password' : 'Hide password'}</Button>
      </div>

      <div class="flex flex-wrap gap-4 mt-4">
        <Button type="submit" {loading}>Sign in</Button>
        <button type="button" on:click={loginGoogle} class="googleButton" name="Sign in with Google">
          Sign in with google
        </button>
      </div>

      <p class="mt-8 mb-2">Forgot your password?</p>
      <Button on:click={() => {rDialog = true;}}>Reset password</Button>
    </form>
  {/if}
</div>

<Dialog bind:showing={rDialog}>
  <h3 class="text-3xl mb-4">Forgotten your password?</h3>

  <form on:submit|preventDefault={resetPassword}>
    <Field label="Email" type="email" placeholder="your@email.com" bind:value={rEmail} required />

    <div class="mt-4">
      <Button type="submit" loading={rLoading}>Reset password</Button>
    </div>
  </form>
</Dialog>

<Recaptcha bind:verify={recaptchaVerify} />

<svelte:head>
  <title>Sign In - Jaspero</title>
  <meta name="description" content="Enter your credentials to sign in." />
</svelte:head>
