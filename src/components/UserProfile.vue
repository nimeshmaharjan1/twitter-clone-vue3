<template>
  <Topbar :username="state.user.username"></Topbar>
  <section class="user-profile-section container mt-4">
    <div class="row">
      <div class="info-section col-12 col-sm-7 col-md-5">
        <div class="card mt-2">
          <div class="card-body">
            <p class="full-name d-flex align-items-center gap-1">
              {{ fullName }}
              <span
                class="badge bg-secondary badge-pill"
                v-if="state.user.isAdmin"
                >Admin</span
              >
            </p>
            <small>@{{ state.user.username }}</small>
            <p class="followers">
              <strong>Followers:</strong> {{ state.followers }}
            </p>
            <form class="row" @submit.prevent="onSubmit">
              <div class="form-group mt-1">
                <label for="tweetArea"><strong>New Tweet</strong></label>
                <textarea
                  name="tweet"
                  id="tweetArea"
                  rows="3"
                  class="form-control"
                  v-model="state.formData.tweet"
                ></textarea>
              </div>
              <div class="form-group mt-1">
                <label for="tweetType"><strong>Type</strong></label>
                <select
                  v-model="state.formData.selectedType"
                  name="tweetType"
                  id="tweetType"
                  class="form-control"
                >
                  <option
                    :value="option.value"
                    v-for="(option, index) in state.tweetOptions"
                    :key="index"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <div class="mt-2">
                <button
                  :disabled="state.formData.selectedType === 'draft'"
                  class="btn btn-primary btn-sm w-100"
                >
                  Tweet!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="tweets-wrapper col-12 col-sm-5 col-md-7">
        <TweetVue
          v-for="tweet in state.user.tweets"
          :key="tweet.id"
          :username="state.user.username"
          :tweet="tweet"
          @selectFavourite="toggleFavourite"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { reactive } from "@vue/reactivity";
import TweetVue from "./Tweet.vue";
import Topbar from "./static/Topbar.vue";
import { computed } from "@vue/runtime-core";
export default {
  name: "UserProfile",
  components: { TweetVue, Topbar },
  setup() {
    const state = reactive({
      formData: {
        tweet: "",
        selectedType: "draft",
      },
      tweetOptions: [
        { name: "Draft", value: "draft" },
        { name: "Instant Tweet", value: "instant" },
      ],
      followers: 0,
      user: {
        id: 1,
        username: "_nimeshmaharjan1",
        firstName: "Nimesh",
        lastName: "Maharjan",
        email: "maharjannimesh11@gmail.com",
        isAdmin: true,
        tweets: [
          { id: 1, content: "My First Tweet!" },
          { id: 2, content: "My Second Tweet!" },
        ],
      },
    });
    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );
    function followUser() {
      state.followers++;
    }
    function toggleFavourite(id) {
      console.log(`Favourite Tweet #${id}`);
    }
    function onSubmit() {
      let tweetsArr = state.user.tweets;
      if (state.formData.tweet && state.formData.selectedType !== "draft") {
        tweetsArr.unshift({
          id: tweetsArr.length + 1,
          content: state.formData.tweet,
        });
        // console.log("Before Sort", tweetsArr);
        // tweetsArr = tweetsArr.sort((a, b) =>
        //   a.id > b.id ? 1 : a.id < b.id ? -1 : 0
        // );
        // console.log("After Sort", tweetsArr);
        state.formData.tweet = "";
      }
    }
    return {
      state,
      fullName,
      followUser,
      toggleFavourite,
      onSubmit,
    };
  },
  watch: {},

  mounted() {
    this.followUser();
  },
};
</script>
<style scoped lang="scss">
select,
textarea {
  font-size: 0.9rem !important;
}
.btn {
  margin-top: 0.5rem;
  background-color: var(--bg);
  border: 0.5px solid var(--bg);
}
</style>
