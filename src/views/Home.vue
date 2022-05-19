<template>
  <section class="home-section container mt-4">
    <div class="card">
      <div class="card-header">
        <h1>Users</h1>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="user in usersList" :key="user.id">
          <router-link
            :to="{ name: 'User-Profile', params: { userId: user.id } }"
          >
            @{{ user.username }}</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { users } from "../data/users";
const usersList = users;
</script>
