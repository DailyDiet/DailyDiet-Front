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
					<b-nav-form>
						<b-form-input
							size="sm"
							class="mr-sm-2"
							placeholder="Search"
						/>
						<b-button
							size="sm"
							class="my-2 my-sm-0 mr-2"
							@click="$router.push('search')"
						>
							Search
						</b-button>
					</b-nav-form>
					<b-button
						size="sm"
						class="my-2 my-sm-0"
						@click="$router.push('login')"
					>
						Sign in
					</b-button>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<nuxt />
	</div>
</template>
