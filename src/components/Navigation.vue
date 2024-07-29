<template>
  <div class="nav-bar">
    <RouterLink to="/" active-class="active">Articles</RouterLink>
    <RouterLink to="/add-article" active-class="active">Add Article</RouterLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  gap: 24px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: rgb(243, 106, 15);
  font-size: 20px;

  a {
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
    &:hover {
      text-decoration: underline;
    }
  }
  .active {
    font-weight: bold;
  }
}
</style>
