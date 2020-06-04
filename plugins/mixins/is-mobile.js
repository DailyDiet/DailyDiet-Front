import Vue from 'vue';

Vue.mixin({
	data: () => ({
		xl: 1200,
		lg: 992,
		md: 768,
		sm: 576,
		windowWidth: window.innerWidth,
	}),
	computed: {
		$isMobile() {
			return this.windowWidth <= this.md;
		},
	},
});
