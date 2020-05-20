<template>
	<div>
		<div :class="$style.headerImage">
			<SignUp v-if="signUp" @changeState="changeState" />
			<SignIn v-else @changeState="changeState" />
		</div>
	</div>
</template>

<script>
import { signUpAPI } from '~/services';
import SignUp from '~/components/SignUp.vue';
import SignIn from '~/components/SignIn.vue';
export default {
	components: { SignUp, SignIn },
	data: () => ({
		signUp: false,
	}),
	methods: {
		changeState() {
			this.signUp = !this.signUp;
		},
		onSubmit(evt) {
			evt.preventDefault();
			signUpAPI(this, this.form)
				.then(res => {
					console.log(res);
				})
				.catch(console.error);
		},
	},
};
</script>

<style module lang="scss">
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}
.headerCardRegister {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 70px;
	flex-direction: column;
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
