'use client'
import AdminLogin from "@/components/login";
import LoginLayout from "@/components/layouts/loginLayout";
import Toast from "@/components/backend/toast";

const Login = () => {
  return (
    <div>
      <Toast></Toast>
      {/* <LoginLayout> */}
        <AdminLogin />
      {/* </LoginLayout> */}
    </div>
  )
}

export default Login
