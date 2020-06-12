<template>
	<div>
		<Navbar />
		<nuxt class="defaultLayout" />
		<Footer />
	</div>
</template>
<script>
import jwtDecode from 'jwt-decode';
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import { getUserInfoAPI } from '~/services';
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
			this.setConfirmation();
		}
	},
	methods: {
		setConfirmation() {
			getUserInfoAPI(this).then(({ data }) => {
				this.$auth.$storage.setUniversal(
					'dailyDietActivate',
					data.confirmed
				);
			});
		},
	},
};
</script>
<style lang="scss">
$primary: #ff773d;

@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
.defaultLayout {
	min-height: 80vh;
}
</style>
