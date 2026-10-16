import { ListaNoticias } from "../components/organisms/ListaNoticias"

export function Noticias(){
    return (
        <main className="bg-dark text-white min-vh-100">
            <section className="container py-4">
                <h1 className="text-center mb-4"> 
                    Noticias y Datos Curiosos
                </h1>

                <ListaNoticias />

            </section>
        </main>
    )
}