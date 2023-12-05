<script lang="ts">
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import Button from '$lib/Button.svelte';
  import Checkbox from '$lib/Checkbox.svelte';
  import Link from '$lib/Link.svelte';
  import { Validators, Form } from '$lib/utils/form';

  let showPassword = false;

  let alertPopup = false;
  let state = '';
  let title = '';
  let message = '';

  const form = new Form({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(8)],
    confirmPassword: [
      '',
      Validators.required,
      (value: string) => {
        return {
          valid: form.value.password === value,
          error: 'Passwords do not match'
        };
      }
    ],
    terms: [false, Validators.required],
    newsletter: [false, Validators.required]
  });

  async function signUp() {
    if (form.controls.password.value !== form.controls.confirmPassword.value) {
      state = 'error';
      title = 'Something went wrong';
      message = 'Passwords do not match!';
      alertPopup = true;
      return;
    }

    const data = {
      email: form.controls.email.value,
      password: form.controls.password.value,
      firstName: form.controls.firstName.value,
      lastName: form.controls.lastName.value,
      newsletter: form.controls.newsletter.value
    };

    /**
     * TODO: Implement back-end function
     *
     *  await fb.functions().httpsCallable('some-function')(data).then((response) => {
     *       console.log(response);
     *
     *       sessionStorage.clear();
     *       localStorage.clear();
     *     }).catch((error) => {
     *       console.log(error);
     *     });
     */
  }
</script>

<div class="flex items-center">
  <div class="flex flex-1">
    <Grid>
      <GridCol span="2" spanxl="2" />

      <GridCol span="12" spanxl="8">
        <div class="flex flex-col gap-4">
          <SectionTitle>Signup</SectionTitle>

          <h2 class="font-bold text-xl">Personal information</h2>

          <form class="grid grid-cols-12 max-w-6xl w-full gap-6 border-b pb-6">
            <GridCol span="12" spanlg="6">
              <Field
                required
                label="First name"
                type="text"
                bind:value={form.controls.firstName.value}
              />
            </GridCol>
            <GridCol span="12" spanlg="6">
              <Field
                required
                label="Last name"
                type="text"
                bind:value={form.controls.lastName.value}
              />
            </GridCol>
            <GridCol span="12">
              <Field required label="Email" type="email" bind:value={form.controls.email.value} />
            </GridCol>
            <GridCol span="12" spanlg="6">
              {#if showPassword}
                <Field
                  required
                  label="Password"
                  type="text"
                  bind:value={form.controls.password.value}
                />
              {:else}
                <Field
                  required
                  label="Password"
                  type="password"
                  bind:value={form.controls.password.value}
                />
              {/if}
            </GridCol>
            <GridCol span="12" spanlg="6">
              {#if showPassword}
                <Field
                  required
                  label="Password"
                  type="text"
                  bind:value={form.controls.confirmPassword.value}
                />
              {:else}
                <Field
                  required
                  label="Password"
                  type="password"
                  bind:value={form.controls.confirmPassword.value}
                />
              {/if}
            </GridCol>
            <GridCol span="12">
              <Button
                type="button"
                color="secondary"
                on:click={() => (showPassword = !showPassword)}
                >{showPassword ? 'Hide' : 'Show'} password</Button
              >
            </GridCol>
            <GridCol span="12">
              <Checkbox required bind:checked={form.controls.terms.value}
                >I agree to GlycanAge <Link href="/terms-and-conditions">Terms & Conditions</Link
                ></Checkbox
              >
            </GridCol>
            <GridCol span="12">
              <Checkbox bind:checked={form.controls.newsletter.value}
                >Subscribe to our Newsletter</Checkbox
              >
            </GridCol>
            <GridCol span="12">
              <Button
                disabled={form.controls.terms.value === false}
                variant="filled"
                color="secondary"
                type="submit"
                on:click={() => signUp()}>Sign up</Button
              >
            </GridCol>
          </form>

          <div>
            <p class="mb-2">Already have an account?</p>
            <Button color="secondary" href="/login">Log in</Button>
          </div>
        </div>
      </GridCol>

      <GridCol span="1" spanxl="2" />
    </Grid>
  </div>

  <img src="/images/success-bg.svg" alt="" class="hidden lg:block h-screen max-w-md object-cover" />
</div>

<svelte:head>
  <title>Signup - GlycanAge</title>
</svelte:head>
