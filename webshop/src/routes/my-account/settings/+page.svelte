
<script lang="ts">
    import {updatePassword,sendEmailVerification,updateEmail} from 'firebase/auth';
    import {notificationWrapper} from "$lib/notification/notification.ts";
    import {auth} from "$lib/utils/firebase";
    import {notification} from "$lib/notification/notification";
    import {firebaseErrors} from "../../../lib/notification/notification";



    let newPassword = '';
    let email = '';


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

const handleUpdateEmail = async () => {
    try {
        if (auth.currentUser) {
            await notificationWrapper(
                updateEmail(auth.currentUser, email),
                'Email updated successfully.'
            );
        }
    } catch (updateError) {
        console.error(updateError);

        if (updateError.code === 'auth/operation-not-allowed') {
            await notificationWrapper(
                sendEmailVerification(auth.currentUser),
                'Email verification sent. Please check your email.'
            );
        }
    }
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

    <form class="mt-[40px]" on:submit|preventDefault={handleUpdateEmail}>
        <label for="email">New Email:</label>
        <input type="email" id="email" bind:value={email} />

        <button type="submit">Update Email</button>
    </form>
</main>
