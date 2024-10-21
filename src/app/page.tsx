import TextSlidin from "@/app/components/TextSlidin";
import CustomButton from "@/app/components/CustomButton";
import Equipe from "@/app/components/equipe";
import PourquoiNous from "@/app/components/pourquoiNous";
import Conception from "@/app/components/conception";
import SkillsIcons from "@/app/components/SkillsIcons";

export default function Home() {
    return (
        <>
            <main
                className={"flex flex-col gap-10 items-center"}>
                <div className={"pt-36 lg:pt-28 flex flex-col md:items-start items-center z-30"}>
                    <TextSlidin/>
                    <p className={"font-almarai font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl"}>uniques et sécurisés</p>
                </div>
                <div>
                    <p className={"md:w-[30vw] sm:w-[40vw] w-[65vw] px-2 text-center"}>{"Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible."}</p>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-5 justify-items-center gap-20 p-24"}>
                    <SkillsIcons source={"/images/icons/figma.png"} alt={"Figma"}/>
                    <SkillsIcons source={"/images/icons/react.png"} alt={"React"}/>
                    <SkillsIcons source={"/images/icons/tailwindcss.png"} alt={"TailwindCSS"}/>
                    <SkillsIcons source={"/images/icons/nextjs.png"} alt={"NextJS"}/>
                    <SkillsIcons source={"/images/icons/nodejs.png"} alt={"NodeJS"}/>

                    <div className={"col-span-1 hidden sm:block"}></div>
                    <SkillsIcons source={"/images/icons/wordpress.png"} alt={"Wordpress"}/>
                    <SkillsIcons source={"/images/icons/seo.png"} alt={"SEO"}/>
                    <SkillsIcons source={"/images/icons/shopify.png"} alt={"Shopify"}/>
                    <div className={"col-span-1 hidden sm:block"}></div>
                </div>
                <div className={"bg-[url('/images/utils/fleche.png')] bg-center bg-contain h-[2rem] sm:h-auto sm:bg-contain w-[80vw] min-w-56 max-w-72 sm:max-w-none sm:w-[40rem] py-2 flex justify-center items-center"}>
                    <CustomButton text={"Nous contacter"}/>
                </div>
                <Equipe/>
                <PourquoiNous/>
                <Conception/>
            </main>
        </>
    );
}
