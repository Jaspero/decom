<script lang="ts">
  import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from 'firebase/auth';
  import { auth } from '$lib/utils/firebase';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { notification, notificationWrapper } from '$lib/notification/notification';
  import Button from '$lib/Button.svelte';
  import { formatEmail } from '$lib/utils/format-emails';

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
      notification.set({ content: 'passwords do no match', type: 'error' });
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
  <div class="form-container">
    <h3 class="text-center">Sign up</h3>
    <div class="text-center py-4 flex flex-col gap-2">
      <Button variant="outlined" color="gray" size="xl">
        <div class="flex justify-center items-center">
          <span><img src="images/google-icon.svg" alt="google icon"class="social-icon"/></span>
          <span>Sign up with Google</span>
        </div>  
      </Button>
      <Button variant="outlined" color="gray" size="xl">
        <div class="flex justify-center items-center">
          <span><img src="images/apple.svg" alt="google icon"class="social-icon"/></span>
          <span>Sign up with Facebook</span>
        </div>  
      </Button>
    </div>
   

    <!-- <form on:submit|preventDefault={signUp}>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" bind:value={email} required />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          required
          bind:value={password}
          bind:this={passwordEl}
        />
      </label>
      <label>
        <span>Confirm password</span>
        <input
          type="password"
          name="confirm-password"
          required
          bind:value={passwordConfirm}
          bind:this={confirmEl}
        />
      </label>
      <div class="show-password">
        <input type="checkbox" class="checkbox" on:change|preventDefault={togglePasswordType} />
        <p>Show/hide password</p>
      </div>
      <Button type="submit" {loading} label="Submit" />
      <button
        type="button"
        on:click={signupGoogle}
        class="px-4 py-2 border mt-[10px] flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        name="Sign up with Google"
      >
        <img class="w-6 h-6" src="/images/google-icon.svg" loading="lazy" alt="google logo" />
        Sign up with Google</button
      >
    </form> -->
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

  label {
    text-align: left;
    width: 100%;
    padding: 10px 0;
    color: black;
    font-weight: 600;
    position: relative;
  }

  input {
    border: 1px solid black;
    outline: none;
    border-radius: 8px;
    padding: 15px;
    color: black;
    font-size: 16px;
    width: 100%;
    margin-top: 5px;
  }

  input::placeholder {
    color: black;
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


  .error {
    font-size: 16px;
    color: #773434;
    font-weight: 600;
    margin-top: 20px;
  }

  .social-icon {
    height: 24px;
    margin-right: 12px;
  }
</style>
