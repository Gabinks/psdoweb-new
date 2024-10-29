import Link from "next/link";
import Image from "next/image";
import Articles from "@/app/components/cgu/Articles";
import {generatePageMetadata} from "@/utils/metadata";

export async function generateMetadata() {
    return generatePageMetadata({
        title: "Conditions Générale d'Utilisation",
        description: "Consultez nos Conditions Générales d'Utilisation pour comprendre vos droits et responsabilités lors de l'utilisation de nos services de création de sites web. Transparence et confiance sont au cœur de notre relation client.",
        keywords: ["CGU", "conditions générales d'utilisation", "termes et conditions", "politique d'utilisation", "création de sites web", "services web", "droits utilisateurs"]
    })
}

export default function Page() {
    return (
        <>
            <main className={"flex flex-col items-center gap-20"}>
                <div className={"flex flex-col items-center gap-5 pt-44 lg:pt-20"}>
                    <h1 className={"text-xl sm:text-4xl text-center font-extrabold"}>{"Conditions Générales d'Utilisation"}</h1>
                    <h2 className={"w-[80vw] lg:w-[30vw] font-extrabold text-center text-sm sm:text-lg"}>{"Découvrez nos mentions légales pour en savoir plus sur les conditions d'utilisation relatives à notre entreprise."}</h2>
                </div>
                <div
                    className={"bg-white py-5 px-10 w-72 xl:w-[30vw] shadow-inner drop-shadow flex flex-col gap-5 mx-5 sm:mx-0"}>
                    <h4 className={"text-xl xl:text-2xl font-bold self-center"}>Sommaire des articles</h4>
                    <ul className={"list-decimal text-base sm:text-lg xl:text-xl flex flex-col gap-3"}>
                        <li>
                            <Link href={"#1"}
                                  className={"flex items-center justify-between group hover:underline"}>Objet <Image
                                src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#2"} className={"flex items-center justify-between group hover:underline"}>Mentions
                                légales <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#3"} className={"flex items-center justify-between group hover:underline"}>Accès
                                au
                                site <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#4"} className={"flex items-center justify-between group hover:underline"}>Collecte
                                de
                                données <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#5"} className={"flex items-center justify-between group hover:underline"}>Propriété
                                intellectuelle <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#6"}
                                  className={"flex items-center justify-between group hover:underline"}>Responsabilité <Image
                                src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#7"} className={"flex items-center justify-between group hover:underline"}>Liens
                                hypertextes <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#8"}
                                  className={"flex items-center justify-between group hover:underline"}>Cookie <Image
                                src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                        <li>
                            <Link href={"#9"} className={"flex items-center justify-between group hover:underline"}>Droit
                                applicable et juridiction compétente <Image
                                    src={"/images/icons/arrow.png"} alt={"fleche"} width={20} height={20}
                                    className={"group-hover:translate-x-1.5 transition-transform"}/></Link>
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-20 px-5 sm:px-0"}>
                    <Articles title={"Article 1 : Objet"} anchor={"1"}>
                        <p>{"Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique des modalités de mise à disposition des services du site PSDOweb et leur utilisation par «l'Utilisateur »."}</p>
                        <p>{"Les CGU doivent être acceptées par tout Utilisateur souhaitant accéder au site. Elles constituent le contrat entre le site et l'Utilisateur. L’accès au site par l'Utilisateur signifie son acceptation des présentes CGU."}</p>
                        <p>{"En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site."}</p>
                    </Articles>
                    <Articles title={"Article 2 : Mentions légales"} anchor={"2"}>
                        <p>{"Le site PSDOweb est édité par Petit Baptiste, SARL au capital de 100€ , dont le siège social est situé à 2A rue de l’orangerie , 60000 Beauvais."}</p>
                        <p>{"Numéro de téléphone :06-82-99-85-27"}</p>
                        <p>{"Adresse e-mail : baptiste.petit@psdoweb.com"}</p>
                        <p>{"Numéro d'inscription au RCS : 929 021 145 "}</p>
                        <p>{"Numéro de TVA intracommunautaire : FR83929021145"}</p>
                        <p>{"Le Directeur de la publication est Petit Baptiste."}</p>
                        <p>{"Le site PSDOweb est hébergé par ovhcloud, situé à 2 rue Kellermann, 59100 Roubaix France."}</p>
                    </Articles>
                    <Articles title={"Article 3 : Accès au site"} anchor={"3"}>
                        <p>{"Le site PSDOweb permet à l'Utilisateur un accès gratuit aux services suivants :"}</p>
                        <p>{"Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge."}</p>
                    </Articles>
                    <Articles title={"Article 4 : Collecte des données"} anchor={"4"}>
                        <p>{"Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés."}</p>
                        <p>{"En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit via :"}</p>
                        <div className={"self-center"}>
                            <li>Son espace personnel sur le site</li>
                            <li>Un formulaire de contact</li>
                            <li>Par mail à baptiste.petit@psdoweb.com</li>
                            <li>Par voie postale à 2A rue de l’orangerie , 60000 Beauvais.</li>
                        </div>
                    </Articles>
                    <Articles title={"Article 5 : Propriété intellectuelle"} anchor={"5"}>
                        <p>{"Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son, etc.) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur."}</p>
                        <p>{"L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé ; toute utilisation à des fins commerciales et publicitaires est strictement interdite."}</p>
                    </Articles>
                    <Articles title={"Article 6 : Responsabilité"} anchor={"6"}>
                        <p>{"Les sources des informations diffusées sur le site PSDOweb sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions."}</p>
                        <p>{"Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site PSDOweb ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenu responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site."}</p>
                        <p>{"L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité."}</p>
                        <p>{"Le site PSDOweb ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site."}</p>
                        <p>{"La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers."}</p>
                    </Articles>
                    <Articles title={"Article 7 : Liens hypertextes"} anchor={"7"}>
                        <p>{"Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site PSDOweb. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu."}</p>
                    </Articles>
                    <Articles title={"Article 8 : Cookies"} anchor={"8"}>
                        <p>{"L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation."}</p>
                        <p>{"Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l'ordinateur de l'Utilisateur par votre navigateur et qui sont nécessaires à l'utilisation du site PSDOweb. Les cookies ne contiennent pas d'information personnelle et ne peuvent pas être utilisés pour identifier quelqu'un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l'Utilisateur, d'autres restent."}</p>
                        <p>{"L'information contenue dans les cookies est utilisée pour améliorer le site PSDOweb."}</p>
                        <p>{"L'Utilisateur pourra désactiver ces cookies par l'intermédiaire des paramètres figurant au sein de son logiciel de navigation."}</p>
                    </Articles>
                    <Articles title={"Article 9 : Droit applicable et juridiction compétente"} anchor={"9"}>
                        <p>{"La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître."}</p>
                        <p>{"Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées inscrites à l'Article 2."}</p>
                        <p>{"Fait à Beauvais, le 21/05/2024 "}</p>
                    </Articles>
                </div>
            </main>
        </>
    )
}