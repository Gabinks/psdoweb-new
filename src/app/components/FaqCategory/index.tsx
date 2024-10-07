'use client'
import Image from "next/image";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function FaqCategory({title, description}: { title: string, description: string }) {
    const [isopen, setIsopen] = useState(false)
    const clickHandler = () => {
        setIsopen(!isopen)
    }
    return (
        <div className={"px-8 lg:px-16 py-3 bg-white drop-shadow-lg w-[85vw] sm:w-[70vw] md:w-[60vw]"}>
            <button onClick={clickHandler} className={"flex justify-between items-center w-full"}>
                <h3 className={"font-bold w-[35vw] text-xs md:text-sm lg:text-lg px-2 text-left"}>{title}</h3>
                {isopen ? (
                    <AnimatePresence mode={"wait"}>
                        <motion.div initial={{x: -30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{x: -30, opacity: 0}} transition={{duration: 0.6}}>
                            <Image src={"/images/icons/faq_minus.png"}
                                   alt={"Icone dépliant la description de la catégorie"}
                                   width={50} height={50}/>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <motion.div initial={{x: -30, opacity: 0}} whileInView={{x: 0, opacity: 1}}
                                exit={{x: -30, opacity: 0}} transition={{duration: 0.6}}>
                        <Image src={"/images/icons/faq_plus.png"}
                               alt={"Icone repliant la description de la catégorie"}
                               width={50} height={50}/>
                    </motion.div>
                )}

            </button>
            <AnimatePresence initial={false}>
                {isopen && (
                    <motion.div className={"py-5"} initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1}}
                                exit={{y: -50, opacity: 0}} transition={{duration: 0.5, type: "tween", bounce: "0.5"}}>
                        <p className={"font-light text-xs md:text-sm lg:text-lg"}>{description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}