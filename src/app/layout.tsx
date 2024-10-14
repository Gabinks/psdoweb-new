import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
    title: "PSDOWeb",
    description: "Nous transformons vos idées en expériences numériques innovantes, capturant l'attention de votre public cible.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body
            className={"font-almarai"}
        >
        <Header/>
        <main className={"bg-[url('/images/utils/background_image.jpg')] bg-center bg-cover w-screen"}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
