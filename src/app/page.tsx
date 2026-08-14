import Link from "next/link";
import { Artigo } from "../types/artigo";


async function Home () {
  const response = await fetch('https://crudcrud.com/api/8e565d6e33744604899a772ffbaa6c86/artigos')  
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
