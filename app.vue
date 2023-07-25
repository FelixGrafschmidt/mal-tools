<template>
	<div class="mx-48 flex flex-col gap-2 bg-gray-5 p-8">
		<div v-for="variant in variants" :key="variant" class="flex flex-row gap-2">
			<FGButton
				v-for="color in colors"
				:key="color"
				:variant="variant"
				:color="color"
				:label="color"
				size="xl"
				trailing
				icon="uil:github"
				target="_blank"
			/>
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="sm" label="sm" loading />
			<FGButton size="sm" label="sm" />
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="md" label="md" loading />
			<FGButton size="md" label="md" />
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="lg" label="lg" loading />
			<FGButton size="lg" label="lg" />
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="xl" label="xl" loading />
			<FGButton size="xl" label="xl" />
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="2xl" label="2xl" loading />
			<FGButton size="2xl" label="2xl" />
		</div>
		<div class="flex flex-row gap-1">
			<FGButton size="3xl" label="3xl" loading />
			<FGButton size="3xl" label="3xl" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Color, Variant } from "ui.felgraf.dev/dist/runtime/components/Button.vue";

	const variants: Variant[] = ["solid", "outline", "ghost", "link"];
	const colors: Color[] = ["black", "gray", "green", "red", "teal", "white"];
</script>

<style>
	@import "@unocss/reset/tailwind.css";

	html {
		scrollbar-gutter: unset;
		@apply bg-gray-7 text-gray-3;
	}

	body {
		@apply scrollbar scrollbar-rounded scrollbar-w-2 scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4 scrollbar-track-color-gray-5 scrollbar-thumb-color-gray-9 overflow-y-overlay;
	}
</style>
