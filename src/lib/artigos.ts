import { Artigo } from "@/types/artigo";
import { DevToArticle } from "@/types/devto";

async function buscarArtigos(): Promise<Artigo[]> {
    const response = await fetch('https://dev.to/api/articles') 
    const dados : DevToArticle[] = await response.json() 
    const artigos = dados.map((artigo) => ({
        id: artigo.id,
        titulo: artigo.title,
        autor: artigo.user.name,
        data: artigo.readable_publish_date,
        conteudo: artigo.description, 
        slug: artigo.slug
    }))

    return artigos
}

export async function buscarArtigo(id: number) : Promise<Artigo> {
    const response = await fetch (`https://dev.to/api/articles/${id}`)
    const dados: DevToArticle = await response.json() 
    const artigo = {
        id: dados.id,
        titulo: dados.title,
        autor: dados.user.name,
        data: dados.readable_publish_date,
        conteudo: dados.body_markdown,
        slug: dados.slug
    }

    return artigo
}

export default buscarArtigos