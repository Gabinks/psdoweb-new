import nodemailer from 'nodemailer';
import {NextResponse} from "next/server";

// Fonction de validation d'email côté serveur
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Fonction de validation de téléphone
const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);  // Valide un numéro de téléphone à 10 chiffres

export async function POST(req: Request) {
    if (req.method === 'POST') {
        const { name, email, phone, message, consent } = await req.json();

        // Valider les données reçues
        if (!name || !isValidEmail(email) || !isValidPhone(phone) || !consent) {
            return Response.json({ success: false, message: 'Données invalides' }, {status: 401})
        }

        // Configurer Nodemailer pour envoyer l'email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Adresse email de l'expéditeur
                pass: process.env.EMAIL_PASS,  // Mot de passe ou mot de passe d'application
            },
        });

        try {
            // Envoyer l'email
            await transporter.sendMail({
                from: email,  // Adresse de l'expéditeur (visiteur du site)
                to: process.env.EMAIL_TO,  // Adresse email où recevoir le message
                subject: `Demande de devis de ${name}`,
                text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}\nConsentement: ${consent ? 'Oui' : 'Non'}`,
            });

            // Réponse de succès
            return NextResponse.json({success: true}, {
                status: 200
            })
        } catch (error) {
            console.error(error);
            return NextResponse.json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' }, {
                status: 500
            })
        }
    } else {
        return NextResponse.json({ message: 'Méthode non autorisée' }, {
            status: 405
        })
    }
}
