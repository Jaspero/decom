<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import Meta from '$lib/meta/Meta.svelte';
  import Notification from '$lib/notification/Notification.svelte';
  import '../app.pcss';
  import '../typography.pcss';
  import '@jaspero/web-components/dist/alert.wc';
  import '@jaspero/web-components/dist/confirm.wc';
</script>

<Header />

<main class="pt-20">
  <slot />
</main>

<Meta />
<Notification />
<Footer />
