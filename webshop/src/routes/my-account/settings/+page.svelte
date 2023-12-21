
<script lang="ts">
    import {updatePassword,} from 'firebase/auth';
    import {notificationWrapper} from "$lib/notification/notification.ts";
    import {auth} from "$lib/utils/firebase";



    let newPassword = '';


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
