import { setPopup } from "@/redux/slices/popupSlice";
import { logout } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

type ProtectionProps = {
    children: React.ReactNode;
}

const Protection = ({ children }: ProtectionProps) => {

    const token = useSelector((state: RootState) => state.userReducer.userInfo?.token);
    const role = useSelector((state: RootState) => state.userReducer.userInfo?.role);

    const dispatch = useDispatch();
    const router = useRouter();

    //console.log('Ex01:' + token);
    //console.log('Ex02:' + token.split('.')[1]);
    //console.log('Ex03:' +JSON.parse(atob(token.split('.')[1])));
    //console.log(Date.now());

    const parseJWT = (token: any) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));  //The atob() method decodes a base-64 encoded string.The atob() method decodes a string that has been encoded by the btoa() method.
        } catch (error) {
            return null;
        }
    }

    if (token) {
        const decodedJWT = parseJWT(token);
        //console.log('After Parse:' + decodedJWT.exp);
        if (decodedJWT.exp * 1000 < Date.now()) {     //It's important to note that Date. now() will return the number of milliseconds since January, 1 1970 UTC. If you need the number of seconds, you'll need to divide the result by 1000
            dispatch(logout());
            dispatch(setPopup({
                type: 'warning',
                message: 'Session expired',
                show: true
            }));
            setTimeout(() => {
                dispatch(setPopup({ show: false, type: '', message: '' }));
            }, 5000)
        }
    }

    useEffect(() => {
        if (role !== 'admin') {
            router.push('/login');
        }
    }, [role, router])

    return (
        <>
            {children}
        </>
    )
}

export default Protection
