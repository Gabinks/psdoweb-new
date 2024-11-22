import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
    title: {
        template: '%s | PSDOweb',
        default: 'PSDOweb - Création de sites web innovants',
    },
    description: "Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible.",
    keywords: ['création de site web', 'développement web', 'design responsive', 'SEO', 'Webdesign', 'Expérience Utilisateur', 'Conception de site', 'Web-Design', 'Création de site web', 'Créer un site', 'Responsive Design', 'Ergonomie', 'Vitrine', 'Refonte', 'Projet web', 'Adwords', 'CMS', 'Optimisation moteur de recherche'],
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://www.psdoweb.com',
        siteName: 'PSDOweb',
        images: [
            {
                url: 'https://www.psdoweb.com/images/Logo_psdoweb.png',
                width: 1200,
                height: 630,
                alt: 'PSDOweb - Création de sites web innovants',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image', // Type de carte
        site: '@psdoweb', // Nom d'utilisateur Twitter du site
        creator: '@psdoweb', // Nom d'utilisateur Twitter du créateur
        title: 'PSDOweb - Création de sites web innovants', // Titre
        description: "Nous transformons vos idées en expériences numériques innovantes.", // Description
        images: 'https://www.psdoweb.com/images/Logo_psdoweb.png', // URL de l'image
    },
    verification: {
        google: process.env.google,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body
                className={"font-almarai bg-[url('/images/utils/background_image.jpg')] bg-center bg-cover bg-fixed"}
            >
                <Header />
                <main className={""}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
