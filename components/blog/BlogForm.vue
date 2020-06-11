<template>
	<b-form class="w-75 my-3" @submit.prevent="$emit('submit', form)">
		<b-form-group label="Category" label-for="category">
			<b-form-input
				id="category"
				v-model="form.category"
				required
				placeholder="Enter category"
			/>
		</b-form-group>
		<b-form-group label="Title" label-for="title">
			<b-form-input
				id="title"
				v-model="form.title"
				required
				placeholder="Enter title"
			/>
		</b-form-group>
		<b-form-group label="Summary" label-for="summary">
			<b-form-input
				id="summary"
				v-model="form.summary"
				required
				placeholder="Enter summary"
			/>
		</b-form-group>
		<b-form-group label="Content" label-for="content">
			<b-form-textarea
				id="content"
				v-model="form.content"
				required
				placeholder="Enter content ..."
				rows="5"
			/>
		</b-form-group>
		<b-overlay
			:show="busy"
			rounded
			opacity="0.6"
			spinner-small
			spinner-variant="primary"
			class="d-inline-block"
		>
			<b-button type="submit" variant="primary">
				Submit
			</b-button>
		</b-overlay>
	</b-form>
</template>
<script>
export default {
	props: {
		busy: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		form: {
			category: '',
			content: '',
			summary: '',
			title: '',
		},
	}),
	watch: {
		busy(newVal) {
			if (!newVal) {
				this.resetForm();
			}
		},
	},
	methods: {
		resetForm() {
			this.form.category = '';
			this.form.content = '';
			this.form.summary = '';
			this.form.title = '';
		},
	},
};
</script>
