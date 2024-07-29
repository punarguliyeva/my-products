import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '@/views/ArticlesView.vue'
import ArticleView from '@/views/ArticleView.vue'
import AddArticle from '@/views/AddArticle.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/add-article',
      name: 'add-article',
      component: AddArticle
    }
  ]
})

export default routes
