<template>
	<div :class="$style.body">
		<h5>
			Please check your email and confirm your account , If you have not
			received an email, click the <b>Resend Email</b> button again
		</h5>
		<b-button class="mt-4" variant="primary" @click="resendEmail">
			Resend Email
		</b-button>
	</div>
</template>
<script>
import { resendConfrimationAPI } from '~/services';
export default {
	middleware: ['auth', 'activate'],
	methods: {
		resendEmail() {
			resendConfrimationAPI(this)
				.then(() => {
					this.$bvToast.toast('We send new email for you', {
						title: 'Confirmation',
						variant: 'success',
						solid: true,
					});
					this.$router.push('/');
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				});
		},
	},
};
</script>
<style lang="scss" module>
.body {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
