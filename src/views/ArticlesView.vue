<template>
  <div class="posts">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <PostCard
        v-for="article in store.articles"
        :key="article.id"
        :article="article"
        :showReadMore="true"
        @delete="handleDelete(article.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useArticleStore } from '@/stores/article'

import PostCard from '@/components/PostCard.vue'

const store = useArticleStore()
const loading = ref(false)

function handleDelete(id) {
  store.deleteArticle(id)
}

async function getArticles() {
  loading.value = true
  const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=10')
  const data = await res.json()
  store.setArticles(data)
  loading.value = false
}
getArticles()
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .loading {
    text-align: center;
    font-size: large;
  }
}
</style>
