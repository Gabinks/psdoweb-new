"use client";

export default function PourquoiNous() {
    return (
        <div className="py-16 px-4" id={"entreprise"}>
            <h2 className="text-4xl font-bold text-center mb-12 below-lg:text-3xl">
                Pourquoi choisir PSDO pour votre site web ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Professionnel */}
                <section className="border p-6 rounded-lg shadow-md max-w-full ">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">P</span>rofessionnel
                    </h3>
                    <p className="">
                        {"Chez PSDO, nous mettons un point d'honneur à offrir un service de qualité supérieure. Nos équipes sont composées de professionnels expérimentés qui s'engagent à vous fournir des solutions adaptées à vos besoins spécifiques, tout en respectant les normes les plus strictes de l'industrie."}
                    </p>
                </section>

                {/* Sécurité */}
                <section className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">S</span>écurité
                    </h3>
                    <p className="">
                        {"Votre sécurité est notre priorité absolue. Nous intégrons les technologies les plus avancées et les protocoles de sécurité les plus rigoureux pour protéger vos données et vos actifs. Avec PSDO, vous pouvez avoir l'esprit tranquille, sachant que votre entreprise est entre de bonnes mains."}
                    </p>
                </section>

                {/* Développement */}
                <section className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">D</span>éveloppement
                    </h3>
                    <p className="">
                        {"Nous croyons en l'innovation et en la croissance continue. PSDO s'engage à vous accompagner dans le développement de votre entreprise en vous fournissant des outils et des stratégies qui favorisent votre expansion et votre réussite à long terme."}
                    </p>
                </section>

                {/* Originalité */}
                <section className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">O</span>riginalité
                    </h3>
                    <p className="">
                        {"Dans un monde en constante évolution, se démarquer est essentiel. PSDO vous aide à créer des solutions uniques et innovantes qui reflètent votre identité et captivent votre audience. Nous mettons notre créativité à votre service pour vous aider à vous démarquer de la concurrence."}
                    </p>
                </section>
            </div>
        </div>
    );
}
