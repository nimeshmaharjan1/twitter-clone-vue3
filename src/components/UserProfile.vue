<template>
	<Topbar :username="state.user.username"></Topbar>
	<main>
		<section class="user-profile-section container mt-4">
			<div class="row">
				<div class="info-section col-12 col-sm-7 col-md-5">
					<div class="card mt-2">
						<div class="card-body">
							<p class="full-name d-flex align-items-center gap-2">
								{{ fullName }}
								<span class="badge bg-secondary badge-pill" v-if="state.user.isAdmin">Admin</span>
							</p>
							<small>@{{ state.user.username }}</small>
							<p class="followers">
								<strong>Followers:</strong> {{ state.followers }}
							</p>
							<NewTweetVue @addTweet="addTweet" />
						</div>
					</div>
				</div>
				<div class="tweets-wrapper col-12 col-sm-5 col-md-7">
					<TweetVue v-for="tweet in state.user.tweets" :key="tweet.id" :username="state.user.username"
						:tweet="tweet" @selectFavourite="toggleFavourite" />
				</div>
			</div>
		</section>
		<section class="pokemon-generator container mt-4">
			<PokemonParent />
		</section>
	</main>
</template>
<script>
	import {
		reactive
	} from "@vue/reactivity";
	import TweetVue from "./Tweet.vue";
	import Topbar from "./static/Topbar.vue";
	import {
		computed
	} from "@vue/runtime-core";
	import NewTweetVue from "./NewTweet.vue";
	import PokemonParent from "./Pokemon/Parent.vue";
	export default {
		name: "UserProfile",
		components: {
			TweetVue,
			Topbar,
			NewTweetVue,
			PokemonParent
		},
		setup() {
			const state = reactive({
				followers: 0,
				user: {
					id: 1,
					username: "_nimeshmaharjan1",
					firstName: "Nimesh",
					lastName: "Maharjan",
					email: "maharjannimesh11@gmail.com",
					isAdmin: true,
					tweets: [{
							id: 1,
							content: "My First Tweet!"
						},
						{
							id: 2,
							content: "My Second Tweet!"
						},
					],
				},
			});
			const fullName = computed(
				() => `${state.user.firstName} ${state.user.lastName}`,
			);

			function followUser() {
				state.followers++;
			}

			function toggleFavourite(id) {
				console.log(`Favourite Tweet #${id}`);
			}

			function addTweet(tweetContent) {
				state.user.tweets.push({
					id: state.user.tweets.length + 1,
					content: tweetContent,
				});
			}
			return {
				state,
				fullName,
				followUser,
				toggleFavourite,
				addTweet,
			};
		},
		watch: {},

		mounted() {
			this.followUser();
		},
	};
</script>
<style lang="scss">
	main {
		margin-bottom: 2rem;

		select,
		textarea {
			font-size: 0.9rem !important;
		}
	}
</style>
