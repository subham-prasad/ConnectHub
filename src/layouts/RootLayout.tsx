import { Outlet } from "react-router"
import Header from "../components/custom/Header/header"
import Footer from "../components/custom/Footer/footer"

function RootLayout() {
  return (
 <div className="h-screen w-screen">
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default RootLayout