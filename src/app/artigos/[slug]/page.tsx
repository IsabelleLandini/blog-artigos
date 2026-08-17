import { notFound } from "next/navigation";
import buscarArtigos, { buscarArtigo } from "@/lib/artigos";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";


type Params = {
    slug: string
};

// Força a página a ser renderizada dinamicamente no servidor,
// permitindo buscar os dados atualizados da API a cada requisição.
export const dynamic = "force-dynamic";

// Gera metadados específicos para cada artigo, melhorando o SEO das páginas.
export async function generateMetadata({params}: { params: Promise<Params>})  : Promise<Metadata> {
    const { slug } = await params;
    // Busca os artigos para encontrar aquele correspondente ao slug da URL.
    const artigos = await buscarArtigos();
    const artigo = artigos.find((artigo) => artigo.slug === slug);
    
    // Exibe a página 404 caso o slug não corresponda a nenhum artigo.
    if (!artigo) {
        notFound();
    }

    return {
        title: artigo.titulo,
        description: artigo.conteudo,
    };
}

// Server Component responsável por exibir um artigo individual.
async function Home({params}: { params: Promise<Params>}) {
    const { slug } = await params;
    // Busca a lista de artigos para localizar o artigo pelo slug.
    const artigos = await buscarArtigos();

    const artigo = artigos.find((artigo) => artigo.slug === slug);
    // Caso o artigo não exista, direciona o usuário para a página 404.
    if (!artigo) {
        notFound();
    }
    // Busca os dados completos do artigo usando o ID retornado pela listagem.
    // A API fornece o conteúdo completo somente nessa segunda requisição.
    const artigoCompleto = await buscarArtigo(artigo.id);
    
    return (
        <main className={styles.container}>
            {/* Permite retornar à página principal do blog. */}
            <Link href="/" className={styles.voltar}>
                Voltar para artigos
            </Link>
            <article className={styles.artigo}>
                <h1 className={styles.titulo}>{artigo.titulo}</h1>
                
                <div className={styles.meta}>
                    <p>{artigo.autor}</p>
                    <p>{artigo.data}</p>
                </div>
                 {/* Exibe a imagem somente quando o artigo possui uma imagem de capa. */}
                {artigoCompleto.imagem && (
                    <Image
                        src={artigoCompleto.imagem}
                        alt={artigoCompleto.titulo}
                        width={1000}
                        height={420}
                        className={styles.imagem}
                    />
                )}
                <div className={styles.conteudo}>
                    {/* Converte o conteúdo Markdown da API em elementos HTML. */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {artigoCompleto.conteudo}
                    </ReactMarkdown>         
                </div>
            </article>
        </main>      
    );
}

export default Home;

