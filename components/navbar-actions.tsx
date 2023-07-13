'use client';

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NavbarActions = () => {

    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    const cart = useCart();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center ml-auto gap-x-4">
            <Button
                onClick={() => router.push('/cart')}
                className="flex items-center px-4 py-2 bg-black rounded-full">
                <ShoppingBag
                    size={20}
                    color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;