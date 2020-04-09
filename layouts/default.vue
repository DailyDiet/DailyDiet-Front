<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
			<b-navbar-brand href="#">
				<img src="../assets/images/logo.png" width="30" height="30" />
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse" />

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#">
						Link
					</b-nav-item>
					<b-nav-item href="#" disabled>
						Disabled
					</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-button size="sm" class="my-2 my-sm-0" type="submit">
						Login
					</b-button>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<nuxt />
	</div>
</template>
