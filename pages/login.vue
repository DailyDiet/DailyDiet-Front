<template>
	<div>
		<b-overlay :show="registerState === 'success'" rounded="sm">
			<div :class="$style.headerImage">
				<SignUp
					v-if="registerState === 'signup'"
					@changeState="changeState"
				/>
				<SignIn
					v-if="registerState === 'signin'"
					@changeState="changeState"
				/>
			</div>
			<template #overlay>
				<div class="text-center">
					<b-icon
						icon="envelope-open"
						font-scale="3"
						animation="cylon"
					/>
					<p id="cancel-label">
						Please check your inbox for the verification email
					</p>
					<b-button
						ref="cancel"
						variant="outline-success"
						size="sm"
						aria-describedby="cancel-label"
						@click="changeState('signin')"
					>
						Sign in
					</b-button>
				</div>
			</template>
		</b-overlay>
	</div>
</template>

<script>
import SignUp from '~/components/SignUp.vue';
import SignIn from '~/components/SignIn.vue';
export default {
	components: { SignUp, SignIn },
	data: () => ({
		registerState: 'signin',
	}),
	methods: {
		changeState(newState) {
			this.registerState = newState;
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
