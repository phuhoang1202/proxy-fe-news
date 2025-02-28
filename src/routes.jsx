// Admin Imports
import MainDashboard from '@pages/admin/views/admin/default'

// Icon Imports
import IconDashboard from '@assets/icons/admin/IconDashboard.jsx'
import IconProduct from '@assets/icons/admin/IconProduct.jsx'
import ManagerProduct from '@pages/admin/views/admin/product/ManagerProduct'
import { Outlet } from 'react-router-dom'

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'manager-dashboard',
    icon: <IconDashboard />,
    component: <MainDashboard />,
  },

  {
    name: 'Manage Product',
    layout: '/admin',
    path: 'manager-product',
    icon: <IconProduct />,
    component: <Outlet />,
    children: [
      {
        index: true,
        icon: <IconProduct />,
        component: <ManagerProduct />,
      },
      // {
      //   name: 'Add New Product',
      //   path: 'add-product',
      //   component: <AddNewProduct />,
      // },
      // {
      //   name: 'Edit Product',
      //   path: 'edit-product/:id',
      //   component: <EditProduct />,
      // },
    ],
  },
]

export default routes
