export const CONFIG = {
  title: 'Decom CMS',
  label: '',
  webUrl: 'https://decom-automation.hr',
  links: [
    {
      label: 'Home',
      href: '/dashboard',
      icon: 'home',
      exactMatch: true
    },
    {
      label: 'Pages',
      icon: 'description',
      href: '/dashboard/pages',
      links: [
        { label: 'Pages', href: '/dashboard/pages/pages' },
        { label: 'Layouts', href: '/dashboard/pages/layouts' },
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
};
