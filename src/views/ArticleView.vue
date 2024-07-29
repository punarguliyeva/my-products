<template>
  <PostCard :article="currentArticle" />
</template>

<script setup>
import { useArticleStore } from '@/stores/article'
import PostCard from '@/components/PostCard.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useArticleStore()
const route = useRoute()

const currentArticle = computed(() => {
  return store.articles.find((article) => article.id == route.params.id)
})
</script>

<style lang="scss" scoped></style>
