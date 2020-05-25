<template>
	<div class="p-3">
		<h1>Dashboard</h1>
		<b-button
			v-b-modal.modify_password
			class="my-2"
			variant="outline-primary"
			pill
		>
			modify password
		</b-button>
		<b-modal
			id="modify_password"
			title="Modify password"
			hide-footer
			size="sm"
		>
			<Modify />
		</b-modal>
	</div>
</template>
<script>
import Modify from '~/components/Modify.vue';
export default {
	components: {
		Modify,
	},
	middleware: 'auth',
	data: () => ({}),
	methods: {},
};
</script>
