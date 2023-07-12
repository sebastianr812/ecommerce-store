'use client';

import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
            {/* Images and Actions */}
            <div className="relative bg-gray-100 aspect-square rounded-xl">
                <Image
                    alt="Image"
                    src={data?.images?.[0].url}
                    fill
                    className="object-cover rounded-md aspect-square" />
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="flex justify-center gap-x-6">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;