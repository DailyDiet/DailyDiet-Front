<template>
	<div>
		<b-container>
			<b-row :class="$style.flexStyle">
				<h1 class="my-5 text-primary">See All Posts</h1>
				<div v-if="!isLoading" :class="['w-100', $style.flexStyle]">
					<BlogCard
						v-for="post in shownPosts"
						:key="post.post_id"
						:post="post"
						@refresh="getPosts"
					/>
					<b-button
						v-if="limit <= posts.length"
						class="my-2"
						@click="limit += 5"
					>
						Load more ...
					</b-button>
				</div>
				<b-spinner v-else variant="info" class="mt-5"></b-spinner>
				<BlogForm
					v-if="
						$auth.loggedIn &&
						$auth.$storage.getCookie('dailyDietActivate')
					"
					:busy="busySubmit"
					@submit="handleSubmit"
				/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { createNewPostAPI, getAllPostsAPI } from '~/services';
import BlogForm from '~/components/blog/BlogForm';
import BlogCard from '~/components/blog/BlogCard';
export default {
	components: { BlogForm, BlogCard },
	data: () => ({
		limit: 5,
		posts: [],
		isLoading: false,
		busySubmit: false,
	}),
	computed: {
		shownPosts() {
			return this.posts.slice(0, this.limit);
		},
	},
	mounted() {
		this.getPosts();
	},
	methods: {
		handleSubmit(formData) {
			this.busySubmit = true;
			const payload = {
				...formData,
				slug: formData.title,
			};
			createNewPostAPI(this, payload)
				.then(({ data }) => {
					this.$bvToast.toast(data.msg, {
						title: 'Blog',
						variant: 'success',
						solid: true,
					});
					this.getPosts();
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.busySubmit = false;
				});
		},
		getPosts() {
			this.isLoading = true;
			getAllPostsAPI(this)
				.then(({ data }) => {
					const postKeys = Object.entries(data);
					this.posts = postKeys
						.map(([id, obj]) => {
							return {
								...obj,
								post_id: id,
							};
						})
						.reverse();
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>

<style module lang="scss">
.flexStyle {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
