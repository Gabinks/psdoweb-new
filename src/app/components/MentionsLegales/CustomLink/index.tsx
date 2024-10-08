import Link from "next/link";
import Image from "next/image";

export default function CustomLink({text, anchor}: {text: string, anchor?: string}) {
    return (
        <Link className={"flex gap-3 items-center group"} href={`#${anchor}`}>{text}
            <Image src={"/images/icons/arrow.png"} alt={"fleche"} className={"group-hover:translate-x-1.5 transition-transform"} width={20} height={20}/>
        </Link>
    )
}