export default function TextSlidin() {
    return <div
        className="relative z-10 font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl [text-wrap:balance]">Créez
        des <span
            className="pl-4 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] xl:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
    <ul className="block z-1 animate-text-slide-4 text-left leading-tight [&_li]:block" aria-hidden={true}>
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>sites web</li>
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>landing pages</li>
        <li className={"bg-clip-text text-transparent bg-gradient-to-b from-white to-black"}>applications</li>
    </ul>
            <p className={"sr-only"}>sites web, landing pages et applications</p>
</span></div>
}
