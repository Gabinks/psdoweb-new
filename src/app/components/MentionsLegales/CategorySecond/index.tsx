export default function CategorySecond({title, description, anchor}: {title: string, description: string, anchor?: string}) {
    return (
        <div
            className={"bg-white backdrop-blur shadow-inner drop-shadow w-[85vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] flex flex-col items-center gap-2 p-2"} id={`${anchor}`}>
            <h4 className={"font-bold text-xl"}>{title}</h4>
            <p className={"font-thin leading-loose text-lg"}>{description}</p>
        </div>
    )
}