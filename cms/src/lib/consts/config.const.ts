export const CONFIG = {
	title: 'Shop CMS',
	label: 'Webshop Template',
  webUrl: 'https://wonkawave.web.app',
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
      label: 'Pages',
      icon: 'description',
      href: '/dashboard/pages',
      links: [
        { label: 'Pages', href: '/dashboard/pages/pages' },
        { label: 'Popups', href: '/dashboard/pages/popups' },
        { label: 'Sections', href: '/dashboard/pages/sections' },
        { label: 'Templates', href: '/dashboard/pages/templates' },
        { label: 'Forms', href: '/dashboard/pages/forms' }
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