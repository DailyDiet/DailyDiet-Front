<template>
	<b-form :class="$style.form" @submit="onSubmit">
		<b-card>
			<div :class="$style.headerCardRegister">
				<i class="fas fa-user-plus"></i>
			</div>

			<hr />

			<b-input-group class="mt-3">
				<template #prepend>
					<b-input-group-text>
						<i class="far fa-user"></i>
					</b-input-group-text>
				</template>
				<b-form-input
					id="full_name"
					v-model="form.full_name"
					required
					placeholder="Enter username"
				/>
			</b-input-group>

			<b-input-group class="mt-3">
				<template #prepend>
					<b-input-group-text>
						<i class="far fa-envelope"></i>
					</b-input-group-text>
				</template>
				<b-form-input
					id="email"
					v-model="form.email"
					type="email"
					required
					placeholder="Enter email"
				/>
			</b-input-group>

			<b-input-group class="mt-3">
				<template #prepend>
					<b-input-group-text>
						<i class="fas fa-unlock-alt"></i>
					</b-input-group-text>
				</template>
				<b-form-input
					id="password"
					v-model="form.password"
					required
					placeholder="Enter password"
				/>
			</b-input-group>

			<b-input-group class="mt-3">
				<template #prepend>
					<b-input-group-text>
						<i class="fas fa-unlock-alt"></i>
					</b-input-group-text>
				</template>
				<b-form-input
					id="confirm_password"
					v-model="form.confirm_password"
					required
					placeholder="Enter password again"
				/>
			</b-input-group>
			<b-button type="submit" class="mt-4" block variant="primary" pill>
				Sign up
			</b-button>
			<hr />

			<b-button
				class="mt-4"
				block
				variant="outline-primary"
				pill
				@click="$emit('changeState', 'signin')"
			>
				Sign in
			</b-button>
		</b-card>
	</b-form>
</template>

<script>
import { signUpAPI } from '~/services';

export default {
	data: () => ({
		form: {
			full_name: '',
			email: '',
			password: '',
			confirm_password: '',
		},
	}),
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			signUpAPI(this, this.form)
				.then(res => {
					this.$emit('changeState', 'success');
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
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
.form {
	width: 40vw;
	max-width: 350px;

	@media (max-width: 767px) {
		width: 70vw;
	}

	@media (max-width: 576px) {
		width: 100vw;
		margin: 15px;
	}
}
</style>
