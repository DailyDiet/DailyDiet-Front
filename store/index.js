export const state = () => ({
	plan: null,
});

export const mutations = {
	setPlan(state, plan) {
		state.plan = plan;
	},
};
