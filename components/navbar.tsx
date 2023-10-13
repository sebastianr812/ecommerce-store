import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import crownLogo from "@/public/logos/crownClothing.svg";
import Image from "next/image";

const Navbar = async () => {

    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
                    <Link href='/' className="flex ml-4 lg:ml-0 gap-x-2 items-center justify-center">
                        <Image src={crownLogo} alt="logo" className="h-10 w-10" /> 
                        <p className="leading-none font-semibold text-md">Crown Clothing</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
