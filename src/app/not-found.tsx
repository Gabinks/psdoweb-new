import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main className={"lg:min-h-screen"}>
            <section className={"mt-20 sm:mt-0"}>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm flex flex-col items-center text-center">
                        <Image src={"/images/Logo_psdoweb.png"} alt={"Logo PSDOweb"} className={"h-auto w-10 py-10 lg:py-0"}
                               width={100} height={100}/>
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-yellow">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Il manque
                            quelque chose.</p>
                        <p className="mb-4 text-lg font-thin text-gray-500">Désolé, nous ne trouvons pas cette page.
                            Vous trouverez beaucoup de choses à explorer sur la page d’accueil.</p>
                        <Link href="/"
                           className="inline-flex text-black font-bold bg-yellow focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center my-4">{"Retour à l'accueil"}</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}