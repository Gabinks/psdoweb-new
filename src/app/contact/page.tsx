import Contact from "@/app/components/contact";
import {generatePageMetadata} from "@/utils/metadata";
import React from "react";

export async function generateMetadata(){
    return generatePageMetadata({
        title: "Contactez-nous",
        description: "Besoin d'un site web sur mesure ? Contactez notre équipe d'experts en création de sites web. Devis gratuit, conseils personnalisés et accompagnement pour concrétiser votre projet digital.",
        keywords: ["contact", "agence web", "création site internet", "devis gratuit", "projet web", "développement web", "consultation web"]

    })
}
export default function Page(){
    return <Contact/>
}