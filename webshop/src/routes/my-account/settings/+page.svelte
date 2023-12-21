<script>
  import Button from '$lib/Button.svelte';
  import { getAuth } from '$lib/utils/firebase';

  let loading = false;

  let emailChange = '';
  let passwordChange = '';
  let name = '';
</script>

<svelte:head>
  <title>Settings - Jaspero</title>
</svelte:head>

<div class="flex-1">
  <h1 class="text-[35px] text-center w-full">{name}Settings</h1>
  <div class="form-container">
    <h2 class="title">Sign up</h2>
    <form on:submit|preventDefault>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" bind:value={emailChange} required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" required bind:value={passwordChange} />
      </label>
      <Button type="submit" {loading} label="Submit" />
      <!--      <button type="button" on:click={pero} class="px-4 py-2 border mt-[10px] flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" name="Sign up with Google">-->
      <!--        pero</button>-->
    </form>
  </div>
</div>
