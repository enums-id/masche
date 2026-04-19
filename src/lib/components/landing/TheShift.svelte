<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { fly } from 'svelte/transition';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let visible = $state(false);
	let current = $state(0);
	let paused = $state(false);
	let resumeTimer: ReturnType<typeof setTimeout> | null = null;

	const c = $derived((content as any)[langStore.value].theShift);
	const slides = $derived(c.slides);

	$effect(() => {
		if (paused) return;
		const id = setInterval(() => {
			current = (current + 1) % slides.length;
		}, 5000);
		return () => clearInterval(id);
	});

	function goTo(i: number) {
		current = i;
		paused = true;
		if (resumeTimer) clearTimeout(resumeTimer);
		resumeTimer = setTimeout(() => {
			paused = false;
		}, 8000);
	}
</script>

<section
	id="benefit"
	class="px-6 py-20 md:py-28"
	use:reveal={() => (visible = true)}
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-12 text-center transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
				{c.label}
			</p>
			<h2 class="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				{c.heading}
			</h2>
			<p class="mt-2 text-[15px] font-medium text-plum">
				{c.subtitle}
			</p>
		</div>

		<!-- Carousel card -->
		<div
			class="overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/6 transition-all duration-500 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<div class="grid md:grid-cols-[2fr_3fr]">
				<!-- Left panel -->
				<div class="flex flex-col justify-between p-8 transition-all duration-500 ease-out md:p-10">
					{#key current}
						<div class="transition-all duration-500">
							<span
								class="inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase"
								style="background-color: {slides[current].categoryBg}; color: {slides[current]
									.categoryColor};"
							>
								{slides[current].category}
							</span>

							<h3
								class="mt-4 text-[clamp(1.1rem,2vw,1.45rem)] leading-snug font-bold tracking-tight text-ink"
							>
								{slides[current].title}
							</h3>

							<div class="my-5 h-px w-full bg-stone/30"></div>

							<p class="text-[13px] leading-relaxed font-medium text-slate/65">
								{slides[current].desc}
							</p>

							<ul class="mt-5 space-y-2.5">
								{#each slides[current].bullets as bullet}
									<li class="flex items-start gap-2.5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="mt-0.5 size-4 shrink-0 text-plum"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
												clip-rule="evenodd"
											/>
										</svg>
										<span class="text-[13px] text-slate/60">{bullet}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/key}

					<!-- Dot pagination -->
					<div class="mt-8 flex items-center gap-2">
						{#each slides as _, i}
							<button
								onclick={() => goTo(i)}
								class="h-2 rounded-full transition-all duration-300 {i === current
									? 'w-6 bg-plum'
									: 'w-2 bg-stone hover:bg-slate/30'}"
								aria-label="Slide {i + 1}"
							></button>
						{/each}
					</div>
				</div>

				<!-- Right panel: gradient placeholder with stat -->
				<div
					class="relative min-h-72 overflow-hidden transition-all duration-500 ease-out md:min-h-0"
				>
					{#key current}
						<div
							class="absolute inset-0"
							style="background: linear-gradient(135deg, {slides[current].gradientFrom} 0%, {slides[
								current
							].gradientTo} 100%);"
						></div>
						<div
							class="absolute right-8 bottom-8 left-8"
							in:fly={{ y: 12, duration: 400, delay: 150 }}
						>
							<p
								class="text-[clamp(1.1rem,2.5vw,1.8rem)] leading-snug font-bold text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.3)]"
							>
								{#each slides[current].stat.split('\n') as line, i}
									{#if i > 0}<br />{/if}{line}
								{/each}
							</p>
						</div>
					{/key}
				</div>
			</div>
		</div>
	</div>
</section>
