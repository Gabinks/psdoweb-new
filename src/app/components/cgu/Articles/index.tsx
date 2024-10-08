import {ReactNode} from "react";

export default function Articles({children, title, anchor}: {children: ReactNode, title: string, anchor: string}) {
    return (
        <div className={"flex flex-col items-center gap-5 bg-white shadow-inner drop-shadow-lg p-5"} id={anchor}>
            <h3 className={"text-2xl"}>{title}</h3>
            <div className={"w-[80vw] sm:w-[80vw] lg:w-[60vw] xl:w-[40vw] flex flex-col text-sm sm:text-sm lg:text-lg gap-5"}>
                {children}
            </div>
        </div>
    )
}