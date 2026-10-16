import { ContactForm } from "../components/organisms/ContactForm"

export function Contacto(){
    return (
        <main className="bg-dark text-white min-vh-100">
            <section className="container py-4">

                <h1 className="text-warning text-center mb-3">
                    Formulario de Contacto

                </h1>

                <p className="text-center text-secondary">
                    ¿Tienes dudas sobre algún producto o buscas una carta en específico?
                    Envíanos un mensaje por interno.

                </p>

                <ContactForm />

            </section>

        </main>
    )
}