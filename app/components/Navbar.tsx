import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "@/public/logo.svg";
import MobileLogo from "@/public/mobileLogo.svg";
import { UserNav } from "./UserNav";

export function Navbar() {
    return (
        <nav className="w-full border-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href="/">
                    <Image
                        src={DesktopLogo}
                        className="w-32 hidden lg:block"
                        alt="Desktop logo"
                    />
                    <Image
                        src={MobileLogo}
                        className="w-12 block lg:hidden"
                        alt="Mobile logo"
                    />
                </Link>
                <div className="rounded-full border px-5 py-2">
                    <h1>Hello from the search</h1>
                </div>
                <UserNav />
            </div>
        </nav>
    );
}
