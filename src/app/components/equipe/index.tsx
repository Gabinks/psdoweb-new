"use client";
import Image from 'next/image';

export default function Equipe() {
   
    return (
        <div className="p-4"> {/* Ajout d'un padding global */}
            <h2 className="text-center font-bold mb-12 text-4xl below-lg:text-3xl">Notre équipe</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image src={"/images/imgEquipe/baptiste.jpeg"} alt="Baptiste" layout="fill" className="object-contain rounded-full" />
                    </div>
                    <p className="text-center font-bold text-lg">Baptiste</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image src={"/images/imgEquipe/maxime.jpg"} alt="Maxime" layout="fill" className="object-cover rounded-full" />
                    </div>
                    <p className="text-center font-bold text-lg">Maxime</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image src={"/images/imgEquipe/gabin.jpeg"} alt="Gabin" layout="fill" className="object-contain rounded-full" />
                    </div>
                    <p className="text-center font-bold text-lg">Gabin</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image src={"/images/imgEquipe/damien.jpeg"} alt="Damien" layout="fill" className="object-contain rounded-full" />
                    </div>
                    <p className="text-center font-bold text-lg">Damien</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                        <Image src={"/images/imgEquipe/lea.jpg"} alt="Léa" layout="fill" className="object-cover rounded-full" />
                    </div>
                    <p className="text-center font-bold text-lg">Léa</p>
                </div>
            </div>
        </div>
    );
}
