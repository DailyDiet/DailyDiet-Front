<template>
	<div>
		<div :class="$style.headerImage">
			<PlanGenerator />
		</div>
		<div style="height: 100vh; background-color: #ff4500;" />
		<div style="height: 100vh; background-color: #99ff21;" />
		<div style="height: 100vh; background-color: #fffb93;" />
	</div>
</template>

<script>
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';

export default {
	components: { PlanGenerator },
	data: () => ({}),
};
</script>

<style module lang="scss">
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
