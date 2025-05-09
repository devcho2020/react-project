import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CoinProvider } from './context/CoinContext';
import './index.css'

import Layout from './Layout';
import Home from './pages/Home';
import Jjangkemppo from './pages/game/Jjangkemppo';

import menuJson from './assets/menu.json';

const routesMap = {
  '/' : <Home />,
  '/game/jjangkemppo' : <Jjangkemppo />
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
          path: (item.subPath ?? '') + subItem.path,
          element: routesMap[(item.subPath ?? '') + subItem.path] || <Home />
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
    <CoinProvider>
      <RouterProvider router={router} />
    </CoinProvider>
  </StrictMode>
)