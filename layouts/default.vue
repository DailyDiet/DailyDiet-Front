<template>
	<div>
		<b-navbar
			toggleable="lg"
			type="light"
			variant="dark"
			fixed="top"
			sticky
		>
			<b-navbar-brand href="/">
				<b-img
					rounded
					src="../assets/images/logo.jpg"
					width="30"
					height="30"
				/>
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse" />

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-form v-if="$route.name !== 'search'">
						<b-form-input
							v-model="searchInput"
							size="sm"
							class="mr-sm-2"
							placeholder="Search"
						/>
						<b-button
							size="sm"
							class="my-2 my-sm-1 mr-2"
							@click="goToSearchPage"
						>
							Search
						</b-button>
					</b-nav-form>
					<div v-if="$auth.loggedIn">
						<b-button
							size="sm"
							class="my-2 my-sm-1"
							@click="$router.push('dashboard')"
						>
							Dashboard
						</b-button>
						<b-button
							size="sm"
							class="my-2 my-sm-1"
							@click="$router.push('plan')"
						>
							Plan
						</b-button>
						<b-button
							size="sm"
							class="my-2 my-sm-1"
							@click="$auth.logout()"
						>
							Sign out
						</b-button>
					</div>
					<div v-else>
						<b-button
							size="sm"
							class="my-2 my-sm-1"
							@click="$router.push('login')"
						>
							Sign in
						</b-button>
					</div>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<nuxt />
	</div>
</template>
<script>
import jwtDecode from 'jwt-decode';
export default {
	data: () => ({
		searchInput: '',
	}),
	async mounted() {
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
	methods: {
		goToSearchPage() {
			this.$router.push({
				name: 'search',
				query: {
					query: this.searchInput,
				},
			});
		},
	},
};
</script>
