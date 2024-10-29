"use client";
import GlobalApi from "@/actions/GlobalApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import moment from "moment";
import MyOrderItem from "@/components/MyOrderItem";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

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
                                <CollapsibleTrigger asChild>
                                    <div className="flex justify-evenly gap-3 md:gap-20 border p-2 mt-4 bg-slate-100 md:w-[800px] xl:w-[1024px]">
                                        {/* <div className="grid grid-cols-3 border p-2 bg-slate-100"> */}
                                        <h2 className="w-[45%]"><span className="font-bold mr-2">Order Date:</span> {moment(item?.createdAt).format("DD/MMM/yyyy")}</h2>
                                        <h3 className="w-[35%]"><span className="font-bold mr-2">Total Amount:</span> {item.totalAmount}</h3>
                                        <h3 className="w-[35%] md:flex">
                                            <span className="font-bold">
                                                {/* Status:</span> {item.status == "Completed" ? item.status : "N/A"}  */}
                                                Status:
                                            </span>
                                            <p className={`font-medium pl-2 rounded-md ${item.status == "Completed" ? "text-green-600" : item.status == "Canceled" ? "text-red-600" : item.status == "Processing" ? "text-yellow-600" : ""}`}>
                                                {item.status}
                                            </p>
                                        </h3>
                                        <div className="w-[30%] pt-[5px] hidden md:block">
                                            <Link href={"/invoice/" + item.id} className="bg-slate-600 text-white rounded py-[3px] px-[8px]">Invoice Generate</Link>
                                        </div>
                                        <Button variant="ghost" size="sm" className="w-9 p-0">
                                            <ChevronsUpDown className="h-4 w-4" />
                                            <span className="sr-only">Toggle</span>
                                        </Button>
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    {item.orderItemList.map((productItem, idx) => (
                                        <div key={idx} className="p-2">
                                            {/* <h4>{productItem.product.name} - {productItem.quantity} x ${productItem.amount}</h4> */}
                                            <MyOrderItem key={idx} orderItem={productItem} />
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
