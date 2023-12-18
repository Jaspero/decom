<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import Meta from '$lib/meta/Meta.svelte';
  import Notification from '$lib/notification/Notification.svelte';
  import '../app.css';
</script>

<Header />

<main class="pt-20">
  <slot />
</main>

<Meta />
<Notification />
<Footer />
