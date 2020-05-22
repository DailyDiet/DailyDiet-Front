const cookieparser = process.server ? require('cookieparser') : undefined;
export const state = () => ({
	plan: null,
	authTokens: null,
});

export const mutations = {
	setPlan(state, plan) {
		state.plan = plan;
	},
	setAuth(state, tokens) {
		state.authTokens = {
			accessToken: tokens.access_token,
			refreshToken: tokens.refresh_token,
		};
	},
};

export const actions = {
	nuxtServerInit({ commit }, { req }) {
		let auth = null;
		if (req.headers.cookie) {
			const parsed = cookieparser.parse(req.headers.cookie);
			try {
				auth = JSON.parse(parsed.auth);
			} catch (err) {
				// No valid cookie found
			}
		}
		debugger;
		commit('setAuth', auth);
	},
};
