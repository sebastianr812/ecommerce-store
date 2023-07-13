import getProductById from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallary from "@/components/gallary";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProductById(params.productId);

    const suggestedProducts = await getProducts({
        categoryId: product.category.id
    });

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallary */}
                        <Gallary images={product?.images} />
                        <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Info */}
                            <Info
                                data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="Related Products"
                        items={suggestedProducts} />
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;