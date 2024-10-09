'use client'
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";

import {useState} from "react";

function CustomLink({href, text}: { href: string, text: string }) {
    return <Link href={href}>
        <p className={"text-lg hover:text-gray-500 transition-colors"}>{text}</p>
    </Link>
}

export default function Header() {
    const [isclicked, setIsclicked] = useState(false)

    const clickHandler = () => {
        setIsclicked(!isclicked)
    }

    return <header
        className={"fixed lg:relative top-0 w-full flex items-center justify-between z-50 px-12 sm:px-32 py-5 drop-shadow-md bg-white"}>
        <Link href={"/"} className={"flex gap-3 items-center"}>
            <Image src={"/images/Logo_psdoweb.png"} alt={"Logo psdoweb"} width={50} height={50} sizes={"100vw"} className={"w-9 sm:w-12 h-auto "}/>
            <p className={"text-sm sm:text-lg"}>PSDOweb</p>
        </Link>
        <div className={"lg:flex hidden items-center gap-5"}>
            <CustomLink href={"/"} text={"L'entreprise"}/>
            <CustomLink href={"/"} text={"Tarifs"}/>
            <CustomLink href={"/faq"} text={"FAQ"}/>
        </div>
        <div className={"lg:flex hidden items-center gap-3"}>
            <CustomButton text={"Contact"}/>
            <Link href={"/"} className={"group"}>
                <Image src={"/images/logo_linkedin.png"} alt={"Logo linkedin"} width={35} height={35}
                       className={"group-hover:bg-gray-100 transition-colors rounded"}/>
            </Link>
        </div>
        <div className={"relative lg:hidden flex items-center justify-center"}>
            <button onClick={clickHandler}>
                {isclicked ? (
                    <AnimatePresence>
                        <motion.svg className={"w-7 sm:w-10 h-auto"} initial={{opacity: 0, translateX: -10}} whileInView={{opacity: 1, translateX: 0}}
                                    transition={{duration: 1}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 50 50">
                            <path
                                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </motion.svg>
                    </AnimatePresence>
                ) : (
                    <motion.svg className={"w-7 sm:w-10 h-auto"} initial={{opacity: 0, translateX: 10}} whileInView={{opacity: 1, translateX: 0}}
                                transition={{duration: 1}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="35"
                                height="35"
                                viewBox="0 0 50 50">
                        <path
                            d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                    </motion.svg>
                )}

            </button>
            <AnimatePresence mode={"wait"} initial={false}>
                {isclicked && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: .4}}
                        className="absolute z-40 top-12 left-1/2 transform -translate-x-1/2 bg-white w-fit flex flex-col gap-5 px-5 py-3 drop-shadow rounded-lg"
                    >
                        <ul className={"flex flex-col gap-3"} onClick={clickHandler}>
                            <Link href={"/"}>
                                <li>{"L'entreprise"}</li>
                            </Link>
                            <Link href={"/"}>
                                <li>Tarifs</li>
                            </Link>
                            <Link href={"/faq"}>
                                <li>FAQ</li>
                            </Link>
                        </ul>
                        <div className={"flex flex-col sm:flex-row items-center gap-3"}>
                            <CustomButton text={"Contact"}/>
                            <Link href={"/"} className={"group"}>
                                <Image
                                    src={"/images/logo_linkedin.png"}
                                    alt={"Logo linkedin"}
                                    width={35}
                                    height={35}
                                    sizes={"100vw"}
                                    className={"group-hover:bg-gray-100 transition-colors rounded min-w-10 max-w-10 w-full"}
                                />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </header>
}