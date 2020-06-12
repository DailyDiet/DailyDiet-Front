<template>
	<div>
		<b-container class="mt-5">
			<b-row v-if="!isLoading">
				<b-col lg="4" sm="12" :class="$style.profileAvatar">
					<b-avatar
						:text="avatarText"
						size="9rem"
						variant="primary"
					/>
				</b-col>
				<b-col lg="8" sm="12">
					<div v-if="userInfo" class="mt-5">
						<b-form-group
							label-cols-lg="3"
							label="Username"
							label-for="Username"
						>
							<b-input-group>
								<b-form-input
									id="Username"
									v-model="userInfo.full_name"
									disabled
								/>
							</b-input-group>
						</b-form-group>
						<b-form-group
							label-cols-lg="3"
							label="Email"
							label-for="Email"
						>
							<b-input-group>
								<b-form-input
									id="Email"
									v-model="userInfo.email"
									disabled
								/>
							</b-input-group>
						</b-form-group>
					</div>
				</b-col>
			</b-row>
			<b-row v-else>
				<b-col cols="12" :class="$style.profileAvatar">
					<b-spinner variant="info" class="mt-5"></b-spinner>
				</b-col>
			</b-row>
			<hr />
			<b-row :class="$style.flexStyle">
				<h1 style="color: #ff773d;" class="my-5">Your Posts</h1>
				<div v-if="!isLoadingPost" :class="['w-100', $style.flexStyle]">
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
					v-if="$auth.$storage.getCookie('dailyDietActivate')"
					:busy="busySubmit"
					@submit="handleSubmit"
				/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { createNewPostAPI, getUserPostsAPI, getUserInfoAPI } from '~/services';
import BlogForm from '~/components/blog/BlogForm';
import BlogCard from '~/components/blog/BlogCard';

export default {
	components: { BlogForm, BlogCard },
	middleware: 'auth',
	data: () => ({
		userInfo: null,
		isLoading: false,
		limit: 5,
		posts: [],
		isLoadingPost: false,
		busySubmit: false,
	}),
	computed: {
		avatarText() {
			return this.userInfo && this.userInfo.full_name.slice(0, 2);
		},
		shownPosts() {
			return this.posts.slice(0, this.limit);
		},
	},
	mounted() {
		this.fetchUserInfo();
		this.getPosts();
	},
	methods: {
		fetchUserInfo() {
			this.isLoading = true;
			getUserInfoAPI(this)
				.then(({ data }) => {
					this.userInfo = data;
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
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
			this.isLoadingPost = true;
			getUserPostsAPI(this)
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
					this.isLoadingPost = false;
				});
		},
	},
};
</script>

<style module lang="scss">
.profileAvatar {
	display: flex;
	justify-content: center;
	align-items: center;
}
.flexStyle {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
