import TextSlidin from "@/app/components/TextSlidin";
import CustomButton from "@/app/components/CustomButton";
import Equipe from "@/app/components/equipe";
import PourquoiNous from "@/app/components/pourquoiNous";
import Conception from "@/app/components/conception";
import SkillsIcons from "@/app/components/SkillsIcons";
import { generatePageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
    return generatePageMetadata({
        title: "Accueil",
        description: "Création de sites internet, e-commerce et optimisation digitale. Votre agence web pour un référencement naturel efficace et un design responsive.",
        keywords: ["création de site", "création de site internet", "e-commerce", "optimisation digitale", "référencement naturel", "responsive design", "agence web", "identité visuelle", "refonte", "projet web"]
    })
}

export default function Home() {
    return (
        <>
            <main
                className={"flex flex-col gap-10 items-center"}>
                <div className={"pt-36 lg:pt-28 flex flex-col md:items-start items-center z-30"}>
                    <TextSlidin />
                    <p className={"font-almarai font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl"}>uniques et
                        sécurisés</p>
                </div>
                <div>
                    <p className={"md:w-[30vw] sm:w-[40vw] w-[65vw] px-2 text-center"}>{"Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible."}</p>
                </div>
                <div className={"grid grid-cols-2 sm:grid-cols-5 justify-items-center gap-20 p-24"}>
                    <SkillsIcons source={"/images/icons/figma.png"} toShow={"Figma"} alt="Design responsive et création d'identité visuelle avec Figma" />
                    <SkillsIcons source={"/images/icons/react.png"} toShow={"React"} alt="Développement d'applications web interactives avec React" />
                    <SkillsIcons source={"/images/icons/tailwindcss.png"} toShow={"TailwindCSS"} alt="Création de sites web modernes et personnalisables avec TailwindCSS" />
                    <SkillsIcons source={"/images/icons/nextjs.png"} toShow={"NextJS"} alt="Création de sites web performants et optimisés pour le SEO avec Next.js" />
                    <SkillsIcons source={"/images/icons/nodejs.png"} toShow={"NodeJS"} alt="Développement backend robuste avec Node.js pour vos projets web" />

                    <div className={"col-span-1 hidden sm:block"}></div>
                    <SkillsIcons source={"/images/icons/wordpress.png"} toShow={"Wordpress"} alt="Création de sites internet et gestion de contenu avec WordPress" />
                    <SkillsIcons source={"/images/icons/seo.png"} toShow={"SEO"} alt="Optimisation du référencement naturel pour une meilleure visibilité en ligne" />
                    <SkillsIcons source={"/images/icons/shopify.png"} toShow={"Shopify"} alt="Création de sites e-commerce performants avec Shopify" />
                    <div className={"col-span-1 hidden sm:block"}></div>
                </div>
                <div
                    className={"bg-[url('/images/utils/fleche.png')] bg-center bg-contain h-[2rem] sm:h-auto sm:bg-contain w-[80vw] min-w-56 max-w-72 sm:max-w-none sm:w-[40rem] py-2 flex justify-center items-center"}>
                    <CustomButton text={"Nous contacter"} />
                </div>
                <Equipe />
                <PourquoiNous />
                <Conception />
            </main>
        </>
    );
}
