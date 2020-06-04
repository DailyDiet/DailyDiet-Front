<template>
	<div>
		<b-container class="mt-5">
			<b-row>
				<b-col cols="12">
					<h2>About Eat This Much</h2>
					<p>
						We're a small company focused on providing tools and
						support for people who want to take control over their
						nutrition. Given the saturation of information in the
						diet industry, we focus on more pragmatic elements of
						healthy eating such as planning, shopping and cooking.
						This site is the latest part of our ongoing project to
						make effective nutrition strategies available to
						everyone, especially people who are too busy to get
						started on their own. What began as Swole.me, a simple
						tool to help bodybuilders hit macronutrient requirements
						created by just Louis, has grown into the current
						service supported by a small and dedicated team.
					</p>
				</b-col>

				<b-col lg="3">
					<b-card>
						<div :class="$style.profileAvatar">
							<b-avatar
								button
								src="https://placekitten.com/300/300"
								size="10rem"
							/>
							<h3 class="mt-3">Iman malekian</h3>
							<h6>Front End developer</h6>
							<div :class="$style.profileSocial">
								<i :class="['fab fa-linkedin', $style.item]" />
								<i
									:class="[
										'fab fa-twitter-square',
										$style.item,
									]"
								/>
							</div>
						</div>
					</b-card>
				</b-col>
				<b-col lg="3">
					<b-card>
						<div :class="$style.profileAvatar">
							<b-avatar
								button
								src="https://placekitten.com/300/300"
								size="10rem"
							/>
							<h3 class="mt-3">Iman malekian</h3>
							<h6>Front End developer</h6>
							<div :class="$style.profileSocial">
								<i :class="['fab fa-linkedin', $style.item]" />
								<i
									:class="[
										'fab fa-twitter-square',
										$style.item,
									]"
								/>
							</div>
						</div>
					</b-card>
				</b-col>
				<b-col lg="3">
					<b-card>
						<div :class="$style.profileAvatar">
							<b-avatar
								button
								src="https://placekitten.com/300/300"
								size="10rem"
							/>
							<h3 class="mt-3">Iman malekian</h3>
							<h6>Front End developer</h6>
							<div :class="$style.profileSocial">
								<i :class="['fab fa-linkedin', $style.item]" />
								<i
									:class="[
										'fab fa-twitter-square',
										$style.item,
									]"
								/>
							</div>
						</div>
					</b-card>
				</b-col>
				<b-col lg="3">
					<b-card>
						<div :class="$style.profileAvatar">
							<b-avatar
								button
								src="https://placekitten.com/300/300"
								size="10rem"
							/>
							<h3 class="mt-3">Iman malekian</h3>
							<h6>Front End developer</h6>
							<div :class="$style.profileSocial">
								<i :class="['fab fa-linkedin', $style.item]" />
								<i
									:class="[
										'fab fa-twitter-square',
										$style.item,
									]"
								/>
							</div>
						</div>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.profileAvatar {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profileSocial {
	display: flex;
	width: 50%;
	font-size: 35px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	.item {
		&:hover {
			color: #1da1f2;
		}
	}
}
</style>
