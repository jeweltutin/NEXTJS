"use client"
import React, { useState } from 'react'
import { initialLoginFormData, userLoginFormControls } from '../utils';
import { Label } from '@radix-ui/react-label';
import CommonFormElement from '@/components/form-element';
import { Button } from '@/components/ui/button';
import { loginUserAction } from '@/actions';
import { useRouter } from 'next/navigation';

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();

  async function handleSignIn() {
    const result = await loginUserAction(signInFormData);
    console.log(result);
    if (result?.success) router.push("/");
  }
  return (
    <div>
      <h2>Login</h2>
      <form action={handleSignIn}>
        {userLoginFormControls.map((controlItem) => (
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={setSignInFormData[controlItem.name]}
              onChange={(e) => setSignInFormData({ ...signInFormData, [e.target.name]: e.target.value })}
            />
          </div>
        ))}
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn;
