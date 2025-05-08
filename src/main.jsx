import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Layout from './Layout';
import Home from './pages/Home';

import menuJson from './assets/menu.json';
import { elements } from 'chart.js';

const routesMap = {
  '/' : <Home />
}

const childRoutes = [{index: true, element: <Home />}];

menuJson.forEach((item) => {
  if(item.path && item.path !== '/') {
    childRoutes.push({
      path: item.path,
      element: routesMap[item.path] || <Home />
    })
  }

  if(item.subMenuItems && item.subMenuItems.length > 0) {    
    item.subMenuItems.forEach((subItem) => {
      if(subItem.path) {
        childRoutes.push({
          path: subItem.path,
          element: routesMap[subItem.path] || <Home />
        })
      }
    })
  }

})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: childRoutes
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)