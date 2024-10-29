import Tarif from "../components/tarifComponents";
import {generatePageMetadata} from "@/utils/metadata";

export async function generateMetadata(){
    return generatePageMetadata({
        title: "Tarifs",
        description: "Découvrez nos tarifs compétitifs pour la création de sites web professionnels. Forfaits adaptés à tous les budgets, de la TPE aux grandes entreprises. Devis personnalisé gratuit.",
        keywords: ["tarifs création site web", "prix site internet", "forfaits web", "devis site internet", "coût développement web", "tarification web sur-mesure"]
    })
}
export default function Page() {
    return (
        <>
            <main className="">
                <Tarif/>
            </main>
        </>
    )
}