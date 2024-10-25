'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqCategory({ title, description }: { title: string; description: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(!isOpen);
    };

    const buttonVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 },
    };

    return (
        <div className="px-8 lg:px-16 py-3 bg-white drop-shadow-lg w-[85vw] sm:w-[70vw] md:w-[60vw] hover:bg-gray-50 transition-colors">
            <button onClick={clickHandler} className="flex justify-between items-center w-full">
                <h3 className="font-bold w-[35vw] text-xs md:text-sm lg:text-lg px-2 text-left">{title}</h3>
                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={buttonVariants}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={isOpen ? "/images/icons/faq_minus.png" : "/images/icons/faq_plus.png"}
                        alt="Icone dépliant ou repliant la description de la catégorie"
                        width={50} height={50}
                    />
                </motion.div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden py-2"
            >
                <p className="font-light text-xs md:text-sm lg:text-lg">{description}</p>
            </motion.div>
        </div>
    );
}
