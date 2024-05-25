<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Field from '$lib/Field.svelte';
  import Grid from '$lib/Grid.svelte';
  import GridCol from '$lib/GridCol.svelte';
  import SectionTitle from '$lib/SectionTitle.svelte';
  import { CONFIG } from '$lib/consts/config.const';

  let email = '';
</script>

<div class="flex items-center">
  <div class="flex flex-1">
    <Grid>
      <GridCol span="2" />

      <GridCol span="12" spanxl="8">
        <div class="flex flex-col gap-4">
          <SectionTitle>Reset password</SectionTitle>
          <p>
            Please provide your email address below, and we'll promptly send you an email containing
            detailed instructions on how to reset your password.
          </p>
          <form class="flex flex-col gap-4 border-b pb-8">
            <Field required label="Email" type="email" bind:value={email} />
            <div>
              <Button variant="filled" color="secondary">Submit</Button>
            </div>
          </form>
        </div>
      </GridCol>

      <GridCol span="2" />
    </Grid>
  </div>

  <img src="/images/success-bg.svg" alt="" class="hidden lg:block h-screen max-w-md object-cover" />
</div>

<svelte:head>
  <title>Reset Password - {CONFIG.title}</title>
</svelte:head>
