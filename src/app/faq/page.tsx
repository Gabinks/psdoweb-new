'use client'
import FaqCategory from "@/app/components/FaqCategory";
export default function Page() {
    return (
        <main className={"flex flex-col items-center gap-20"}>
            <div className={"w-screen flex flex-col items-center gap-5 font-extrabold mt-36 lg:mt-12"}>
                <div className={"flex flex-col items-center"}>
                    <h1 className={"text-4xl"}>Foire aux questions</h1>
                </div>
                <div>
                    <p className={"text-md min-w-20 max-w-72 w-[50vw] text-center"}>Des questions ? Ce guide vous aidera
                        à en savoir plus sur notre plateforme et ses fonctionnalités.</p>
                </div>
            </div>
            <div className={"flex flex-col items-center gap-5"}>
                <FaqCategory title={"Quels services proposez-vous ?"}
                             description={"Nous offrons une gamme complète de services, y compris le développement de sites vitrines, e-commerce et sur mesure, l'optimisation SEO, la conception et le développement d'applications mobiles (iOS et Android), ainsi que l'intégration d'API et des solutions personnalisées."}/>
                <FaqCategory title={"Puis-je vous contacter si je n'ai pas d'idée précise de ce que je veux ?"}
                             description={"Absolument ! Que vous ayez une idée précise ou non, nous sommes là pour vous aider à définir votre projet et à trouver les meilleures solutions adaptées à vos besoins."}/>
                <FaqCategory title={"Comment fonctionne le processus de développement ?"}
                             description={"Notre processus de développement comprend plusieurs étapes clés : consultation initiale, définition du cahier des charges, conception et design, développement, tests et validation, déploiement et mise en ligne, suivi et maintenance."}/>
                <FaqCategory title={"Qu'est-ce qu'un cahier des charges et pourquoi est-il important ?"}
                             description={"Un cahier des charges est un document détaillé qui décrit les exigences et les spécifications de votre projet. Il est essentiel pour garantir que toutes les parties impliquées comprennent bien les attentes et les objectifs du projet."}/>
                <FaqCategory title={"Pouvez-vous m'aider à préparer le cahier des charges ?"}
                             description={"Oui, nous pouvons vous fournir une liste de questions détaillées et vous guider tout au long de la préparation du cahier des charges pour assurer que toutes les informations nécessaires soient incluses."}/>
                <FaqCategory title={"Offrez-vous un support après la livraison du projet ?"}
                             description={"Oui, nous offrons un support technique réactif et une maintenance continue pour assurer la pérennité de vos projets. Cela inclut des mises à jour régulières et une assistance en cas de problèmes techniques."}/>
                <FaqCategory title={"Quelle est la durée de votre support après la mise en ligne du site ?"}
                             description={"Nous offrons différents plans de support et de maintenance adaptés à vos besoins spécifiques. La durée et les détails du support seront définis dans notre contrat de service."}/>
                <FaqCategory title={"Proposez-vous des solutions adaptées à tous les budgets ?"}
                             description={"Oui, nous nous efforçons de proposer des solutions flexibles et adaptées à différents budgets. Nous travaillons avec vous pour trouver la meilleure solution possible en fonction de vos contraintes financières."}/>
                <FaqCategory title={"Comment protégez-vous mes données personnelles ?"}
                             description={"Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos données personnelles, y compris le chiffrement, des pare-feux et des contrôles d'accès stricts."}/>
                <FaqCategory title={"Utilisez-vous des cookies sur votre site web ?"}
                             description={"Oui, notre site utilise des cookies pour améliorer votre expérience utilisateur et pour des analyses statistiques. Vous pouvez gérer et désactiver les cookies à tout moment via les paramètres de votre navigateur."}/>
                <FaqCategory title={"Comment puis-je vous contacter pour discuter de mon projet ?"}
                             description={"Vous pouvez nous contacter par téléphone au 06-82-99-85-27, par e-mail à baptiste.petit@psdoweb.com, ou via notre formulaire de contact sur notre site web. Nous serions ravis de discuter de vos besoins et de voir comment nous pouvons vous aider."}/>
                <FaqCategory title={"Où êtes-vous situés ?"}
                             description={"Nous sommes situés au 2A Rue de l’orangerie, 60000 Beauvais. Nous ne recevons pas de visites pour le moment, mais vous pouvez nous contacter pour toute question."}/>
            </div>
        </main>
    )
}