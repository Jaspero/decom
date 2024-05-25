<script lang="ts">
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import Button from '$lib/Button.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import { goto } from '$app/navigation';
  import {
    getMultiFactorResolver,
    GoogleAuthProvider,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup
  } from 'firebase/auth';
  import { auth } from '$lib/utils/firebase';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';
  import { onMount } from 'svelte';
  import Loader from '$lib/Loader.svelte';
  import { CONFIG } from '../lib/consts/config.const';

  const redirectLink = '/dashboard';

  let loading = false;
  let email = '';
  let password = '';
  let resetLoading = false;
  let rEmail = '';
  let showPassword = false;
  let resetPasswordDialog: boolean = false;
  let recaptchaVerifier: any;
  let showCodeInput = false;
  let confirmLoader = false;
  let codeInput: string;
  let resolver: any;
  let verId: string;

  async function login() {
    loading = true;

    await alertWrapper(
      signInWithEmailAndPassword(auth, email, password),
      'Login successful',
      (e: any) => {
        if (e.code == 'auth/multi-factor-auth-required') {
          resolver = getMultiFactorResolver(auth, e);
          if (resolver.hints) {
            const phoneInfoOptions = {
              multiFactorHint: resolver.hints[0],
              session: resolver.session
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            return phoneAuthProvider
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
      goto(redirectLink);
    }, 500);
  }

  async function resetPassword() {
    rEmail = rEmail.trim().toLowerCase();

    if (!rEmail) {
      return;
    }

    resetLoading = true;

    sendPasswordResetEmail(auth, rEmail, { url: `${location.origin}/reset-password` }).finally(
      () => {
        renderAlert({
          state: 'success',
          title: 'Success',
          message: 'A password reset link has been sent to your email.'
        });

        rEmail = '';
        resetLoading = false;
      }
    );
  }

  async function loginGoogle() {
    await alertWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Login successful',
      (e: any) => {
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
              });
          }
        }
      }
    );

    setTimeout(() => {
      goto(redirectLink);
    }, 500);
  }

  async function confirm() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verId, codeInput);

    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await alertWrapper(
      resolver.resolveSignIn(multiFactorAssertion),
      'Login successful',
      '',
      () => (confirmLoader = false)
    );

    setTimeout(() => {
      goto(redirectLink);
    }, 1000);
  }

  function back() {
    showCodeInput = false;
    codeInput = '';
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
  });
</script>

<div id="recaptcha-container-id" />
<main class="flex items-center bg-white">
  <div class="flex flex-1">
    <Grid>
      {#if showCodeInput}
        <GridCol span="12" spanxl="6">
          <form on:submit|preventDefault={confirm}>
            <Button variant="outlined" color="warn" href="/" on:click={back}>Back to login</Button>
            <div class="mt-12 mb-24 w-full">
              We have sent you a 6-digit verification code to:
              <b>{resolver.hints[0].phoneNumber}</b>
            </div>
            <Field required label="2FA Verification Code:" type="text" bind:value={codeInput} />
            <div class="m-5" />
            <Button variant="filled" color="primary" type="submit">
              {#if confirmLoader}
                <Loader />
              {:else}
                Confirm and sign in
              {/if}
            </Button>
            <div style="margin-bottom: 340px;" />
          </form>
        </GridCol>
      {:else}
        <GridCol span="12">
          <div class="flex flex-col gap-4">
            <SectionTitle>Prijava</SectionTitle>
            <form class="flex flex-col gap-4 border-b pb-8" on:submit={login}>
              <Field required label="Email" type="email" bind:value={email} />
              {#if showPassword}
                <Field required label="Lozinka" type="text" bind:value={password}>
                  <button
                    slot="hint"
                    type="button"
                    class="show-password"
                    on:click={() => (showPassword = !showPassword)}
                  >
                    Sakri lozinku
                  </button>
                </Field>
              {:else}
                <Field required label="Password" type="password" bind:value={password}>
                  <button
                    slot="hint"
                    type="button"
                    class="show-password"
                    on:click={() => (showPassword = !showPassword)}
                  >
                    Pokaži lozinku
                  </button>
                </Field>
              {/if}
              <div class="flex items-center gap-4">
                <Button variant="filled" color="secondary" type="submit" {loading}>Prijava</Button>
                <button class="gsi-material-button" type="button" on:click={loginGoogle}>
                  <div class="gsi-material-button-state" />
                  <div class="gsi-material-button-content-wrapper">
                    <div class="gsi-material-button-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        style="display: block;"
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                        <path fill="none" d="M0 0h48v48H0z" />
                      </svg>
                    </div>
                    <span class="gsi-material-button-contents">Prijava sa google</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div class="mt-4">
            <p class="mb-2">Zaboravili ste lozinku?</p>
            <button
              type="button"
              class="show-password"
              on:click={() => (resetPasswordDialog = true)}
              >Resetiraj lozinku
            </button>
          </div>
        </GridCol>
      {/if}
    </Grid>
  </div>
  <div class="hidden lg:flex aside relative">
    <img src="/brand/logo-white.svg" alt="Logo" />

    <div class="absolute bottom-1 right-1 bg-white">
      <img src="/images/eu.png" class="w-[200px]" alt="Financirano od EU" />
    </div>
  </div>
</main>
<Dialog bind:open={resetPasswordDialog}>
  <slot slot="title">Zaboravili ste lozinku?</slot>
  <Field label="Email" type="email" placeholder="your@email.com" required bind:value={rEmail} />

  <slot slot="actions">
    <Button
      variant="filled"
      color="secondary"
      type="submit"
      loading={resetLoading}
      on:click={resetPassword}
      >Resetiraj lozinku
    </Button>
  </slot>
</Dialog>

<svelte:head>
  <title>Prijava - {CONFIG.title}</title>
</svelte:head>

<style>
  main {
    max-width: 1000px;
    margin: 100px auto 0;
  }

  .aside {
    background-color: var(--primary-color);
    flex: 1;
    justify-content: center;
    height: 528px;
  }

  .aside img {
    max-width: 300px;
  }

  .gsi-material-button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: WHITE;
    background-image: none;
    border: 1px solid #747775;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #1f1f1f;
    cursor: pointer;
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
    height: 40px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-align: center;
    -webkit-transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
    transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    max-width: 400px;
    min-width: min-content;
  }

  .gsi-material-button .gsi-material-button-icon {
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
  }

  .gsi-material-button .gsi-material-button-content-wrapper {
    -webkit-align-items: center;
    align-items: center;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .gsi-material-button .gsi-material-button-contents {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .gsi-material-button .gsi-material-button-state {
    -webkit-transition: opacity 0.218s;
    transition: opacity 0.218s;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .gsi-material-button:disabled {
    cursor: default;
    background-color: #ffffff61;
    border-color: #1f1f1f1f;
  }

  .gsi-material-button:disabled .gsi-material-button-contents {
    opacity: 38%;
  }

  .gsi-material-button:disabled .gsi-material-button-icon {
    opacity: 38%;
  }

  .gsi-material-button:not(:disabled):active .gsi-material-button-state,
  .gsi-material-button:not(:disabled):focus .gsi-material-button-state {
    background-color: #303030;
    opacity: 12%;
  }

  .gsi-material-button:not(:disabled):hover {
    -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  .gsi-material-button:not(:disabled):hover .gsi-material-button-state {
    background-color: #303030;
    opacity: 8%;
  }

  .show-password {
    font-weight: 300;
    text-decoration: underline;
  }
</style>
