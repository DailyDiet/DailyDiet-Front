<template>
	<div>
		<div :class="$style.headerImage" />
	</div>
</template>

<script>
export default {
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
