import Link from "next/link";

type Artigo = {
  _id: string,
  titulo: string,
  autor: string,
  data: string,
  conteudo: string,
  slug: string
}

async function Home () {
  const response = await fetch('https://crudcrud.com/api/608c972c7415451fa842b3d80d68add6/artigos')
  
  const artigos: Artigo[] = await response.json()
  
  console.log( artigos )

  return (
    <main>
      <h1>DevLog</h1>
      {artigos.map((artigo) =>
        <article key = {artigo._id}>
            <Link href={`/artigos/${artigo.slug}`}>
              <h2>{artigo.titulo}</h2>
            </Link>
           
            <p>{artigo.autor}</p>
            <p>{artigo.data}</p>
            <p>{artigo.conteudo}</p>
          </article>
        )}
    </main>
  );
}

export default Home
