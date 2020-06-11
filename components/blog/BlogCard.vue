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
						size="sm"
						variant="danger"
						@click="$emit('delete', post)"
					>
						Delete
					</b-button>
				</b-overlay>
			</div>
		</template>
	</b-card>
</template>
<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
		busy: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
