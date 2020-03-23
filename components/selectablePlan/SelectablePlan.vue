<template>
	<div
		:class="{
			[$style.box]: true,
			[$style.selectedBox]: activePlan === planName,
		}"
		@click="updateActivePlan"
	>
		<slot name="content" />
	</div>
</template>

<script>
export default {
	model: {
		prop: 'activePlan',
		event: 'onUpdatePlan',
	},
	props: {
		planName: {
			type: String,
			required: true,
		},
		activePlan: {
			type: String,
			required: true,
		},
	},
	methods: {
		updateActivePlan() {
			this.$emit('onUpdatePlan', this.planName);
		},
	},
};
</script>

<style lang="scss" module>
.box {
	width: 100px;
	height: 100px;
	background-color: white;
	border-radius: 5px;
	padding: 10px;
	cursor: pointer;
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.selectedBox {
	background-color: #3b8070;
	color: white;
}
</style>
