import Link from "next/link";
import buscarArtigos from "@/lib/artigos";

async function Home () { 
  const artigos = await buscarArtigos()
  
  console.log( artigos )

  return (
    <main>
      <h1>DevLog</h1>
      {artigos.map((artigo) =>
        <article key = {artigo.id}>
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
