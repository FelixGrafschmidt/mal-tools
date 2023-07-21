<template>
	<div class="mx-48 flex flex-col gap-2 bg-gray-5 p-8">
		<div v-for="variant in variants" :key="variant" class="flex flex-row gap-2">
			<UiButton
				v-for="color in colors"
				:key="color"
				:variant="variant"
				:color="color"
				:label="color"
				size="xl"
				trailing
				icon="uil:github"
				target="_blank"
				@click="event = $event"
			/>
		</div>
		<UiButton size="sm" label="sm" />
		<UiButton size="md" label="md" />
		<UiButton size="lg" label="lg" />
		<UiButton size="xl" label="xl" />
		<UiButton size="2xl" label="2xl" />
		<UiButton size="3xl" label="3xl" />
		{{ JSON.stringify(event) }}
	</div>
</template>

<script setup lang="ts">
	import { Color, Variant } from "components/ui/Button.vue";

	const variants: Variant[] = ["solid", "outline", "ghost", "link"];
	const colors: Color[] = ["black", "gray", "green", "red", "teal", "white"];

	const event: Ref<PointerEvent | null> = ref(null);
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
