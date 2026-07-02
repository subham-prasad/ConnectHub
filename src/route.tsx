// import Footer from '@/components/custom/Footer/footer'
// import Header from '@/components/custom/Header/header'
// import React from 'react'
// import { Outlet } from 'react-router'

import RootLayout from "@/layouts/RootLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/components/custom/authentication/login-form";
import { RegistrationPage } from "@/components/custom/authentication/registration-form";
import Profile from "@/components/custom/proflie/profile";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";

// function Route() {
//   return (
//  <div className="h-screen w-screen">
//     <Header />
//     <Outlet />
//     <Footer />
//     </div>
//   )
// }

// export default Route

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default Router;
