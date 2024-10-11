"use client";
import Image from 'next/image';
export default function Conception() {
   
    return (
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-center font-bold mb-12 text-4xl below-lg:text-3xl">Etapes de conception</h2>
            <div className="flex flex-col justify-center items-center ">
                <p className="font-bold text-4xl below-lg:text-3xl">Planification</p>
                <Image src={"/images/icons/triangle.svg"} alt="Baptiste" className="ml-5" width="62" height="47"/>
                <p className="font-bold text-4xl below-lg:text-3xl">Conception</p>
                <p className="font-bold text-4xl below-lg:text-3xl">(design)</p>
                <Image src={"/images/icons/triangle.svg"} alt="Baptiste" className="ml-5" width="62" height="47"/>
                <p className="font-bold text-4xl below-lg:text-3xl">Développement</p>
                <Image src={"/images/icons/triangle.svg"} alt="Baptiste" className="ml-5" width="62" height="47"/>
                <p className="font-bold text-4xl below-lg:text-3xl">Test</p>
                <Image src={"/images/icons/triangle.svg"} alt="Baptiste" className="ml-5" width="62" height="47"/>
                <p className="font-bold text-4xl below-lg:text-3xl">Déploiement</p>
            </div>
        </div>
    );
}
