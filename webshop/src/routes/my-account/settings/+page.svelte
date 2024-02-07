<script lang="ts">
  import {
    deleteUser,
    EmailAuthProvider,
    reauthenticateWithCredential,
    sendEmailVerification,
    updateEmail,
    updatePassword
  } from 'firebase/auth';
  import { notificationWrapper } from '$lib/notification/notification.ts';
  import { auth } from '$lib/utils/firebase';
  import Dialog from '$lib/Dialog.svelte';

  import { goto } from '$app/navigation';

  let newPassword = '';
  let email = '';
  let isConfirmationVisible = false;
  let relogDialog = false;

  let emailForRelog = '';
  let relogPassword = '';

  const handleUpdatePassword = async () => {
    try {
      if (auth.currentUser) {
        await notificationWrapper(
          updatePassword(auth.currentUser, newPassword),
          'Password updated successfully.'
        );
        console.log('your new password:', newPassword);
        newPassword = '';
      }
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        openReloginDialog();
      }
    }
  };

  const handleUpdateEmail = async () => {
    try {
      if (auth.currentUser) {
        await notificationWrapper(
          updateEmail(auth.currentUser, email),
          'Email updated successfully.'
        );
      }
    } catch (error) {
      if (error.code === 'auth/operation-not-allowed') {
        await notificationWrapper(
          sendEmailVerification(auth.currentUser),
          'Email verification sent. Please check your email.'
        );
      }
    }
  };

  const handleDeleteAccount = () => {
    console.log('Button clicked!');
    isConfirmationVisible = true;
  };

  const confirmDelete = async () => {
    isConfirmationVisible = false;
    try {
      if (auth.currentUser) {
        await notificationWrapper(deleteUser(auth.currentUser), 'Account deleted successfully.');
      }
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/requires-recent-login') {
        openReloginDialog();
      }
    }
  };

  const handleRelog = async () => {
    try {
      const credential = EmailAuthProvider.credential(emailForRelog, relogPassword);

      await notificationWrapper(
        reauthenticateWithCredential(auth.currentUser, credential),
        'You have reloged successfully.'
      );
      relogDialog = false;
      goto('/my-account/settings');
    } catch (error) {
      console.error('Error during relog:', error);
    }
  };

  const cancelDelete = () => {
    isConfirmationVisible = false;
  };

  const openReloginDialog = () => {
    relogDialog = true;
  };
</script>

<svelte:head>
  <title>Settings - Jaspero</title>
</svelte:head>

<main>
  <h1>Password Update</h1>

  <form on:submit|preventDefault={handleUpdatePassword}>
    <label for="newPassword">New Password:</label>
    <input type="password" id="newPassword" bind:value={newPassword} required />

    <button type="submit">Update Password</button>
  </form>

  <form class="mt-[40px]" on:submit|preventDefault={handleUpdateEmail}>
    <label for="email">New Email:</label>
    <input type="email" id="email" bind:value={email} required />

    <button type="submit">Update Email</button>
  </form>

  <button class="mt-[40px]" on:click={handleDeleteAccount}>Delete Account</button>
</main>

<Dialog bind:showing={isConfirmationVisible}>
  <div class="w-full text-center">
    <h1>Delete account</h1>
    <p>This action will delete your account permanently, are you sure you want to continue?</p>
  </div>
  <div class="flex w-full justify-center">
    <button class="bg-red-700 p-4 text-white rounded-lg mr-[10px]" on:click={confirmDelete}
      >Yes, delete my account</button
    >
    <button class="bg-black text-white rounded-lg p-4" on:click={cancelDelete}>Cancel</button>
  </div>
</Dialog>

<Dialog bind:showing={relogDialog}>
  <div class="w-full text-center">
    <h1>Relog</h1>
    <p>Please enter your email and password for relog</p>
    <form on:submit|preventDefault={handleRelog}>
      <label for="emailForRelog">Email:</label>
      <input type="email" id="emailForRelog" bind:value={emailForRelog} required />
      <label for="relogPassword">Password:</label>
      <input type="password" id="relogPassword" bind:value={relogPassword} required />
      <div class="flex w-full justify-center">
        <button class="bg-black text-white rounded-lg p-4" type="submit"> Relog </button>
      </div>
    </form>
  </div>
</Dialog>

<style>
</style>
