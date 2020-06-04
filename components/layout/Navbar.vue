<template>
	<b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
		<b-navbar-brand href="/">
			<b-img
				rounded
				src="../../assets/images/logo.jpg"
				width="30"
				height="30"
			/>
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse" />

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav v-if="$auth.loggedIn">
				<b-nav-item @click="$router.push('dashboard')">
					Dashboard
				</b-nav-item>
				<b-nav-item @click="$router.push('plan')">Plan</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav v-if="!isSearchPage" class="ml-auto">
				<b-input-group size="sm">
					<b-form-input
						v-model="searchInput"
						placeholder="Search"
						@keyup.enter="goToSearchPage"
					/>
					<b-input-group-append>
						<b-button size="sm" @click="goToSearchPage">
							<i class="fas fa-search"></i>
						</b-button>
					</b-input-group-append>
				</b-input-group>
			</b-navbar-nav>
			<b-navbar-nav
				:class="{
					['ml-2']: true,
					['ml-auto']: isSearchPage,
				}"
			>
				<b-button
					v-if="$auth.loggedIn"
					size="sm"
					class="my-2 my-sm-1"
					@click="$auth.logout()"
				>
					Sign out
				</b-button>

				<b-button
					v-else
					size="sm"
					class="my-2 my-sm-1"
					@click="$router.push('login')"
				>
					Sign in
				</b-button>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>
<script>
export default {
	data: () => ({
		searchInput: '',
	}),
	computed: {
		isSearchPage() {
			return this.$route.name === 'search';
		},
	},
	methods: {
		goToSearchPage() {
			console.log('debugger');
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
