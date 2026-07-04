import { Outlet } from "react-router";
import Header from "../components/custom/Header/header";
import Footer from "../components/custom/Footer/footer";
import { useEffect } from "react";
import { getCurrentUser } from "@/api/auth.api";
import UserStore from "@/store/user.store";

function RootLayout() {
  const getCurrentUser = UserStore((state) => state.getCurrentUser);

  useEffect(() => {

    getCurrentUser();
  });

  return (
    <div className="h-screen w-screen">
      <Header  />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;
