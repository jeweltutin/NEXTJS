import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";


function Checkout() {
    return (
        <div className="">
            <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">Checkout</h2>
            <div className="p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8">
                <div className="md:col-span-2 md:mx-20 mx-7 order-2 md:order-1 mt-6">
                    <h2 className="font-bold text-3xl">Billing Details</h2>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input placeholder="Name" className="h-10"  />
                        <Input placeholder="Email" className="h-10" />
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-3">
                        <Input placeholder="Phone"className="h-10"  />
                        <Input placeholder="Zip" className="h-10" />
                    </div>
                    <div className="mt-3">
                        <Input placeholder="Address" className="h-10" />
                    </div>
                </div>
                <div className="mx-10 border order-1 md:order-2">
                    <h2 className="p-3 bg-gray-200 font-bold text-center">Total Cart (03)</h2>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-bold flex justify-between">Subtotal: <span>tk 250</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Delivery: <span>tk 60</span></h2>
                        <h2 className="flex justify-between">Tax (1%): <span>tk 10</span></h2>
                        <hr></hr>
                        <h2 className="flex justify-between">Total: <span>tk 350</span></h2>
                        <Button>Payment <ArrowBigRight /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
