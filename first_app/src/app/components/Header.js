import style from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
    return(
        <header className={style.main_header}>
            <div className={style.navbar_brand}>
                <Link href="/" > 
                    <Image src="/demo_logo.png" alt="logo" width={100} height={45} />
                </Link>
            </div>
            <Nav></Nav>
        </header>       
    );
}

export default Header;
