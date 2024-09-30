export default function TextSlidin() {
    return <div
        className="font-bold text-5xl md:text-6xl [text-wrap:balance]">Créez des <span
        className="pl-4 inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
    <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>sites web</li>
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>landing page</li>
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>application</li>
    </ul>
</span></div>
}