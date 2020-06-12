<template>
	<b-card :title="post.title" :sub-title="post.category" class="w-75 my-2">
		<hr />
		<b-card-text>
			<b>Summary</b>
			<br />
			<P>{{ post.summary }}</P>
		</b-card-text>
		<b-button
			v-b-toggle="`collapse-${post.post_id}`"
			variant="link"
			size="sm"
		>
			More
		</b-button>
		<b-collapse :id="`collapse-${post.post_id}`">
			{{ post.content }}
		</b-collapse>

		<template #footer>
			<div class="d-flex justify-content-between align-items-center">
				<span>
					Author :
					<b>{{ post.author_fullname }}</b>
				</span>

				<b-overlay
					:show="busy"
					rounded
					opacity="0.6"
					spinner-small
					spinner-variant="primary"
					class="d-inline-block"
				>
					<b-button
						v-if="isPostOwner"
						size="sm"
						variant="danger"
						@click="deleteBlogPost"
					>
						Delete
					</b-button>
				</b-overlay>
			</div>
		</template>
	</b-card>
</template>
<script>
import { deleteBlogPostAPI } from '~/services';
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		busy: false,
	}),
	computed: {
		isPostOwner() {
			return (
				this.post.author_email === this.post.current_user_mail &&
				this.$auth.loggedIn
			);
		},
	},
	methods: {
		deleteBlogPost() {
			this.busy = true;
			deleteBlogPostAPI(this, this.post.post_id)
				.then(() => {
					this.$bvToast.toast('Post deleted.', {
						title: 'Blog',
						variant: 'success',
						solid: true,
					});
					this.$emit('refresh');
				})
				.catch(err => {
					console.log(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.busy = false;
				});
		},
	},
};
</script>
