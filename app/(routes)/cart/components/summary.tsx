'use client';

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";




const Summary = () => {
    const searchParams = useSearchParams();
    const itemsInCart = useCart((state) => state.items);
    const clearItems = useCart((state) => state.clearItems);

    const totalPrice = itemsInCart.reduce((total, curr) => {
        return total + Number(curr.price)
    }, 0);

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Your order is confirmed!');
            clearItems();
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong');
        }
    }, [searchParams, clearItems]);

    const onCheckout = async () => {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: itemsInCart.map((item) => item.id)
        });

        window.location = res.data.url;
    }

    return (
        <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray=900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency
                        value={totalPrice} />
                </div>
            </div>
            <Button
                disabled={itemsInCart.length === 0}
                onClick={onCheckout}
                className="w-full mt-6">
                Checkout
            </Button>
        </div>
    );
}

export default Summary;
