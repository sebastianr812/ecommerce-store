import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from 'zustand/middleware';
import { toast } from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    clearItems: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                return toast('Product is already in cart');
            }

            set({
                items: [...get().items, data]
            });
            toast.success('Product added to cart');
        },
        removeItem: (id: string) => {
            set({
                items: [...get().items.filter((item) => item.id !== id)]
            })
            toast.success('Product removed from the cart');
        },
        clearItems: () => set({ items: [] })
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;