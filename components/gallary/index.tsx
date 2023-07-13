'use client';

import { Tab } from "@headlessui/react";
import Image from 'next/image';

import { Image as ImageType } from '@/types';
import GallaryTab from "@/components/gallary/gallary-tab";

interface GallaryProps {
    images: ImageType[];
}

const Gallary: React.FC<GallaryProps> = ({
    images
}) => {
    return (
        <Tab.Group as='div' className='flex flex-col-reverse'>
            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                <Tab.List className='grid grid-cols-4 gap-6'>
                    {images.map((image) => (
                        <GallaryTab
                            key={image.id}
                            image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className='w-full aspect-square'>
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="relative w-full h-full overflow-hidden aspect-square sm:rounded-lg">
                            <Image
                                alt='Big gallary image'
                                fill
                                src={image.url}
                                className="object-cover object-center" />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default Gallary;