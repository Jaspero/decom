<svelte:options customElement={{ tag: 'pb-submit', shadow: 'none' }} />

<script lang="ts">
  export let id: string;
  export let redirect: string;
  export let success: string;
  export let label = 'Submit';

  function submit() {}
</script>

<button type="submit" on:click|preventDefault={submit}>{label}</button>
