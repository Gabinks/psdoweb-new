import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";
import Link from "next/link";

function CustomLink({ href, text }: { href: string, text: string }) {
    return <Link href={href}>
        <p className={"text-lg hover:text-gray-500 transition-colors"}>{text}</p>
    </Link>
}

export default function Header() {
    return <header className={"flex items-center justify-between px-32 py-5 drop-shadow-md bg-white"}>
        <div className={"flex gap-3 items-center"}>
            <Image src={"/images/Logo_psdoweb.png"} alt={"Logo psdoweb"} width={50} height={50}/>
            <p className={"text-lg"}>PSDOweb</p>
        </div>
        <div className={"flex items-center gap-5"}>
            <CustomLink href={"/"} text={"L'entreprise"}/>
            <CustomLink href={"/"} text={"Tarifs"}/>
            <CustomLink href={"/"} text={"FAQ"}/>
        </div>
        <div className={"flex items-center gap-3"}>
            <CustomButton text={"Contact"}/>
            <Link href={"/"} className={"group"}>
                <Image src={"/images/logo_linkedin.png"} alt={"Logo linkedin"} width={35} height={35}
                       className={"group-hover:bg-gray-100 transition-colors rounded"}/>
            </Link>
        </div>
    </header>
}