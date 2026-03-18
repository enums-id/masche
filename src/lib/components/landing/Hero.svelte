<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			mounted = true;
		});
	});

	const characters = [
		{
			id: 'management',
			label: 'Management',
			color: '#1b1b1d',
			iconStroke: 'white',
			x: 10,
			y: 24,
			size: 76,
			icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0'
		},
		{
			id: 'staff',
			label: 'Staff',
			color: '#8faf9a',
			iconStroke: 'white',
			x: 86,
			y: 18,
			size: 64,
			icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 0 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085'
		},
		{
			id: 'teachers',
			label: 'Teachers',
			color: '#ffffff',
			iconStroke: '#4b2e83',
			x: 90,
			y: 62,
			size: 68,
			icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
		},
		{
			id: 'students',
			label: 'Students',
			color: '#e6a23c',
			iconStroke: 'white',
			x: 74,
			y: 80,
			size: 68,
			icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
		},
		{
			id: 'parents',
			label: 'Parents',
			color: '#edb85e',
			iconStroke: '#1b1b1d',
			x: 12,
			y: 74,
			size: 64,
			icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
		}
	];

	const connections: [number, number][] = [
		[0, 1],
		[0, 2],
		[0, 4],
		[1, 2],
		[2, 3],
		[2, 4],
		[3, 4]
	];

	// Deterministic particles (avoids SSR mismatch)
	const particles = Array.from({ length: 24 }, (_, i) => ({
		x: ((i * 47 + 13) % 97) + 1,
		y: ((i * 61 + 23) % 93) + 3,
		size: 1 + (i % 3),
		opacity: 0.03 + (i % 5) * 0.015,
		duration: 15 + (i % 7) * 3,
		delay: -(i * 2.7)
	}));
</script>

<section class="relative flex min-h-svh items-center justify-center overflow-hidden bg-plum">
	<!-- Soft center glow for text readability -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/4 blur-[120px]"
	></div>

	<!-- Ambient floating particles -->
	{#each particles as p}
		<div
			class="particle absolute rounded-full bg-white"
			style="left:{p.x}%; top:{p.y}%; width:{p.size}px; height:{p.size}px; opacity:{p.opacity}; --pd-dur:{p.duration}s; --pd-delay:{p.delay}s;"
		></div>
	{/each}

	<!-- Connection lines (desktop) -->
	<svg
		class="pointer-events-none absolute inset-0 hidden size-full md:block"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		{#each connections as [fi, ti]}
			{@const f = characters[fi]}
			{@const t = characters[ti]}
			<line
				x1={f.x}
				y1={f.y}
				x2={t.x}
				y2={t.y}
				stroke="white"
				stroke-width="0.15"
				stroke-opacity={mounted ? '0.08' : '0'}
				stroke-dasharray="1.5 2.5"
				style="transition: stroke-opacity 1.5s ease 1s;"
			>
				<animate
					attributeName="stroke-dashoffset"
					from="0"
					to="8"
					dur="5s"
					repeatCount="indefinite"
				/>
			</line>
		{/each}
	</svg>

	<!-- Floating character nodes (desktop) -->
	{#each characters as char, i}
		<div
			class="absolute hidden -translate-x-1/2 -translate-y-1/2 md:block"
			style="left: {char.x}%; top: {char.y}%;"
		>
			<!-- Entrance layer (scale + opacity) -->
			<div
				class="transition-all duration-700 {mounted
					? 'scale-100 opacity-100'
					: 'scale-0 opacity-0'}"
				style="transition-delay: {i * 120 + 200}ms; transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);"
			>
				<!-- Float layer (looping translate) -->
				<div class="hero-float hero-float-{i}">
					<div class="flex flex-col items-center gap-2.5">
						<!-- Character circle -->
						<div
							class="flex items-center justify-center rounded-2xl"
							style="
								width: {char.size}px;
								height: {char.size}px;
								background-color: {char.color};
								box-shadow: 0 12px 40px -8px {char.color}50;
							"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke={char.iconStroke}
								class="size-7"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={char.icon} />
							</svg>
						</div>

						<!-- Label -->
						<span class="text-[11px] font-medium tracking-wide text-white/40">
							{char.label}
						</span>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<!-- ─── Center content ─── -->
	<div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
		<!-- Early access badge -->
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-700 ease-out {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			<span class="relative flex size-2">
				<span class="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-60"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-sage"></span>
			</span>
			<span class="text-[13px] font-medium text-white/60">Now in early access</span>
		</div>

		<!-- Big motto -->
		<h1
			class="text-[clamp(2.8rem,8vw,6rem)] leading-[1.02] font-bold tracking-tight transition-all delay-200 duration-700 ease-out {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<span class="text-white">Education,</span><br />
			<span class="text-amber-light">orchestrated.</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/40 transition-all delay-400 duration-700 ease-out md:text-xl {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			One platform connecting management, teachers, staff, students, and parents
			&mdash; so your institution runs in harmony.
		</p>

		<!-- Mobile: role color chips -->
		<div
			class="mt-8 flex flex-wrap items-center justify-center gap-2 transition-all delay-500 duration-700 ease-out md:hidden {mounted
				? 'opacity-100'
				: 'opacity-0'}"
		>
			{#each characters as char}
				<span
					class="rounded-xl px-3 py-1.5 text-[11px] font-medium"
					style="background-color: {char.color}; color: {char.iconStroke};"
				>
					{char.label}
				</span>
			{/each}
		</div>

		<!-- CTA -->
		<div
			class="mt-12 transition-all delay-[600ms] duration-700 ease-out {mounted
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<a
				href="#ecosystem"
				class="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-plum shadow-lg shadow-black/10 transition-all duration-200 hover:bg-amber-light hover:text-ink hover:shadow-xl"
			>
				Start exploring
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
					/>
				</svg>
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-700 ease-out {mounted
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="flex size-9 items-center justify-center rounded-full border border-white/12">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-3.5 animate-bounce text-white/30"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</div>
</section>

<style>
	/* ── Floating animations (different paths per character) ── */
	.hero-float-0 {
		animation: hf0 8s ease-in-out infinite;
	}
	.hero-float-1 {
		animation: hf1 9.5s ease-in-out infinite;
	}
	.hero-float-2 {
		animation: hf2 7.5s ease-in-out infinite;
	}
	.hero-float-3 {
		animation: hf3 10s ease-in-out infinite;
	}
	.hero-float-4 {
		animation: hf4 8.5s ease-in-out infinite;
	}

	@keyframes hf0 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(10px, -16px);
		}
		66% {
			transform: translate(-6px, 12px);
		}
	}
	@keyframes hf1 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(-12px, -10px);
		}
		75% {
			transform: translate(8px, 14px);
		}
	}
	@keyframes hf2 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		40% {
			transform: translate(14px, 10px);
		}
		60% {
			transform: translate(-10px, -14px);
		}
	}
	@keyframes hf3 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(-8px, 16px);
		}
		66% {
			transform: translate(12px, -10px);
		}
	}
	@keyframes hf4 {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(10px, -12px);
		}
	}

	/* ── Ambient particle drift ── */
	.particle {
		animation: pdrift var(--pd-dur, 20s) ease-in-out infinite;
		animation-delay: var(--pd-delay, 0s);
	}

	@keyframes pdrift {
		0%,
		100% {
			transform: translateY(0) translateX(0);
		}
		33% {
			transform: translateY(-20px) translateX(5px);
		}
		66% {
			transform: translateY(10px) translateX(-3px);
		}
	}
</style>
