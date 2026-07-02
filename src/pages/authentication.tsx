import LoginPage from '@/components/custom/authentication/login-form'
import React, { useState } from 'react'

export default function AuthenticationPage() {


    const [signIn,setSignIn] = useState<boolean>(false)

  return (
    <>
    { signIn &&  <LoginPage />}
</>
  )
}
