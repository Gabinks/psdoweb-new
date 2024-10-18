import Link from "next/link";
import {MouseEventHandler} from "react";

export default function CustomButton({text, clickEvent}: {text: string, clickEvent?: MouseEventHandler}) {
    return <Link href={"/contact"} className={"bg-yellow px-4 py-1 rounded-lg border border-black border-opacity-60 hover:bg-yellow-hover transition-colors"} onClick={clickEvent}>{text}</Link>
}