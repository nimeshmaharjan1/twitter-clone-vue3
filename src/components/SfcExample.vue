<template>
  <div class="container">
    <h1>Hello {{ fullName }}</h1>
    <p>Followers: {{ followers }}</p>
    <button class="btn-primary btn btn-sm" @click="followUser">Follow</button>
  </div>
</template>
<script>
export default {
  name: "SingleFileComponentExample",

  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "nimeshmaharjan1",
        firstName: "Nimesh",
        lastName: "Maharjan",
        email: "maharjannimesh11@gmail.com",
        isAdmin: true,
      },
    };
  },

  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log("oldFollowerCount ", oldFollowerCount);
        console.log("newFollowerCount", newFollowerCount);
        console.log(`${this.user.username} gained a follower`);
      }
    },
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  methods: {
    followUser() {
      this.followers++;
    },
  },

  //lifecycle hooks
  mounted() {
    this.followUser();
  },
};
</script>
