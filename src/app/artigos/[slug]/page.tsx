import { notFound } from "next/navigation";
import buscarArtigos from "@/lib/artigos";

type Params = {
    slug: string
}

async function Home({params}: { params: Promise<Params>}) {
    const { slug } = await params
    
    const artigos = await buscarArtigos()

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