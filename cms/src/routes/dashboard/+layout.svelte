<script lang="ts">
  import Nav from '$lib/Nav.svelte';

  // Needs to be imported so the component is registered
  import ColumnToggle from '$lib/column-elements/ColumnToggle.svelte';
  import ColumnStatus from '$lib/column-elements/ColumnStatus.svelte';
  import ColumnActions from '$lib/column-elements/ColumnActions.svelte';
  import Sidebar from "$lib/Sidebar.svelte";

  const links = [
    {
      label: 'Home',
      href: '/dashboard',
      icon: 'home',
      exactMatch: true
    },
    {
      label: 'Shop',
      icon: 'store',
      href: '/dashboard/shop',
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
      icon: 'sell',
      href: '/dashboard/sales',
      links: [
        { label: 'Orders', href: '/dashboard/sales/orders' },
        { label: 'Customers', href: '/dashboard/sales/customers' }
      ]
    },
    {
      label: 'Blog',
      icon: 'edit_note',
      href: '/dashboard/blog',
      links: [
        { label: 'Articles', href: '/dashboard/blog/articles' },
        { label: 'Categories', href: '/dashboard/blog/categories' },
        { label: 'Authors', href: '/dashboard/blog/authors' }
      ]
    },
    {
      label: 'Management',
      icon: 'admin_panel_settings',
      href: '/dashboard/admins',
      links: [{ label: 'Admins', href: '/dashboard/admins' }]
    }
  ];
</script>

<Nav label="Webshop Template" />

<Sidebar {links} />

<main>
  <slot />
</main>

<style lang="postcss">
  main {
    @apply pl-[256px] pt-16;
  }
</style>
