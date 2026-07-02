import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div>

        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default AuthLayout