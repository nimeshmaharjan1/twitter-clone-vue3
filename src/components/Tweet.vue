<template>
  <div class="tweet-item card mt-2" @click="favouriteTweet(tweet.id)">
    <div class="card-body">
      <p class="username">@ {{ username }}</p>
      <p class="content">{{ tweet.content }}</p>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Tweet",
  props: {
    username: String,
    tweet: Object,
  },
  setup(props, context) {
    const state = reactive({
      myUsername: props.username,
    });
    function favouriteTweet(id) {
      context.emit("selectFavourite", id);
    }
    return {
      state,
      favouriteTweet,
    };
  },
};
</script>
<style>
.tweet-item {
  transition: var(--transition);
  cursor: default;
}
.tweet-item:hover {
  transform: scale(1.1, 1.1);
}
</style>
