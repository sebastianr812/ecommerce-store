import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const id = 'c5c9cd4d-b5ec-4230-a15e-5c6bcc5c4512';
    const billboard = await getBillboard(id);
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <div className="pb-10 space-y-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                <ProductList
                    title='Featured Products'
                    items={products} />
            </div>
        </Container>
    );
}

export default HomePage;