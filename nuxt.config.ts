// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	modules: ["@pinia/nuxt", "@unocss/nuxt", "nuxt-icon", "@vueuse/nuxt", "nuxt-headlessui", "ui.felgraf.dev"],
	vite: {},
});
