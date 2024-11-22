"use client";

export default function PourquoiNous() {
    return (
        <section className="py-16 px-4" id={"entreprise"}>
            <h2 className="text-4xl font-bold text-center mb-12 below-lg:text-3xl">
                Pourquoi choisir PSDO pour votre site web ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Professionnel */}
                <article className="border p-6 rounded-lg shadow-md max-w-full ">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">P</span>rofessionnel
                    </h3>
                    <p>
                        {"Nous croyons en l'innovation et en la croissance continue. PSDO s'engage à vous accompagner dans le développement de votre présence en ligne en vous fournissant des outils et des stratégies qui favorisent votre expansion et votre réussite à long terme. Découvrez nos "}
                        <a href="/services" className="text-blue-600 hover:underline">services de création de sites web</a>
                        {" pour en savoir plus."}
                    </p>

                </article>

                {/* Sécurité */}
                <article className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">S</span>écurité
                    </h3>
                    <p>
                        {"La sécurité de votre site web est notre priorité absolue. Nous intégrons les technologies les plus avancées et les protocoles de sécurité les plus rigoureux. Vous avez des questions sur notre approche de la sécurité ? Consultez notre "}
                        <a href="/faq" className="text-blue-600 hover:underline">FAQ sur la sécurité web</a>
                        {" pour plus d'informations."}
                    </p>
                </article>

                {/* Développement */}
                <article className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">D</span>éveloppement
                    </h3>
                    <p>
                        {"Nous croyons en l'innovation et en la croissance continue. PSDO s'engage à vous accompagner dans le développement de votre présence en ligne. Vous voulez en savoir plus sur nos processus ? Jetez un œil à nos "}
                        <a href="/tarifs" className="text-blue-600 hover:underline">forfaits de développement web</a>
                        {" et à notre "}
                        <a href="/faq" className="text-blue-600 hover:underline">FAQ détaillée</a>
                        {"."}
                    </p>

                </article>

                {/* Originalité */}
                <article className="border p-6 rounded-lg shadow-md max-w-full">
                    <h3 className="font-bold mb-4">
                        <span className="text-5xl text-gradient">O</span>riginalité
                    </h3>
                    <p>
                        {"Dans un monde en constante évolution, se démarquer est essentiel. PSDO vous aide à créer des solutions uniques et innovantes qui reflètent votre identité. Curieux de savoir comment nous travaillons ? Consultez notre "}
                        <a href="/faq" className="text-blue-600 hover:underline">FAQ sur nos méthodes de création</a>
                        {" ou découvrez nos "}
                        <a href="/tarifs" className="text-blue-600 hover:underline">options de personnalisation</a>
                        {"."}
                    </p>
                </article>
            </div>
        </section>
    );
}
