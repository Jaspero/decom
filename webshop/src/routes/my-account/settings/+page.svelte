
<script lang="ts">
    import {
        getAuth,
        updatePassword,
        reauthenticateWithCredential,
        EmailAuthProvider,
        onAuthStateChanged, sendPasswordResetEmail
    } from 'firebase/auth';
    import {onMount} from 'svelte';
    import {authenticated, user} from "$lib/utils/firebase.ts";
    import {firebaseErrors, notification, notificationWrapper} from "$lib/notification/notification.ts";

    // let currentPassword = '';
    // let newPassword = '';
    // let confirmPassword = '';
    //
    // const auth = getAuth();
    //
    // const user = auth.currentUser;
    //
    //
    // updatePassword(user, newPassword).then(() => {
    //     // Update successful.
    //     console.log('your new password is:', newPassword)
    // }).catch((error) => {
    //     // An error ocurred
    //     // ...
    // });


    let auth = getAuth();

    let newPassword = '';
    let successMessage = '';
    let errorMessage = '';


    const handleUpdatePassword = async () => {
        try {
            if (auth.currentUser) {
                await notificationWrapper(
                    updatePassword(auth.currentUser, newPassword),
                    'Password updated successfully.'
                );
            }
        } catch (error) {
            'Something went wrong'
            console.error(error);
        }
        console.log('your new password:', newPassword)
    };
</script>

<svelte:head>
  <title>Settings - Jaspero</title>
</svelte:head>


<main>
    <h1>Password Update</h1>

    <form on:submit|preventDefault={handleUpdatePassword}>
    <label for="newPassword">New Password:</label>
    <input type="password" id="newPassword" bind:value={newPassword} />

    <button type="submit">Update Password</button>
    </form>
</main>
