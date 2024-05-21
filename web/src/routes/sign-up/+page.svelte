<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import { notification, notificationWrapper } from '$lib/notification/notification';
  import { auth } from '$lib/utils/firebase';
  import { formatEmail } from '$lib/utils/format-emails';
  import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from 'firebase/auth';

  let email = '';
  let password = '';
  let passwordConfirm = '';
  let loading = false;
  let resolver: any;

  let passwordEl: HTMLInputElement;
  let confirmEl: HTMLInputElement;

  async function signUp() {
    email = formatEmail(email);
    if (password !== passwordConfirm) {
      notification.set({ content: 'passwords do not match', type: 'error' });
      password = '';
      passwordConfirm = '';
      return;
    }
    if (password.length < 6) {
      notification.set({ content: 'Password must be at least 6 characters long.', type: 'error' });
      password = '';
      passwordConfirm = '';
      return;
    }

    loading = true;

    try {
      await notificationWrapper(createUserWithEmailAndPassword(auth, email, password));
      navigate();
    } catch {
      password = '';
    }

    loading = false;
    passwordConfirm = '';
  }

  async function signupGoogle() {
    const { searchParams } = $page.url;
    email = formatEmail(email);
    loading = true;

    await notificationWrapper(
      signInWithPopup(auth, new GoogleAuthProvider()),
      'Login successful',
      () => (loading = false)
    );
    goto(
      searchParams.has('forward')
        ? decodeURIComponent(searchParams.get('forward') as string)
        : '/shop'
    );
  }

  function navigate() {
    const { searchParams } = $page.url;
    goto(searchParams.has('f') ? decodeURIComponent(searchParams.get('f') as string) : '/');
  }
  function togglePasswordType() {
    passwordEl.type = passwordEl.type === 'password' ? 'text' : 'password';
    confirmEl.type = confirmEl.type === 'password' ? 'text' : 'password';
  }
</script>

<section class="sign-up">
  <div class="form-container text-center">
    <h3 class="text-center pt-4">Sign up for Jaspero Webshop</h3>
    <div class="py-4">
      <span class="footnote">
        By signing up, I agree to Jaspero's <a href="" target="_blank" class="notelink"
          >Terms and Privacy Policy.</a
        >
      </span>
    </div>
    <div class="text-center pt-4 pb-8 flex flex-col gap-2">
      <Button variant="outlined" color="gray" size="xl" name="Sign up with Google">
        <div class="flex justify-center items-center">
          <span><img src="images/google-icon.svg" alt="google icon" class="social-icon" /></span>
          <span>Sign up with Google</span>
        </div>
      </Button>
      <Button variant="outlined" color="gray" size="xl">
        <div class="flex justify-center items-center">
          <span><img src="images/apple.svg" alt="google icon" class="social-icon" /></span>
          <span>Sign up with Facebook</span>
        </div>
      </Button>
    </div>
    <div
      class="flex my-8 w-[95%] m-auto h-0 justify-center items-center border-b-[2px] border-[--gray]"
    >
      <span class="footnote bg-[--white] px-3">or sign up through email</span>
    </div>

    <form on:submit|preventDefault={signUp} class="flex flex-col gap-4">
      <Field label="Name" type="text" wfull={true} required />
      <Field label="Email" type="email" bind:value={email} wfull={true} required />
      <Field
        label="Password"
        type="password"
        bind:value={password}
        bind:this={passwordEl}
        wfull={true}
        required
      />
      <Field
        label="Confirm password"
        type="password"
        bind:value={passwordConfirm}
        bind:this={confirmEl}
        wfull={true}
        required
      />
      <div class="show-password">
        <input type="checkbox" class="checkbox" on:change|preventDefault={togglePasswordType} />
        <p>Show/hide password</p>
      </div>
      <Button type="submit" {loading}>Submit</Button>
    </form>
  </div>
</section>

<style>
  .sign-up {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 500px;
    padding: 20px;
    background: white;
    margin: 0 auto;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .show-password {
    width: 100%;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    color: black;
    margin-top: 10px;
  }

  .checkbox {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .social-icon {
    height: 24px;
    margin-right: 12px;
  }
</style>
