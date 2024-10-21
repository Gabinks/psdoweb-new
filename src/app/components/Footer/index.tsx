"use client"

import React, {useRef, useState} from "react";
import Image from "next/image";
import {ABeeZee} from "next/font/google";
import Link from "next/link";

const abezee = ABeeZee({weight: ["400"], subsets: ['latin']})

export default function Footer() {
    const phoneRef = useRef<HTMLLIElement>(null);
    const [isClicked, setIsClicked] = useState(false)
    const copyPhoneNumber = (event: React.MouseEvent<HTMLLIElement>) => {
        if (isClicked) return;
        setIsClicked(true)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigator.clipboard.writeText(event.target.innerText)
        setTimeout(() => {
            setIsClicked(false)
        }, 2000)
    }
    return <footer className={"w-full"}>
        <ul className={`flex xl:flex-row flex-col items-center justify-center gap-7 xl:gap-20 px-10 pt-32 pb-10 text-sm xl:text-base ${abezee.className}`}>
            <li><Link href={"/contact"}>Nous contacter</Link></li>
            <li><Link href={'/faq'}>F.A.Q</Link></li>
            <li><Link href={"/cgu"}>CGU</Link></li>
            <li><Link href={"/mentions-legales"}>Mentions légales</Link></li>
            <li><Link href={"mailto:baptiste.petit@psdoweb.com"}>baptiste.petit@psdoweb.com</Link></li>
            <div className={"relative"}>
                <li onMouseDown={copyPhoneNumber} ref={phoneRef} className={"cursor-pointer"}>06 82 99 85 27</li>
                <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 ${isClicked ? "opacity-100" : "opacity-0"} transition-opacity bg-black bg-opacity-80 rounded-full px-2 py-1 text-white font-thin text-xs`}>
                    <p>Copié!</p>
                </div>
            </div>
            <div className={"flex items-center gap-10"}>
                <Link href={"https://www.facebook.com/profile.php?id=61561080124705"} target={"_blank"}>
                    <Image src={"/images/socials_network/Facebook.png"} alt={"Logo Facebook"} width={40} height={40}/>
                </Link>
                {/*<Image src={"/images/socials_network/Instagram.png"} alt={"Logo Instagram"} width={40} height={40}/>*/}
                <Link href={"https://fr.linkedin.com/company/psdoweb"} target={"_blank"}>
                    <Image src={"/images/socials_network/Linkedin.png"} alt={"Logo Linkedin"} width={40} height={40}/>
                </Link>
            </div>
        </ul>
    </footer>
}