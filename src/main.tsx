import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router'

import Router from './route.tsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Route />,
//     children: [
//       {path: '',
//         element: <Home />
//       },
//        {path: 'profile',
//         element: <Profile />
//       },
      

//     ]
//   },
//   {
//      element: <AuthLayout />,
//      children: [
//       {
//          'path': 'login',
//         element: <LoginPage />
//       },
//       {
//         'path': 'register',
//         element: <RegistrationPage />
//       }
      
//      ]
//     }
       
// ])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
