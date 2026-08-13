import { notFound } from "next/navigation";


type Artigo = {
    _id: string
    titulo: string
    autor: string
    data: string
    conteudo: string
    slug: string
}

type Params = {
    slug: string
}

async function Home({params}: { params: Promise<Params>}) {
    const { slug } = await params

    const response = await fetch('https://crudcrud.com/api/608c972c7415451fa842b3d80d68add6/artigos')
    
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