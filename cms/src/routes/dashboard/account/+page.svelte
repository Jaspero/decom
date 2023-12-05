<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Card from '$lib/Card.svelte';
  import { COUNTRIES } from '$lib/consts/countries.const';
  import { GENDERS } from '$lib/consts/genders.const';
  import Dialog from '$lib/Dialog.svelte';
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import Select from '$lib/Select.svelte';
  import Table from '$lib/Table.svelte';
  import TableCell from '$lib/TableCell.svelte';
  import TableRow from '$lib/TableRow.svelte';
  import Loader from '$lib/Loader.svelte';
  import { alertWrapper } from '$lib/utils/alert-wrapper';
  import { auth, authenticated, db, user } from '$lib/utils/firebase';
  import {
    multiFactor,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    sendEmailVerification,
    updatePassword,
    type User
  } from 'firebase/auth';
  import { doc, setDoc } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import type { FirestoreUser } from '$lib/interfaces/firestore-user.interface';

  let deleteEmail = '';
  let value: Partial<FirestoreUser> = {};

  let personalDetailsDialog = false;
  let addressDialog = false;
  let passwordDialog = false;
  let deleteAccountDialog = false;

  const newPass: any = {
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

  $: {
    disableBtn = !phoneNumber;
  }

  $: {
    if (auth && getMethods) {
      getEnrolledMfaMethods();
      userEnrolled = enrolledFactors.length > 0;
    }
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

  async function updateData() {
    value.name = `${value.firstName} ${value.lastName}`;
    await alertWrapper(
      setDoc(doc(db, 'users', $user!.id), value, { merge: true }),
      'Information updated successfully',
      'Error',
      () => console.log('Error')
    ).then(() => {
      personalDetailsDialog = false;
      addressDialog = false;
    });
    return;
  }

  function deleteAccount() {
    if ($user!.email !== deleteEmail) {
      return alert('Emails do not match');
    }

    (auth.currentUser as User)
      .delete()
      .then(() => auth.signOut())
      .then(() => {
        window.location.replace('/');
      })
      .catch((error) => {
        alert(error.message);
      });
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
    const unSub = user.subscribe((user) => {
      if (user) {
        value = { ...user };
        phoneNumber = user.phoneNumber || '';
      }
    });

    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container-id', {
      size: 'invisible'
    });
    return () => {
      unSub();
    };
  });
</script>

{#if $user}
  <Grid>
    <GridCol span="12" spanlg="6">
      <Card table>
        <svelte:fragment slot="title">Personal details</svelte:fragment>
        <slot slot="headerAction">
          <Button color="secondary" on:click={() => (personalDetailsDialog = true)}>Edit</Button>
        </slot>
        <Table>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell alignment="right">{$user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell alignment="right">{$user.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell alignment="right">{$user.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date of birth</TableCell>
            <TableCell alignment="right">{$user.dateOfBirth}</TableCell>
          </TableRow>
        </Table>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card table>
        <svelte:fragment slot="title">Address</svelte:fragment>
        <slot slot="headerAction">
          <Button color="secondary" on:click={() => (addressDialog = true)}>Edit</Button>
        </slot>
        <Table>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell alignment="right">{$user.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>State / Province</TableCell>
            <TableCell alignment="right">{$user.state}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell alignment="right">{$user.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Postal code</TableCell>
            <TableCell alignment="right">{$user.zip}</TableCell>
          </TableRow>
        </Table>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Account security</svelte:fragment>

        <p class="mb-4">Time to improve account security by changing your password?</p>

        <Button variant="outlined" color="secondary" on:click={() => (passwordDialog = true)}
          >Change your password
        </Button>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Other</svelte:fragment>

        <p class="mb-4">Delete your account and all associated information.</p>

        <Button variant="outlined" color="warning" on:click={() => (deleteAccountDialog = true)}
          >Delete your account
        </Button>
      </Card>
    </GridCol>

    <GridCol span="12" spanlg="6">
      <Card>
        <svelte:fragment slot="title">Connect 2FA</svelte:fragment>
        {#if userEnrolled}
          <p>2FA is <b>enabled</b>, it is recommended to keep this feature enabled.</p>
          <div class="mt-3">
            <Button variant="filled" color="warning" on:click={() => (openRemoveMfaDialog = true)}>
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

  <Dialog bind:open={personalDetailsDialog}>
    <slot slot="title">Editing personal details</slot>

    <form class="flex flex-col gap-4" on:submit|preventDefault={updateData}>
      <Field label="Email" type="email" bind:value={value.email} />
      <Field label="First name" type="text" bind:value={value.firstName} />
      <Field label="Last name" type="text" bind:value={value.lastName} />
      <Select label="Country" bind:value={value.gender}>
        {#each GENDERS as gender}
          <option value={gender.value}>{gender.label}</option>
        {/each}
      </Select>
      <Field label="Date of birth" type="date" bind:value={value.dateOfBirth} />
    </form>

    <slot slot="actions">
      <Button variant="filled" color="secondary" type="submit">Save</Button>
    </slot>
  </Dialog>

  <Dialog bind:open={addressDialog}>
    <slot slot="title">Editing address</slot>

    <form class="flex flex-col gap-4" on:submit|preventDefault={updateData}>
      <Select label="Country" bind:value={value.country}>
        {#each COUNTRIES as country}
          <option value={country.value}>{country.label}</option>
        {/each}
      </Select>
      <Field label="State / Province" type="text" bind:value={value.state} />
      <Field label="Address" type="text" bind:value={value.address} />
      <Field label="Postal code" type="number" bind:value={value.zip} />
      <!--TODO: style number input-->
    </form>

    <slot slot="actions">
      <Button variant="filled" color="secondary" type="submit">Save</Button>
    </slot>
  </Dialog>
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
      <Button type="button" color="secondary" on:click={() => (showPassword = !showPassword)}
        >{showPassword ? 'Hide' : 'Show'} password
      </Button>
    </div>
    <div style="color: red; display: {noMatch ? 'block' : 'none'}">Passwords are not matching.</div>
  </form>

  <slot slot="actions">
    <Button variant="filled" color="secondary" type="submit" form="password_form">Save</Button>
  </slot>
</Dialog>

<Dialog bind:open={deleteAccountDialog}>
  <slot slot="title">Are you sure you want to delete your account?</slot>

  <p class="max-w-lg mb-4">
    Removing your account is an action that can't be reverted. Your account and all associated
    information will be removed.
  </p>

  <p class="max-w-lg mb-4">
    Enter your email address associated with your account to confirm you wish to delete it:
  </p>

  <form class="flex flex-col gap-4" name="delete_account_form">
    <Field required label="Email" type="email" bind:value={deleteEmail} />
  </form>

  <slot slot="actions">
    <Button
      on:click={(e) => {
        e.preventDefault();
        deleteAccount();
      }}
      variant="filled"
      color="warning"
      type="submit"
      form="delete_account_form"
      >Delete account
    </Button>
  </slot>
</Dialog>

<svelte:head>
  <title>Account - GlycanAge</title>
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
