<template>
  <header class="d-flex align-items-center">
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <h1 class="title">Twitter</h1>
      <h1 class="username">{{ username }}</h1>
    </div>
  </header>
</template>
<script setup>
const props = defineProps({
  username: String,
});
</script>
<style lang="scss" scoped>
header {
  border-bottom: 1px solid rgb(210, 210, 210);
  min-height: 4rem;
  color: white;
  background-color: var(--bg);
  h1 {
    font-family: var(--body-font);
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 0;
  }
  .username {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--title-font);
  }
}
</style>
