import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import Image from 'next/image';

interface GallaryTabProps {
    image: ImageType;
}

const GallaryTab: React.FC<GallaryTabProps> = ({
    image
}) => {
    return (
        <Tab className='relative flex items-center bg-white rounded-md cursor-pointer aspect-square jusitfy-center'>
            {({ selected }) => (
                <div>
                    <span className="absolute inset-0 w-full h-full overflow-hidden rounded-md aspect-square">
                        <Image
                            alt="Product Image"
                            fill
                            src={image.url}
                            className="object-cover object-center" />
                    </span>
                    <span className={cn('absolute inset-0 ring-2 ring-offset-2',
                        selected ? 'ring-black' : 'ring-transparent'
                    )} />
                </div>
            )}
        </Tab>
    );
}

export default GallaryTab;