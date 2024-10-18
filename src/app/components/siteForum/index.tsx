"use client";
import Link from "next/link";


export default function SiteForum() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md flex justify-between items-center flex-row below-xg:flex-col below-xg:items-start">
        <div>
            <h3 className="text-4xl font-bold mb-2 below-xg:text-3xl">Site Forum</h3>
            <p className=" mb-2 font-bold text-xl">
            Un site web permettant aux utilisateurs de discuter, de partager des informations et de créer des communautés en ligne.
            </p>
            <a href="#" className="text-blue-500 underline mb-2 hidden">
                Un lien exemple ici
            </a>
        </div>
        <div className="text-right below-xg:text-left">
            <p className="text-gray-500">Prix estimé HT</p>
            <p className="text-2xl font-bold mb-4 whitespace-nowrap below-lg:text-xl">Entre 2 000 € et 10 000 €</p>
            <Link href={{
                pathname: "/contact", // La page de destination
                query: { source: "Forum" }, // Paramètre envoyé à la page
                }}
                className="bg-yellow px-4 py-1 rounded-lg border border-black border-opacity-60 hover:bg-yellow-hover transition-colors p-2 pt-2 pb-2">
                Contactez-nous
            </Link>
        </div>
    </section>
  );
}
