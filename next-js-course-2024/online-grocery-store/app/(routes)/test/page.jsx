
"use client";
import React, { useState } from 'react';

// Assuming these components are imported correctly
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function ShippingOptions() {
    const [shippingCharge, setShippingCharge] = useState();

    const onOptionChange = (e) => {
        setShippingCharge(e.target.value);
    };
    return (
        <div>
            <RadioGroup defaultValue="60" className="pb-8">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        type="radio"
                        checked = { shippingCharge === "60" }
                        value="60"
                        onClick={onOptionChange}
                        id="option-one"
                    />
                    <Label htmlFor="option-one">Inside Dhaka (60)</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        type="radio"
                        checked = { shippingCharge === "120" }
                        value="120"
                        onClick={onOptionChange}
                        id="option-two"
                    />
                    <Label htmlFor="option-two">Outside Dhaka (120)</Label>
                </div>
            </RadioGroup>
            <p>
                Shipping Charge: {shippingCharge}
            </p>
        </div>
    )
}

export default ShippingOptions;

