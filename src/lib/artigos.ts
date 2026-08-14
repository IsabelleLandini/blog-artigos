import { Artigo } from "../types/artigo";

async function buscarArtigos(): Promise<Artigo[]> {
    const response = await fetch('https://crudcrud.com/api/8e565d6e33744604899a772ffbaa6c86/artigos')  
    const artigos: Artigo[] = await response.json()
  
    console.log( artigos )

    return artigos
}

export default buscarArtigos