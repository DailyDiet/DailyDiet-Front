<template>
	<div>
		<Navbar />
		<nuxt :class="$style.defaultLayout" />
		<Footer />
	</div>
</template>
<script>
import jwtDecode from 'jwt-decode';
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
export default {
	components: {
		Navbar,
		Footer,
	},
	async created() {
		const token = this.$auth.$storage.getCookie('accessToken');
		if (token) {
			if (jwtDecode(token).exp < new Date().getTime() / 1000) {
				await this.$api({
					url: '/users/auth',
					method: 'PUT',
					headers: {
						Authorization: `Bearer ${this.$auth.$storage.getCookie(
							'refreshToken'
						)}`,
					},
				})
					.then(({ data }) => {
						this.$auth.$storage.setUniversal(
							'accessToken',
							data.access_token
						);
					})
					.catch(err => {
						console.error(err);
						this.$toastErrors(err);
					});
			}
			this.$api.setToken(
				this.$auth.$storage.getCookie('accessToken'),
				'Bearer'
			);
		}
	},
};
</script>
<style lang="scss" module>
.defaultLayout {
	min-height: 80vh;
}
</style>
