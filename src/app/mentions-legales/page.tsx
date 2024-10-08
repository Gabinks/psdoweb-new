import Category from "@/app/components/MentionsLegales/Category";
import Item from "@/app/components/MentionsLegales/Item";
import CategorySecond from "@/app/components/MentionsLegales/CategorySecond";
import CustomLink from "@/app/components/MentionsLegales/CustomLink";

export default function Page() {
    return (
        <main className={"flex flex-col items-center gap-20"}>
            <div className={"flex flex-col items-center gap-5 pt-44 lg:pt-20"}>
                <h1 className={"text-2xl sm:text-4xl font-extrabold"}>Mentions légales</h1>
                <h2 className={"w-[80vw] lg:w-[30vw] font-extrabold text-center text-sm sm:text-lg"}>{"Découvrez nos mentions légales pour en savoir plus sur les informations légales relatives à notre entreprise, y compris les conditions d'utilisation, la politique de confidentialité, et les détails de contact."}</h2>
            </div>
            <div className={"flex flex-col items-center gap-3 shadow-inner drop-shadow bg-white p-5"}>
                <h3 className={"text-2xl font-bold"}>Sommaire</h3>
                <ul className={"flex flex-col gap-3 text-lg"}>
                    <CustomLink text={"Editeur du site"} anchor={"editor"}/>
                    <CustomLink text={"Directeur de la publication"} anchor={"publish"}/>
                    <CustomLink text={"Hébergeur du site"} anchor={"hoster"}/>
                    <CustomLink text={"Propriété intellectuelle"} anchor={"property"}/>
                    <CustomLink text={"Condition d'utilisation"} anchor={"condition"}/>
                    <CustomLink text={"Cookies"} anchor={"cookie"}/>
                </ul>
            </div>
            <div className={"py-10 flex flex-col items-center gap-10"}>
                <Category title={"Editeur du site"} anchor={"editor"}>
                    <Item primary={"Nom de l'entreprise"} secondary={"PSDOweb"}/>
                    <Item primary={"Forme juridique"} secondary={"Société à responsabilité limitée (SARL)"}/>
                    <Item primary={"Adresse du siège social"} secondary={"2A rue de l'Orangerie, 60000 Beauvais"}/>
                    <Item primary={"Numéro de téléphone"} secondary={"06-82-99-85-27"}/>
                    <Item primary={"Adresse e-mail"} secondary={"baptiste.petit@psdoweb.com"}/>
                    <Item primary={"Numéro d'inscription au RCS"} secondary={"929 021 145"}/>
                    <Item primary={"Numéro de TVA intracommunautaire"} secondary={"FR83929021145"}/>
                    <Item primary={"Capital social"} secondary={"100€"}/>
                </Category>
                <Category title={"Directeur de la publication"} anchor={"publish"}>
                    <Item primary={"Nom et prénom"} secondary={"Petit Baptiste"}/>
                    <Item primary={"Statut"} secondary={"Gérant"}/>
                </Category>
                <Category title={"Hébergeur du site"} anchor={"hoster"}>
                    <Item primary={"Nom de l'hébergeur"} secondary={"OVHCloud"}/>
                    <Item primary={"Adresse de l'hébergeur"} secondary={"2 rue Kellermann - 59100 Roubaix - France"}/>
                    <Item primary={"Numéro de téléphone de l'hébergeur"} secondary={"Non référencé."}/>
                </Category>
                <CategorySecond anchor={"property"} title={"Propriété intellectuelle"} description={"L'intégralité du contenu du site PSDOweb est protégée par les lois françaises et internationales relatives à la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris les documents téléchargeables et les représentations iconographiques et photographiques."}/>
                <CategorySecond anchor={"condition"} title={"Condition d'utilisation"} description={"L'utilisation du site PSDOweb implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation peuvent être modifiées ou complétées à tout moment, les utilisateurs du site PSDOweb sont donc invités à les consulter de manière régulière."}/>
                <CategorySecond anchor={"protection"} title={"Protection des données personnelles"} description={"Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification, de modification et de suppression des données vous concernant. Vous pouvez exercer ce droit en envoyant un courrier à l'adresse suivante : 2A rue de l'Orangerie, 60000 Beauvais ou par email à baptiste.petit@psdoweb.com ."}/>
                <CategorySecond anchor={"cookie"} title={"Cookies"} description={"Le site PSDOweb peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations."}/>
            </div>
        </main>
    )
}