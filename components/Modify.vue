<template>
	<b-form @submit.prevent="recovery">
		<b-input-group class="my-2">
			<template #prepend>
				<b-input-group-text>
					<i class="fas fa-unlock-alt"></i>
				</b-input-group-text>
			</template>
			<b-form-input
				v-model="form.old_password"
				type="password"
				required
				placeholder="Enter old password"
			/>
		</b-input-group>

		<b-input-group class="my-2">
			<template #prepend>
				<b-input-group-text>
					<i class="fas fa-unlock-alt"></i>
				</b-input-group-text>
			</template>
			<b-form-input
				id="password"
				v-model="form.new_password"
				type="password"
				required
				placeholder="Enter new password"
			/>
		</b-input-group>

		<b-input-group class="my-2">
			<template #prepend>
				<b-input-group-text>
					<i class="fas fa-unlock-alt"></i>
				</b-input-group-text>
			</template>
			<b-form-input
				id="confirm_password"
				v-model="form.confirm_password"
				type="password"
				required
				placeholder="Enter password again"
			/>
		</b-input-group>

		<b-overlay
			:show="busy"
			rounded
			opacity="0.6"
			spinner-small
			spinner-variant="primary"
		>
			<b-button class="my-2" block variant="primary" pill type="submit">
				Request recovery
			</b-button>
		</b-overlay>
	</b-form>
</template>

<script>
import { modifyPasswordAPI } from '~/services';
export default {
	name: 'SignUp',
	components: {},
	data: () => ({
		form: {
			old_password: '',
			new_password: '',
			confirm_password: '',
		},
		busy: false,
	}),
	methods: {
		recovery() {
			this.busy = true;
			modifyPasswordAPI(this, this.form)
				.then(() => {
					this.$bvToast.toast('Your password modified', {
						title: 'Password modify',
						variant: 'success',
						solid: true,
						autoHideDelay: 5000,
					});
					this.$bvModal.hide('modify_password');
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.busy = false;
				});
		},
	},
};
</script>

<style module lang="scss">
.headerCardRegister {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 70px;
	flex-direction: column;
	color: #ced4da;
}
</style>
