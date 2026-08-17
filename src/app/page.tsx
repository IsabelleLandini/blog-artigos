import Link from "next/link";
import buscarArtigos from "@/lib/artigos";
import styles from "./page.module.css";

// Server Component responsável por listar os artigos do blog.
async function Home () { 
  // Busca os artigos diretamente da API no servidor.
  const artigos = await buscarArtigos()


  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>DevLog</h1>
      <section className={styles.listaArtigos}>
      {artigos.map((artigo) =>
        <article key = {artigo.id} className={styles.card}>
          {/* Link para a página individual do artigo usando seu slug. */}
            <Link 
              href={`/artigos/${artigo.slug}`}
              className={styles.link}
            >
              <h2>{artigo.titulo}</h2>
            </Link>
            <div className={styles.meta}>
               <p>{artigo.autor}</p>
              <p>{artigo.data}</p>
            </div>
           
            <p className={styles.description}>{artigo.conteudo}</p>
          </article>
        )}
       </section>
    </main>
  );
}

export default Home
