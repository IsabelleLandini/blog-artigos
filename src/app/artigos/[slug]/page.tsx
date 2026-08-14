import { notFound } from "next/navigation";
import { Artigo } from "@/types/artigo";

type Params = {
    slug: string
}

async function Home({params}: { params: Promise<Params>}) {
    const { slug } = await params

    const response = await fetch('https://crudcrud.com/api/8e565d6e33744604899a772ffbaa6c86/artigos')
    
    const artigos : Artigo[]  = await response.json()

    const artigo = artigos.find((artigo) => artigo.slug === slug)
    console.log(artigo)

    if (!artigo) {
        notFound()
    }
    
    return (
        <main>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.autor}</p>
            <p>{artigo.data}</p>
            <p>{artigo.conteudo}</p>   
        </main>      
    )
}

export default Home