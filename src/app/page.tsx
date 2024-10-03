import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TextSlidin from "@/app/components/TextSlidin";
import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";

export default function Home() {
    return (
        <>
            <Header/>
            <main
                className={"flex flex-col gap-10 items-center bg-[url('/images/utils/background_image.jpg')] bg-center bg-cover w-screen min-h-screen max-h-fit"}>
                <div className={"pt-36 lg:pt-28 flex flex-col md:items-start items-center z-30"}>
                    <TextSlidin/>
                    <p className={"font-almarai font-bold text-2xl sm:text-4xl md:text-5xl xl:text-6xl"}>uniques et sécurisés</p>
                </div>
                <div>
                    <p className={"md:w-[30vw] sm:w-[40vw] w-[65vw] px-2 text-center"}>{"Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible."}</p>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-5 justify-items-center gap-20 p-24"}>
                    <Image src={'/images/icons/figma.png'} alt={'Icone Figma'} height={30} width={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/react.png'} alt={'Icone React'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/tailwindcss.png'} alt={'Icone TailwindCSS'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/nextjs.png'} alt={'Icone NextJS'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/nodejs.png'} alt={'Icone NodeJS'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>

                    <div className={"col-span-1 hidden sm:block"}></div>
                    <Image src={'/images/icons/wordpress.png'} alt={'Icone Wordpress'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/seo.png'} alt={'Icone SEO'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <Image src={'/images/icons/shopify.png'} alt={'Icone Shopify'} width={30} height={30} sizes={"100vw"} className={"w-full min-w-7 max-w-7 h-auto"}/>
                    <div className={"col-span-1 hidden sm:block"}></div>
                </div>
                <div className={"bg-[url('/images/utils/fleche.png')] bg-center bg-contain h-[2rem] sm:h-auto sm:bg-contain w-[80vw] min-w-56 max-w-72 sm:max-w-none sm:w-[40rem] py-2 flex justify-center items-center"}>
                    <CustomButton text={"Nous contacter"}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}
