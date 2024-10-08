import Link from "next/link";
import Image from "next/image";

export default function CustomLink({text, anchor}: {text: string, anchor?: string}) {
    return (
        <Link className={"flex justify-between items-center group max-w-48 gap-2 text-sm sm:text-base"} href={`#${anchor}`}>{text}
            <Image src={"/images/icons/arrow.png"} alt={"fleche"} className={"group-hover:translate-x-1.5 transition-transform"} width={20} height={20}/>
        </Link>
    )
}