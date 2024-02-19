import {INavbarData} from "./helpers";

export const navbarData: INavbarData[] = [
  {
    routeLink: '/admin/dashboard',
    icon: 'bi bi-speedometer2',
    label: 'Dashboard'
  },
  {
    routeLink: '/admin/analytics',
    icon: 'bi bi-graph-up',
    label: 'Analytics'
  },
  {
    routeLink: '/admin/users',
    icon: 'bi bi-people',
    label: 'Users',
    items: [
      {
        routeLink: '/admin/users/list',
        label: 'All User'
      },
      {
        routeLink: '/admin/users/create',
        label: 'Add User',
      },
    ]
  },
  {
    routeLink: '/admin/blog',
    icon: 'bi bi-pencil-square',
    label: 'Blog',
    items: [
      {
        routeLink: '/admin/blog/posts',
        label: 'Articles'
      },
      {
        routeLink: '/admin/blog/create',
        label: 'Create Article',
      },
    ]
  },
  {
    routeLink: '/admin/products',
    icon: 'bi bi-boxes',
    label: 'Products'
  },
  {
    routeLink: '/admin/tasks',
    icon: 'bi bi-clipboard-data',
    label: 'Tasks'
  },
]
