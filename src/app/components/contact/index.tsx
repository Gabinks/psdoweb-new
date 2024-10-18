"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: '',  // Le champ "Type" est vide au départ
        consent: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Récupération de "source" de l'URL à l'aide de window.location.search
    useEffect(() => {
        const params = new URLSearchParams(window.location.search); // Accéder aux paramètres de l'URL
        const source = params.get("source"); // Récupère le paramètre "source" de l'URL
        if (source) {
            setFormData((prev) => ({ ...prev, type: source })); // Associer le paramètre source au champ Type
        }
    }, []); // Ce useEffect se déclenche une seule fois, lors du chargement de la page

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !isValidEmail(formData.email) || !isValidPhone(formData.phone)) {
            alert("Veuillez remplir tous les champs correctement.");
            return;
        }

        setIsSubmitting(true);

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className={"py-32"}>
            <div className="relative w-full bg-custom-image bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center mx-auto below-lg:p-2" style={{ maxWidth: "calc(100% - 110px)" }}>
                <div className="flex flex-row items-center justify-between gap-20 relative z-10 below-lg:flex-col below-lg:gap-1 below-lg:mt-4 below-lg:mb-4">
                    <Image src={"/images/logo/logo.svg"} alt="Logo" className=' below-xg:hidden' width={342} height={200} />
                    
                    <form onSubmit={handleSubmit} className='w-full max-w-md gap-6 flex flex-col p-6 form below-xg:max-w-xs mx-auto below-lg:p-2 ' id='formulaire'>
                        <p className='text-5xl font-bold text-center whitespace-normal below-lg:text-2xl'>
                            Contactez-nous
                        </p>
                        <p className='text-center text-xs '>Demandez un devis, c&apos;est gratuit</p>

                        <input
                            type="text"
                            placeholder="Nom"
                            className="p-2 rounded"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Téléphone"
                            className="p-2 rounded"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />

                        {/* Champ message optionnel */}
                        <textarea
                            placeholder="Message (optionnel)"
                            className="p-2 rounded h-28 resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />

                        <label className="text-xs flex items-start">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={formData.consent}
                                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                required
                            />
                            <p>J&apos;accepte que mes données soient mémorisées dans l&apos;unique but d&apos;être recontacté</p>
                        </label>

                        <button 
                            type="submit" 
                            className="p-2 bg-yellowPSDO rounded text-black cursor-pointer below-xg:ml-0 border"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Envoi..." : "Envoyer"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
