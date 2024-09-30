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
                <div className={"pt-28"}>
                    <TextSlidin/>
                    <p className={"font-almarai font-bold text-5xl md:text-6xl"}>uniques et sécurisés</p>
                </div>
                <div>
                    <p className={"md:w-[30vw] text-center"}>{"Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible."}</p>
                </div>
                <div className={"grid grid-cols-5 justify-items-center gap-20 p-24"}>
                    <Image src={'/images/icons/figma.png'} alt={'Icone Figma'} width={30} height={30}/>
                    <Image src={'/images/icons/react.png'} alt={'Icone React'} width={30} height={30}/>
                    <Image src={'/images/icons/tailwindcss.png'} alt={'Icone TailwindCSS'} width={30} height={30}/>
                    <Image src={'/images/icons/nextjs.png'} alt={'Icone NextJS'} width={30} height={30}/>
                    <Image src={'/images/icons/nodejs.png'} alt={'Icone NodeJS'} width={30} height={30}/>

                    <div className={"col-span-1"}></div>
                    <Image src={'/images/icons/wordpress.png'} alt={'Icone Wordpress'} width={30} height={30}/>
                    <Image src={'/images/icons/seo.png'} alt={'Icone SEO'} width={30} height={30}/>
                    <Image src={'/images/icons/shopify.png'} alt={'Icone Shopify'} width={30} height={30}/>
                    <div className={"col-span-1"}></div>
                </div>
                <div className={"bg-[url('/images/utils/fleche.png')] bg-center bg-contain w-[35vw] py-2 flex justify-center items-center"}>
                    <CustomButton text={"Nous contacter"}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}
