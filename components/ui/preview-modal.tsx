'use client';

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./modal";
import Gallary from "../gallary";
import Info from "../info";

const PreviewModal = () => {

    const previewModal = usePreviewModal();
    const productToPreview = usePreviewModal((state) => state.data);

    if (!productToPreview) {
        return null;
    }

    return (
        <Modal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}>
            <div className="grid items-start w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallary
                        images={productToPreview?.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info
                        data={productToPreview} />
                </div>
            </div>
        </Modal>
    );
}

export default PreviewModal;