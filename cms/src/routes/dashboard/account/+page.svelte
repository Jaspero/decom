<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import Dialog from '$lib/Dialog.svelte';
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Loader from '$lib/Loader.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth, authenticated, user } from '$lib/utils/firebase';
  import {
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    multiFactor,
    sendEmailVerification,
    updatePassword,
    type User
  } from 'firebase/auth';
  import { onMount } from 'svelte';

  let passwordDialog = false;

  const newPass = {
    password: '',
    passwordConfirm: ''
  };
  let showPassword = false;
  let noMatch = false;

  let recaptchaVerifier: RecaptchaVerifier;
  let openRemoveMfaDialog = false;
  let verificationId: string;
  let phoneCode: string;
  let phoneNumber: string;
  let disableBtn = false;
  let openMfaComponent = false;
  let connectLoader = false;
  let confirmLoader = false;
  let userEnrolled = false;
  let enrolledFactors: any;
  let getMethods = true;

  $: disableBtn = !phoneNumber;

  $: if (auth && getMethods) {
    getEnrolledMfaMethods();
    userEnrolled = enrolledFactors.length > 0;
  }

  function getEnrolledMfaMethods() {
    enrolledFactors = multiFactor(auth.currentUser as User).enrolledFactors;
    getMethods = false;
    return;
  }

  async function changePassword() {
    if (newPass.password === '' || newPass.passwordConfirm === '') {
      return;
    }

    if (newPass.password !== newPass.passwordConfirm) {
      noMatch = true;
      return;
    } else {
      noMatch = false;
    }

    try {
      await alertWrapper(
        updatePassword(auth.currentUser as User, newPass.password),
        'Password changed successfully',
        'Error',
        () => console.log('Error')
      ).then(() => {
        passwordDialog = false;
      });
    } catch (e) {
      console.error(e);
    }
  }

  async function disableMfa() {
    const user = auth.currentUser as User;

    if (user) {
      await alertWrapper(
        multiFactor(user).unenroll(enrolledFactors[0]),
        '2FA disabled successfully',
        'Error',
        () => console.log('error')
      );
      userEnrolled = false;
      openRemoveMfaDialog = false;
    }
  }

  async function openMfa() {
    connectLoader = true;

    const session = await multiFactor($authenticated as User).getSession();

    const phoneInfoOptions = {
      phoneNumber,
      session
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);

    await alertWrapper(
      phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier),
      'Verification code sent successfully',
      'Error',
      async (error) => {
        if (error.code === 'auth/unverified-email') {
          await alertWrapper(
            sendEmailVerification($authenticated as User, {
              url: `${location.origin}/verify-email`
            }),
            'We sent an email verification link to your email address. Please verify your email before enabling MFA.',
            'Error',
            () => {
              connectLoader = false;
            }
          );
        }

        connectLoader = false;
      }
    ).then((res) => {
      verificationId = res;
    });
    openMfaComponent = true;
    connectLoader = false;
  }

  async function verifyPhone() {
    confirmLoader = true;
    const cred = PhoneAuthProvider.credential(verificationId, phoneCode);
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

    await alertWrapper(
      multiFactor($authenticated as User).enroll(multiFactorAssertion, phoneNumber),
      '2FA enabled successfully',
      'Error',
      () => (confirmLoader = false)
    );

    openMfaComponent = false;
    userEnrolled = true;
    getMethods = true;
    confirmLoader = false;
  }

  onMount(() => {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
  });
</script>

{#if $user}
  <Grid>
    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Account security</svelte:fragment>

        <p class="mb-4">Time to improve account security by changing your password?</p>

        <Button variant="outlined" color="primary" on:click={() => (passwordDialog = true)}
          >Change your password
        </Button>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Connect 2FA</svelte:fragment>
        {#if userEnrolled}
          <p>2FA is <b>enabled</b>, it is recommended to keep this feature enabled.</p>
          <div class="mt-3">
            <Button variant="filled" color="warn" on:click={() => (openRemoveMfaDialog = true)}>
              Disable 2FA
            </Button>
          </div>
        {:else}
          <Field label="Phone Number" placeholder="+123456789123" bind:value={phoneNumber} />
          <div class="mb-4" />
          <p>2FA is <b>disabled</b>, it is recommended to enable this feature.</p>
          <div class="mb-4" />
          <Button variant="filled" color="primary" disabled={disableBtn} on:click={openMfa}>
            {#if connectLoader}
              <Loader />
            {:else}
              Connect 2FA
            {/if}
          </Button>
        {/if}
      </Card>
    </GridCol>
  </Grid>
{/if}

<div id="recaptcha-container-id" />

<Dialog bind:open={openMfaComponent} fixed>
  <form on:submit|preventDefault={verifyPhone}>
    <p class="mb-4">We have sent you a 6-digit verification code to your phone number.</p>
    <Field label="2FA Verification Code:" bind:value={phoneCode} />
    <div id="confirm-button">
      <Button variant="filled" color="primary" type="submit">
        {#if confirmLoader}
          <Loader />
        {:else}
          Confirm
        {/if}
      </Button>
    </div>
  </form>
</Dialog>

<Dialog bind:open={openRemoveMfaDialog}>
  <slot slot="title">Are you sure you want to disable your 2FA?</slot>

  <div>Removing 2FA will make your account less secure.</div>

  <slot slot="actions">
    <Button
      on:click={(e) => {
        e.preventDefault();
        disableMfa();
      }}
      variant="filled"
      color="warning"
      type="submit"
      >Confirm
    </Button>
  </slot>
</Dialog>

<Dialog bind:open={passwordDialog}>
  <slot slot="title">Editing password</slot>

  <form class="flex flex-col gap-4" on:submit|preventDefault={changePassword}>
    {#if showPassword}
      <Field required label="Password" type="text" bind:value={newPass.password} />
    {:else}
      <Field required label="Password" type="password" bind:value={newPass.password} />
    {/if}
    {#if showPassword}
      <Field required label="Repeat password" type="text" bind:value={newPass.passwordConfirm} />
    {:else}
      <Field
        required
        label="Repeat password"
        type="password"
        bind:value={newPass.passwordConfirm}
      />
    {/if}
    <div>
      <Button type="button" color="primary" on:click={() => (showPassword = !showPassword)}
        >{showPassword ? 'Hide' : 'Show'} password
      </Button>
    </div>
    <div style="color: red; display: {noMatch ? 'block' : 'none'}">Passwords are not matching.</div>
  </form>

  <slot slot="actions">
    <Button variant="filled" color="primary" type="submit" form="password_form">Save</Button>
  </slot>
</Dialog>

<svelte:head>
  <title>Account - Shop CMS</title>
</svelte:head>

<style>
  #confirm-button {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
