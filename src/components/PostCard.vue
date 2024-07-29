<template>
  <div class="post-card">
    <img :src="props.article.img" alt="" class="img" />

    <div class="right">
      <h2>{{ props.article.title }}</h2>

      <div>{{ props.article.shortBody }}</div>
      <div>{{ props.article.date }}</div>
      <RouterLink v-if="showReadMore" :to="`/articles/${props.article.id}`">
        <button>Read More</button>
      </RouterLink>
      <div>
        <button @click="$emit('delete')">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: Object,
  showReadMore: Boolean
})
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  gap: 12px;
  .img {
    width: 250px;
    height: 250px;
    border-radius: 8px;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
