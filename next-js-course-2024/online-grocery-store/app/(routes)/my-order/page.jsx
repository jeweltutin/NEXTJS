"use client";
import GlobalApi from "@/actions/GlobalApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import moment from "moment";

function MyOrder() {
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMyOrder = async () => {
        if (user && token) {
            try {
                const getOrderList = await GlobalApi.getMyOrder(user.id, token);
                console.log("Order List:", getOrderList); // Check the API response
                setOrderList(getOrderList);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        const jwtToken = sessionStorage.getItem("jwt");
        const getUser = JSON.parse(sessionStorage.getItem("user"));

        console.log("JWT Token:", jwtToken);
        console.log("User:", getUser);

        if (jwtToken) {
            setToken(jwtToken);
            setUser(getUser);
        } else {
            router.replace("/");
        }
    }, []);

    useEffect(() => {
        if (user && token) {
            getMyOrder();
        }
    }, [user, token]);

    return (
        <div>
            <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
                Hi, &nbsp; {user ? user.username : "My Order"}'s Order List
            </h2>
            <div className="py-8 mx-7 md:mx-20">
                <h2 className="text-3xl font-bold text-primary">Order History</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : orderList.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <div>
                        {orderList.map((item, index) => (
                            <Collapsible key={index}>
                                <CollapsibleTrigger>
                                    <div className="flex justify-evenly gap-24 border p-2 bg-slate-100">
                                        <h2><span className="font-bold mr-2">Order Date:</span> {moment(item?.createdAt).format("DD/MMM/yyyy")}</h2>
                                        <h3><span className="font-bold mr-2">Total Amount:</span> {item.totalAmount}</h3>
                                        <h3><span className="font-bold mr-2">Status:</span> Pending</h3>
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    {item.orderItemList.map((productItem, idx) => (
                                        <div key={idx} className="p-2 border-b">
                                            <h4>{productItem.product.name} - {productItem.quantity} x ${productItem.amount}</h4>
                                        </div>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyOrder;
