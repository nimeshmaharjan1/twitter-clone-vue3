<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="form-group mt-1">
      <label for="tweetArea"
        ><strong>New Tweet</strong> ({{ tweetCharCount }}/180)</label
      >
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
</template>
<script>
import { reactive, computed } from "vue";
export default {
  setup(props, context) {
    const state = reactive({
      tweetOptions: [
        {
          name: "Draft",
          value: "draft",
        },
        {
          name: "Instant Tweet",
          value: "instant",
        },
      ],
      formData: {
        tweet: "",
        selectedType: "draft",
      },
    });
    const tweetCharCount = computed(() => state.formData.tweet.length);

    function onSubmit() {
      //   let tweetsArr = state.user.tweets;
      if (
        state.formData.tweet &&
        state.formData.selectedType !== "draft" &&
        state.formData.tweet.length < 180
      ) {
        context.emit("addTweet", state.formData.tweet);
        // tweetsArr.unshift({
        //   id: tweetsArr.length + 1,
        //   content: state.formData.tweet,
        // });
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
      onSubmit,
      tweetCharCount,
    };
  },
};
</script>
