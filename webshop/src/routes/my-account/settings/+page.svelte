
<script lang="ts">
    import {updatePassword,sendEmailVerification,updateEmail,deleteUser} from 'firebase/auth';
    import {notificationWrapper} from "$lib/notification/notification.ts";
    import {auth} from "$lib/utils/firebase";
    import {firebaseErrors} from "$lib/notification/notification";
    import Dialog from "$lib/Dialog.svelte";



    let newPassword = '';
    let email = '';
    let isConfirmationVisible = false;


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

    const handleDeleteAccount = () => {
        console.log('Button clicked!');
        isConfirmationVisible = true;
    };

    const confirmDelete = async () => {
        isConfirmationVisible = false;
        try {
            if (auth.currentUser) {
                // Delete user
                await notificationWrapper(
                    deleteUser(auth.currentUser),
                    'Account deleted successfully.'
                );
            }
        } catch (deleteError) {
            console.error(deleteError);

            // Handle errors using notificationWrapper
            await notificationWrapper(
                Promise.reject(deleteError), // Reject the promise to trigger notificationWrapper
                firebaseErrors[deleteError.code] || 'An error occurred while deleting the account.'
            );
        }

        console.log('Account deleted');
    };

    const cancelDelete = () => {
        isConfirmationVisible = false;
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

    <button class="mt-[40px]" on:click={handleDeleteAccount}>Delete Account</button>
</main>
<Dialog bind:showing={isConfirmationVisible}>
    <div class="w-full text-center">
        <h1>Delete account</h1>
        <p>This action will delete your account permanently, are you sure you want to continue?</p>
    </div>
    <div class="flex w-full justify-center">
        <button class="bg-red-700 p-4 text-white rounded-lg mr-[10px]" on:click={confirmDelete}>Yes, delete my account</button>
        <button class="bg-black text-white rounded-lg p-4" on:click={cancelDelete}>Cancel</button>
    </div>
</Dialog>


<style>

</style>
