<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import { auth, authenticated } from '$lib/utils/firebase';
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
  import GridCol from '$lib/GridCol.svelte';
  import Loader from '../../lib/Loader.svelte';

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

  $: if ($authenticated) {
    goto('/dashboard');
  }

  async function submit() {
    const { searchParams } = $page.url;

    email = (email || '').toLowerCase().trim();

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
    }, 2000);
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
      searchParams.has('forward')
        ? decodeURIComponent(searchParams.get('forward') as string)
        : '/'
    );
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(	
			auth,		
      'recaptcha-container-id',
      {
        size: 'invisible'
      },
    );
  });
</script>

<div id="recaptcha-container-id" />
<div class="flex ai-center">
  <div class="grid p-y-xl">
    {#if showCodeInput}
      <GridCol>
        <Button color="error" href="/login" on:click={back}
          >Back to login</Button
        >
        <p>We have sent you a 6-digit verification code to: <b>{resolver.hints[0].phoneNumber}</b
          ></p>
      
        <Field required label="MFA Verification Code:" type="text" bind:value={codeInput} />
        <Button color="primary" on:click={confirm}>
          {#if confirmLoader}
            <Loader />
          {:else}
            Confirm and sign in
          {/if}
        </Button>
        <div style="margin-bottom: 340px;" />
      </GridCol>
    {:else}
      <div class="col-6 col-m-8 col-s-6 col-xs-12">
        <p>Login</p>

        <form class="grid nogutter" on:submit|preventDefault={submit}>
          <div class="col-12">
            <div style="max-width: 400px;">
              <Field
                label="Email"
                type="email"
                bind:value={email}
                required
              />
            </div>
          </div>

          <div class="col-12">
            <div style="max-width: 400px;">
              <Field
                label="Password"
                {type}
                bind:value={password}
								minlength={6}
                required
              />
            </div>
          </div>

          <div class="col-7 col-xs-5" />

          <div class="col-12">
            <button class="button-reset" type="button" on:click={toggleVisible}>
              {#if type === 'password'}
                Show password
              {:else}
                Hide password
              {/if}
            </button>
          </div>

          <div class="col-12">
            <Button id="login-password" type="submit" {loading}>
              Sign In
            </Button>
						<button type="button" on:click={loginGoogle} class="googleButton" />
          </div>

          <div class="flex fw-wrap w-full">
            <div class="flex" style="gap: .25rem;">
              <p>Forgot your password?</p>
              <button class="button-reset" type="button" on:click={() => (rDialog = true)}>
                Reset password
              </button>
            </div>
          </div>
        </form>
      </div>
    {/if}
  </div>

</div>

<Dialog bind:showing={rDialog}>
  <p>Forgotten your password?</p>
  <form on:submit|preventDefault={resetPassword}>
    <Field
      label="Email"
      type="email"
      placeholder="your@email.com"
      bind:value={rEmail}
      required
    />
    <Button type="submit" loading={rLoading}>Reset password</Button>
  </form>
</Dialog>

<Recaptcha bind:verify={recaptchaVerify} />

<svelte:head>
  <title>Sign In - Jaspero</title>
  <meta name="description" content="Enter your credentials to sign in." />
</svelte:head>

<style>
  .googleButton {
    background-image: url('/images/google.png');
    width: 382px;
    height: 92px;
    transform: scale(0.46);
  }
</style>