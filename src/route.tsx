import RootLayout from "@/layouts/RootLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/components/custom/authentication/login-form";
import { RegistrationPage } from "@/components/custom/authentication/registration-form";
import Profile from "@/components/custom/proflie/profile";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";
import HomeComponent from "./components/custom/home/home";
import NewPosts from "./components/custom/Post/NewPosts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomeComponent /> },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "newpost",
        element: <NewPosts />,
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
