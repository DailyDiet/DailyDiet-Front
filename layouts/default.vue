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
					<b-button
						size="sm"
						class="my-2 my-sm-0"
						disabled
						@click="$router.push('login')"
					>
						Login
					</b-button>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<nuxt />
	</div>
</template>
