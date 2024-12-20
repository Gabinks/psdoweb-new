import {ReactNode} from "react";

export default function Category({children, title, anchor}: { children: ReactNode, title: string, anchor?: string }) {
    return (
        <div className={"flex flex-col items-center gap-5"} id={anchor}>
            <h4 className={"text-2xl xl:text-3xl"}>{title}</h4>
            <div className={"flex flex-col gap-3"}>
                {children}
            </div>
        </div>
    )
}