export default function Category({children, title, anchor}: { children: any, title: string, anchor?: string }) {
    return (
        <div className={"flex flex-col items-center gap-5"} id={anchor}>
            <h4 className={"text-lg"}>{title}</h4>
            <div className={"flex flex-col gap-3"}>
                {children}
            </div>
        </div>
    )
}