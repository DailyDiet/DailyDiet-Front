<template>
	<div>
		<b-overlay :show="registerState === 'success'" rounded="sm">
			<div :class="$style.headerImage">
				<SignUp
					v-if="registerState === 'signup'"
					@changeState="changeState"
				/>
				<SignIn
					v-else-if="registerState === 'signin'"
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
</style>
