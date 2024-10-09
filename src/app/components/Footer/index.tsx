import React from "react";
import Image from "next/image";
import {ABeeZee} from "next/font/google";
import Link from "next/link";

const abezee = ABeeZee({weight: ["400"], subsets: ['latin']})

export default function Footer() {
    return <footer className={"w-full"}>
        <ul className={`flex xl:flex-row flex-col items-center justify-end gap-7 xl:gap-20 p-10 text-sm ${abezee.className}`}>
            <li>Nous contacter</li>
            <li><Link href={'/faq'}>F.A.Q</Link></li>
            <li><Link href={"/cgu"}>CGU</Link></li>
            <li><Link href={"/mentions-legales"}>Mentions légales</Link></li>
            <li><Link href={"mailto:baptiste.petit@psdoweb.com"}>baptiste.petit@psdoweb.com</Link></li>
            <li>06-82-99-85-27</li>
            <div className={"flex items-center gap-10"}>
                <Image src={"/images/socials_network/Facebook.png"} alt={"Logo Facebook"} width={40} height={40}/>
                <Image src={"/images/socials_network/Instagram.png"} alt={"Logo Instagram"} width={40} height={40}/>
                <Link href={"https://fr.linkedin.com/company/psdoweb"}>
                    <Image src={"/images/socials_network/Linkedin.png"} alt={"Logo Linkedin"} width={40} height={40}/>
                </Link>
            </div>
        </ul>
    </footer>
}