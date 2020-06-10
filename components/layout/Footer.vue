<template>
	<footer :class="$style.footerBody">
		<b-row>
			<b-col lg="9">
				<h4>Daily Diet</h4>
				<p>
					We're a small company focused on providing tools and support
					for people who want to take control over their nutrition.
					Given the saturation of information in the diet industry, we
					focus on more pragmatic elements of healthy eating such as
					planning, shopping and cooking.
				</p>
			</b-col>
			<b-col lg="3">
				<b-list-group>
					<b-list-group-item :class="$style.socialLinkHeader">
						<h4>Follow us</h4>
					</b-list-group-item>
					<b-list-group-item :class="$style.socialLink">
						<i class="fab fa-instagram"></i> Instagram
					</b-list-group-item>
					<b-list-group-item :class="$style.socialLink">
						<i class="fab fa-twitter"></i> Twitter
					</b-list-group-item>
				</b-list-group>
			</b-col>
		</b-row>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	mounted() {},
};
</script>

<style lang="scss" module>
.footerBody {
	padding: 30px 50px;
	background-color: #22344b;
	color: rgba(255, 255, 255, 0.5);
}
.socialLinkHeader {
	background-color: #22344b !important;
	border: none !important;
}
.socialLink {
	background-color: #22344b !important;
	border: none !important;
	&:hover {
		color: #1da1f2;
		// background-color: #22344b;
		cursor: pointer;
	}
}
</style>
