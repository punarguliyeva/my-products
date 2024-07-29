<template>
  <div>
    <div>
      <input v-model="newArticle" type="text" placeholder="title" />
      <button @click="handleNewArticle">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useArticleStore } from '@/stores/article'

const newArticle = ref('')
const store = useArticleStore()

function handleNewArticle() {
  store.addArticle({ title: newArticle.value })
  newArticle.value = ''
}
</script>

<style lang="scss" scoped></style>
