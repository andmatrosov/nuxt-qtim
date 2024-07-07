import { defineStore } from 'pinia'

export interface Article {
    id: string
    title: string
    createdAt: string
    preview: string
    image: string
    description: string
}
export const useBlogsStore = defineStore('blogs', {
    state: () => ({
        articles: [] as Article[],
        status: 'none',
        currentPage: 1,
        articlesPerPage: 8
    }),
    getters: {
        totalPages: (state) => Math.ceil(state.articles.length / state.articlesPerPage),
        paginatedArticles: (state) => {
            const start = (state.currentPage - 1) * state.articlesPerPage
            const end = start + state.articlesPerPage
            return state.articles.slice(start, end)
        },
        getArticleById: (state) => {
            return (id: string) => {
                return state.articles.find(item => item.id === id)
            }
        }
    },
    actions: {
        async fetchBlogs () {
            try {
                this.status = 'pending'
                const response = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles')
                }
                const data: unknown = await response.json();
                this.articles = data as Article[]
                this.status = 'loaded'
                this.updateImages()

            } catch (err) {
                console.error('Error: ', err)
            }
        },
        updateImages () {
            this.articles = this.articles.map(article => {
                let tempImage;
                if(article.image.startsWith('http://lorempixel.com/')){
                    tempImage = article.image.replace('http://lorempixel.com/', '').split('/').slice(0,2).join('/')
                } else if(article.image.startsWith('http://placeimg.com/')) {
                    tempImage = article.image.replace('http://placeimg.com/', '').split('/').slice(0,2).join('/')
                } else {
                    tempImage = null
                }

                return {
                    ...article,
                    image: tempImage ? `https://picsum.photos/id/${Number(article.id) + 10}/` + tempImage : article.image
                }
            })
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        }

    }
})