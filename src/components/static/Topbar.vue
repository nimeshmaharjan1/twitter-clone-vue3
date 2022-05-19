<template>
  <header class="d-flex align-items-center">
    <div
      class="container-fluid mx-2 d-flex align-items-center justify-content-between"
    >
      <router-link to="/"> <h1 class="title">Twitter</h1></router-link>
      <h1 class="username">{{ storeUserData?.username }}</h1>
    </div>
  </header>
</template>
<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

const props = defineProps({
  username: String,
});
const store = useStore();
const storeUserData = computed(() => store.state.User.user);
onMounted(() => {
  console.log("storeUserData: ", storeUserData);
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
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--title-font);
  }
}
</style>
