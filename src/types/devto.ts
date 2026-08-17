export type DevToArticle = {
    id: number,
    title: string,
    user: {
        name: string
    }
    readable_publish_date: string,
    description: string, 
    body_markdown: string,
    slug: string
}