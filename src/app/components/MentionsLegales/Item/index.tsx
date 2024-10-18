export default function Item({primary, secondary}: {primary: string, secondary: string}) {
    return (
        <div className={"bg-white backdrop-blur shadow-inner drop-shadow w-[85vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] flex flex-col gap-2 p-2"}>
            <h5 className={"font-bold text-lg sm:text-xl xl:text-2xl"}>{primary}</h5>
            <p className={"font-thin text-base sm:text-lg xl:text-xl"}>{secondary}</p>
        </div>
    )
}