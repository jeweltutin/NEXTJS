"use client";
//rfce
import { Label } from "@radix-ui/react-label";
import { initialSignUpFormData, userRagistrationFormControls } from "../utils";
import { useState } from "react";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "@/actions";
import { useRouter } from "next/navigation";


function SignUp() {
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    //console.log(signUpFormData);
    const router = useRouter();

    function handleSignUpBtnValid() {
        return Object.keys(signUpFormData).every(
            (key) => signUpFormData[key].trim() !== ""
        );
    }

    async function handleSignUp() {
        const result = await registerUserAction(signUpFormData);
        console.log(result);
    
        if (result?.data) router.push("/sign-in");
      }

    return (
        <div>
            <h1>Registration</h1>
            <form action={handleSignUp}>
                {userRagistrationFormControls.map((controlItem) => (
                    <div key={controlItem.name}>
                        <Label>{controlItem.label}</Label>
                        <CommonFormElement
                            value={signUpFormData[controlItem.name]}
                            currentItem={controlItem}
                            onChange={(event) =>
                                setSignUpFormData({
                                    ...signUpFormData,
                                    [event.target.name]: event.target.value,
                                })
                            }
                        />
                    </div> 
                ))}
                <Button disabled={!handleSignUpBtnValid()} className="disabled:opacity-65" type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUp;
