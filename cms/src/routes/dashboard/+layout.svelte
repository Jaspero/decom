<script lang="ts">
  import '../../app.postcss';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';

  const links = [
    { label: 'Home', href: '/dashboard' },
    {
      label: 'Shop',
      links: [
        { label: 'Products', href: '/dashboard/shop/products' },
        { label: 'Categories', href: '/dashboard/shop/categories' },
        { label: 'Tags', href: '/dashboard/shop/tags' },
        { label: 'Discounts', href: '/dashboard/shop/discounts' },
        { label: 'Coupons', href: '/dashboard/shop/coupons' }
      ]
    },
    {
      label: 'Sales',
      links: [
        { label: 'Orders', href: '/dashboard/sales/orders' },
        { label: 'Customers', href: '/dashboard/sales/customers' },
      ]
    },
    {
      label: 'Blog',
      links: [
        { label: 'Articles', href: '/dashboard/blog/articles' },
        { label: 'Categories', href: '/dashboard/blog/categories' },
      ]
    },
    {
      label: 'Management',
      links: [
        { label: 'Admins', href: '/dashboard/admins' }
      ]
    }
  ];
</script>

<div class="flex flex-col max-h-screen">
  <Nav label="Template" {links} />

  <main class="flex-1 overflow-y-auto">
    <slot />
    <Footer />
  </main>
</div>
