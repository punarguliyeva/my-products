<template>
  <div class="wrapper">
    <Navigation />
    <div class="main"><RouterView /></div>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 24px;
  .main {
    width: 100%;
    margin: auto;
  }
  @media (min-width: 480px) {
    .main {
      width: 50%;
    }
  }
}
</style>
