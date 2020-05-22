<template>
	<b-form :class="$style.form" @submit.prevent="userLogin">
		<b-card>
			<div :class="$style.headerCardRegister">
				<i class="fas fa-sign-in-alt"></i>
			</div>

			<hr />

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

			<b-button type="submit" class="mt-4" block variant="primary" pill>
				Sign in
			</b-button>

			<hr />
			<b-button
				class="mt-4"
				block
				variant="outline-primary"
				pill
				@click="$emit('changeState', 'signup')"
			>
				Sign up
			</b-button>
		</b-card>
	</b-form>
</template>

<script>
import Cookie from 'js-cookie';
import { signInAPI } from '~/services';

export default {
	name: 'SignUp',
	components: {},
	data: () => ({
		form: {
			email: '',
			password: '',
		},
	}),
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			signInAPI(this, this.form)
				.then(({ data }) => {
					this.$store.commit('setAuth', data);
					Cookie.set('auth', data);
					this.$router.push('dashboard');
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				});
		},
		userLogin() {
			this.$auth
				.login('local', {
					data: this.form,
				})
				.then(res => {
					console.log(res);
					this.$router.push('dashboard');
				})
				.catch(err => {
					console.error(err);
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
