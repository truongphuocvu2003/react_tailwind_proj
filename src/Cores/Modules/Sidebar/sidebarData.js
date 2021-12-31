export const sidebarMenuItems = []

export const initSidebarMenuItems = () => {
  sidebarMenuItems.push(
    { name: 'spacer', type: 'spacing' },
    { type: 'grouping', name: 'homeGroup', text: 'Dashboard' },
    {
      name: 'dashboard',
      url: '',
      text: 'Dashboard',
      icon: 'mdi mdi-24px mdi-home-outline',
      type: 'item',
    },
    {
      name: 'landingPage',
      url: '/',
      text: 'Landing Page',
      icon: 'mdi mdi-24px mdi-floor-plan',
      type: 'item',
    },
    { name: 'spacer', type: 'spacing' },
    { type: 'grouping', name: 'productionGroup', text: 'Features' },
    {
      name: 'todo',
      url: 'todo',
      text: 'Todo',
      icon: 'mdi mdi-24px mdi-clipboard-list-outline',
      type: 'item',
    },
    {
      name: 'employees',
      url: 'employees',
      text: 'Employees',
      icon: 'mdi mdi-24px mdi-account',
      type: 'item',
      items: [
        {
          name: 'list-employee',
          url: 'employees',
          text: 'All Employees',
          type: 'item',
        },
        {
          name: 'add-employee',
          url: 'employees/add',
          text: 'Add Employee',
          type: 'item',
        },
      ],
    },
    {
      name: 'eCommerce',
      url: 'eCommerce',
      text: 'eCommerce',
      icon: 'mdi mdi-24px mdi-cart-outline',
      type: 'item',
      items: [
        { name: 'orders', url: 'orders', text: 'Orders', type: 'item' },
        {
          name: 'catalogs',
          url: 'catalogs',
          text: 'Catalogs',
          type: 'item',
          items: [
            {
              name: 'list-catalog',
              url: 'catalogs',
              text: 'All Catalogs',
              type: 'item',
            },
            {
              name: 'add-catalog',
              url: 'catalogs/add',
              text: 'Add Catalog',
              type: 'item',
            },
          ],
        },
        {
          name: 'products',
          url: 'products',
          text: 'Products',
          type: 'item',
          items: [
            {
              name: 'list-product',
              url: 'products',
              text: 'All Products',
              type: 'item',
            },
            {
              name: 'add-product',
              url: 'products/add',
              text: 'Add Product',
              type: 'item',
            },
          ],
        },
      ],
    },
    { name: 'spacer', type: 'spacing' },
    { type: 'grouping', name: 'settingGroup', text: 'App Settings' },
    {
      name: 'settings',
      url: 'settings',
      text: 'Settings',
      icon: 'mdi mdi-24px mdi-cog',
      type: 'item',
    },
    {
      name: 'configurations',
      url: 'configurations',
      text: 'Configurations',
      icon: 'mdi mdi-24px mdi-database-settings-outline',
      type: 'item',
    },
    { name: 'spacer', type: 'spacing' },
  )
}
