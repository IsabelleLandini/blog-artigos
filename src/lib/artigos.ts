import { Artigo } from "@/types/artigo";
import { DevToArticle } from "@/types/devto";

// Busca a lista de artigos da API do DEV.to e transforma os dados
// para o formato definido pela aplicação.
async function buscarArtigos(): Promise<Artigo[]> {
    const response = await fetch('https://dev.to/api/articles'); 
    
    // Define o tipo dos dados recebidos da API para garantir
    // segurança de tipos durante o desenvolvimento.
    const dados : DevToArticle[] = await response.json(); 
    // Converte o formato da API para o formato utilizado pela aplicação.
    const artigos = dados.map((artigo) => ({
        id: artigo.id,
        titulo: artigo.title,
        autor: artigo.user.name,
        data: artigo.readable_publish_date,
        conteudo: artigo.description, 
        slug: artigo.slug,
        imagem: artigo.cover_image,
    }));

    return artigos;
}

// Busca um artigo específico utilizando ID.
// Essa função retorna o conteúdo completo em Markdown.
export async function buscarArtigo(id: number) : Promise<Artigo> {
    const response = await fetch (`https://dev.to/api/articles/${id}`);
    // Converte a resposta da API para o tipo definido para os artigos do DEV.to.
    const dados: DevToArticle = await response.json(); 
    // Seleciona e renomeia apenas os dados necessários para a aplicação.
    const artigo = {
        id: dados.id,
        titulo: dados.title,
        autor: dados.user.name,
        data: dados.readable_publish_date,
        conteudo: dados.body_markdown,
        slug: dados.slug,
        imagem: dados.cover_image,
    };

    return artigo;
}

export default buscarArtigos;