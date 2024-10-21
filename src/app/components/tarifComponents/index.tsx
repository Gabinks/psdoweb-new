"use client";

import PriceCard from "@/app/components/PriceCard";

export default function Tarif() {
  return (
    <section className="p-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center below-lg:m-14">
        Trouver le site qui vous correspond
        </h2>
        <div className="space-y-6">
            <PriceCard title={"Site vitrine"} description={"Un site web simple présentant les informations sur une entreprise ou un individu."} price={"Entre 1 500 € et 3 000 €"} source={"Vitrine"}/>
            <PriceCard title={"Site e-commerce"} description={"Un site permettant de vendre des produits ou des services en ligne."} price={"Entre 1 500 € et 8 000 €"} source={"E-commerce"}/>
            <PriceCard title={"Site blog"} description={"Un site dédié à la publication régulière de contenu."} price={"Entre 1 500 € et 8 000 €"} source={"Blog"}/>
            <PriceCard title={"Site Web d'Entreprise"} description={"Un site web complet pour une entreprise avec des informations détaillées sur ses activités, ses produits, ses services et ses actualités."} price={"Entre 3 000 € et 50 000 €"} source={"Entreprise"}/>
            <PriceCard title={"Site Forum"} description={"Un site web permettant aux utilisateurs de discuter, de partager des informations et de créer des communautés en ligne."} price={"Entre 2 000 € et 10 000 €"} source={"Forum"}/>
            <PriceCard title={"Site Événementiel"} description={"Un site web dédié à un événement"} price={"Entre 2 000 € et 10 000 €"} source={"Evenementiel"}/>
            <PriceCard title={"Site de Réservation"} description={"Un site web permettant aux utilisateurs de réserver des services en ligne"} price={"Entre 3 000 € et 15 000 €"} source={"Reservation"}/>
        </div>
    </section>
  );
}
