'use client'
import Image from "next/image";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function FaqCategory({title, description}: { title: string, description: string }) {
    const [isopen, setIsopen] = useState(false)

    const clickHandler = () => {
        setIsopen(!isopen)
    }
    const hoverVariants = {}

    const buttonVariants = {
        closed: {rotate: 0},
        open: {rotate: 180},
    }

    const accordionVariants = {
        rest: {y: -30, opacity: 0, display: "none", transition: {duration: 0.6}},
        open: {y: 0, opacity: 1, display: "block", transition: {duration: 0.6}},
    }

    return (
        <motion.div className={"px-8 lg:px-16 py-3 bg-white drop-shadow-lg w-[85vw] sm:w-[70vw] md:w-[60vw]"}
                    whileHover={{borderWidth: 3, borderColor: "lightgray"}}
                    transition={{duration: 0.6, type: "spring"}}>
            <button onClick={clickHandler} className={"flex justify-between items-center w-full"}>
                <h3 className={"font-bold w-[35vw] text-xs md:text-sm lg:text-lg px-2 text-left"}>{title}</h3>
                <motion.div
                    animate={isopen ? "open" : "closed"}
                    variants={buttonVariants}
                    transition={{duration: 0.5}}
                >
                    <Image
                        src={isopen ? "/images/icons/faq_minus.png" : "/images/icons/faq_plus.png"}
                        alt={"Icone dépliant ou repliant la description de la catégorie"}
                        width={50} height={50}
                    />
                </motion.div>
            </button>
            <motion.div
                className={"py-5 w-full h-full"}
                initial={"rest"}
                animate={isopen ? "open" : "rest"}
                variants={accordionVariants}
            >
                <p className={"font-light text-xs md:text-sm lg:text-lg"}>{description}</p>
            </motion.div>
        </motion.div>
    )
}
