export const state = () => ({
	auth: null,
});

export const mutations = {
	setAuth(state, tokens) {
		state.auth = tokens;
	},
};
