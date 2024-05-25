export const CONFIG = {
  title: 'Decom CMS',
  label: '',
  webUrl: 'https://decom-automation.hr',
  links: [
    {
      label: 'Početna',
      href: '/dashboard',
      icon: 'home',
      exactMatch: true
    },
    {
      label: 'Stranice',
      icon: 'description',
      href: '/dashboard/pages',
      links: [
        { label: 'Stranice', href: '/dashboard/pages/pages' },
        { label: 'Tlocrti', href: '/dashboard/pages/layouts' },
        { label: 'Moduli', href: '/dashboard/pages/popups' },
        { label: 'Segmenti', href: '/dashboard/pages/sections' },
        { label: 'Šablone ', href: '/dashboard/pages/templates' },
        { label: 'Formulari', href: '/dashboard/pages/forms' }
      ]
    },
    {
      label: 'Blog',
      icon: 'edit_note',
      href: '/dashboard/blog',
      links: [
        { label: 'Članci', href: '/dashboard/blog/blog-articles' },
        { label: 'Kategorije', href: '/dashboard/blog/blog-categories' },
        { label: 'Autori', href: '/dashboard/blog/blog-authors' }
      ]
    },
    {
      label: 'Administracija',
      icon: 'admin_panel_settings',
      href: '/dashboard/management',
      links: [{ label: 'Administratori', href: '/dashboard/management/admins' }]
    }
  ]
};
