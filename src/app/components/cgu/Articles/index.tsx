import {ReactNode} from "react";

export default function Articles({children, title, anchor}: {children: ReactNode, title: string, anchor: string}) {
    return (
        <div className={"flex flex-col items-center gap-5 bg-white shadow-inner drop-shadow-lg p-5"} id={anchor}>
            <h3 className={"text-xl lg:text-2xl xl:text-3xl font-bold"}>{title}</h3>
            <div className={"sm:w-[80vw] lg:w-[60vw] xl:w-[40vw] flex flex-col text-base sm:text-lg xl:text-xl font-thin gap-5"}>
                {children}
            </div>
        </div>
    )
}