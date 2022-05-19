<template>
  <TopbarVue :username="user.username"></TopbarVue>
  <router-view></router-view>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import "./assets/base.scss";
import TopbarVue from "./components/static/Topbar.vue";
const user = reactive({
  username: "nimeshmaharjan1",
});
</script>
<style lang="scss"></style>
