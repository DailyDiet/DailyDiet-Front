<template>
	<div>
		<b-card no-body>
			<template #header>
				<div class="d-flex align-items-center">
					<span class="mr-auto">{{ meal.title }}</span>
					{{ meal.calories }} Calories
				</div>
			</template>
			<b-card-body style="min-width: 600px;">
				<b-list-group>
					<b-list-group-item class="d-flex align-items-center">
						<b-avatar class="mr-3"></b-avatar>
						<span class="mr-auto">J. Circlehead</span>
						<b-badge>5</b-badge>
					</b-list-group-item>
				</b-list-group>
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
export default {
	props: {
		meal: {
			type: Object,
			required: true,
		},
	},
	data: () => ({}),
};
</script>

<style module lang="scss"></style>
