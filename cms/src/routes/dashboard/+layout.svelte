<script>
  import '../../app.postcss';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';

  let links = [
    { label: 'Home', href: '/dashboard' },
    { label: 'Orders', href: '/dashboard/orders' }
  ];
</script>

<div class="flex flex-col max-h-screen">
  <Nav label="Template" {links} />

  <main class="flex-1 overflow-y-auto">
    <slot />
    <Footer />
  </main>
</div>
