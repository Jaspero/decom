<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import '../app.pcss';
  import Notification from '$lib/notification/Notification.svelte';
</script>

<Header />

<main class="pt-20">
    <slot />
</main>

<Notification />
<Footer />
