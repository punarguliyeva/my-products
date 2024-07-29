import { defineStore } from 'pinia'
export const useArticleStore = defineStore({
  id: 'article',
  state: () => ({
    articles: []
  }),
  actions: {
    addArticle({ title, shortBody = '', author = '' }) {
      if (title === '') return

      const date = new Date()
      const readableDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      this.articles.push({
        id: this.articles.length ? this.articles.at(-1).id + 1 : 0,
        title,
        shortBody,
        date: readableDate,
        author,
        img: Math.random() <= 0.5 ? '/1.jpg' : '/2.jpg'
      })
    },
    deleteArticle(id) {
      this.articles = this.articles.filter((a) => a.id !== id)
    },
    setArticles(articles) {
      console.log(articles)
      articles.forEach((a) => {
        const title = a.split(' ').slice(0, 2).join(' ')
        this.addArticle({ title, shortBody: a, author: 'Punar' })
      })

      // this.articles = articles
    }
  }
})
