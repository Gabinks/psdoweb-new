'use client'
import Image from "next/image";
import {useState, useEffect, useRef} from "react";

export default function SkillsIcons({source, alt}: {source: string; alt: string}) {
    const [isClicked, setIsClicked] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    const clickHandler = () => {
        setIsClicked(!isClicked);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        if (isClicked) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isClicked]);

    return (
        <div className={"relative"} ref={iconRef}>
            <Image
                src={source}
                alt={`Icone ${alt}`}
                width={30}
                height={30}
                onClick={clickHandler}
                sizes={"100vw"}
                className={"w-full min-w-7 max-w-7 h-auto cursor-pointer"}
            />
            <div className={`${isClicked ? "opacity-100" : "opacity-0"} absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 drop-shadow-lg  text-white font-thin px-3 py-1 rounded-full text-sm transition-opacity duration-300`}>
                <p>{alt}</p>
            </div>
        </div>
    );
}