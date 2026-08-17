import { notFound } from "next/navigation";
import buscarArtigos, { buscarArtigo } from "@/lib/artigos";
import type { Metadata } from "next";

type Params = {
    slug: string
}

export const dynamic = "force-dynamic"

export async function generateMetadata({params}: { params: Promise<Params>})  : Promise<Metadata> {
    const { slug } = await params
    const artigos = await buscarArtigos()
    const artigo = artigos.find((artigo) => artigo.slug === slug)
    console.log("slug da URL:", slug)
    console.log("artigo encontrado:", artigo)

    if (!artigo) {
        notFound()
    }

    return {
        title: artigo.titulo,
        description: artigo.conteudo,
    } 

}

async function Home({params}: { params: Promise<Params>}) {
    const { slug } = await params
    
    const artigos = await buscarArtigos()

    const artigo = artigos.find((artigo) => artigo.slug === slug)

    if (!artigo) {
        notFound()
    }

    const artigoCompleto = await buscarArtigo(artigo.id)
    
    return (
        <main>
            <h2>{artigo.titulo}</h2>
            <p>{artigo.autor}</p>
            <p>{artigo.data}</p>
            <p>{artigoCompleto.conteudo}</p>   
        </main>      
    )
}

export default Home
