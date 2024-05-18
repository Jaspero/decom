export const CONFIG = {
	title: 'Shop CMS',
	label: 'Webshop Template',
	links: [
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
        { label: 'Articles', href: '/dashboard/blog/blog-articles' },
        { label: 'Categories', href: '/dashboard/blog/blog-categories' },
        { label: 'Authors', href: '/dashboard/blog/blog-authors' }
      ]
    },
    {
      label: 'Management',
      icon: 'admin_panel_settings',
      href: '/dashboard/management',
      links: [{ label: 'Admins', href: '/dashboard/management/admins' }]
    }
  ]
}