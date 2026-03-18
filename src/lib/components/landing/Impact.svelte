<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
	let animated = $state(false);

	const comparisons = [
		{
			label: 'New school year setup',
			badge: 'Academic Staff',
			badgeBg: 'bg-sage',
			before: {
				value: '3 weeks',
				desc: 'Manually creating class sections, assigning courses, and linking teachers one by one'
			},
			after: {
				value: '2 hours',
				desc: 'Academic Years, Programs, Terms, and Classes configured in one structured flow'
			},
			afterWidth: 5,
			accentColor: '#8faf9a'
		},
		{
			label: 'Grade report turnaround',
			badge: 'Teachers',
			badgeBg: 'bg-plum',
			before: {
				value: '5–7 days',
				desc: 'Paper grades manually re-entered into spreadsheets, then sent or printed for distribution'
			},
			after: {
				value: 'Real-time',
				desc: 'Assessments recorded digitally — visible instantly to all authorised roles'
			},
			afterWidth: 2,
			accentColor: '#4b2e83'
		},
		{
			label: 'Student record queries',
			badge: 'Students',
			badgeBg: 'bg-amber',
			before: {
				value: '45 min / query',
				desc: 'Staff manually pulls records from multiple disconnected systems on each request'
			},
			after: {
				value: 'Self-serve',
				desc: 'Student portal — grades, attendance, notes, and graduation docs available 24/7'
			},
			afterWidth: 3,
			accentColor: '#e6a23c'
		},
		{
			label: 'Attendance recording',
			badge: 'Staff',
			badgeBg: 'bg-sage',
			before: {
				value: '30 min / class',
				desc: 'Paper roll-call tallied and manually re-entered per student, every class, every day'
			},
			after: {
				value: '< 2 min',
				desc: 'Bulk recording per class with per-term statistics and one-click Excel export'
			},
			afterWidth: 7,
			accentColor: '#8faf9a'
		}
	];

	$effect(() => {
		if (visible && !animated) {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					animated = true;
				});
			});
		}
	});
</script>

<section id="impact" class="scroll-mt-24 bg-ivory/50 px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-4xl">

		<!-- Header -->
		<div
			class="mb-16 text-center transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="text-[13px] font-medium tracking-widest text-plum/50 uppercase">The impact</p>
			<h2 class="mt-2 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				What changes when everything is connected.
			</h2>
			<p class="mx-auto mt-4 max-w-md text-base text-slate/50">
				The same tasks. Radically different outcomes.
			</p>
		</div>

		<!-- Comparisons -->
		<div class="divide-y divide-stone/15">
			{#each comparisons as item, i}
				<div
					class="py-8 transition-all duration-700 ease-out {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition-delay: {i * 120}ms;"
				>
					<!-- Row label -->
					<div class="mb-5 flex items-center gap-2.5">
						<span class="text-sm font-semibold text-ink">{item.label}</span>
						<span class="rounded-lg px-2.5 py-0.5 text-[11px] font-medium text-white/70 {item.badgeBg}">
							{item.badge}
						</span>
					</div>

					<!-- Before / After columns -->
					<div class="flex flex-col gap-5 md:grid md:grid-cols-[1fr_32px_1fr] md:items-center md:gap-0">

						<!-- Before -->
						<div>
							<p class="mb-2 text-[10px] font-medium tracking-widest text-error/40 uppercase">Before</p>
							<div class="h-1.5 overflow-hidden rounded-full bg-stone/15">
								<div
									class="h-full rounded-full bg-error/25"
									style="width: {animated ? 100 : 0}%; transition: width 1s cubic-bezier(0.16, 1, 0.3, 1) {i * 120 + 200}ms;"
								></div>
							</div>
							<p class="mt-2.5 text-xl font-light text-slate/35">{item.before.value}</p>
							<p class="mt-1 text-[12px] leading-relaxed text-slate/30">{item.before.desc}</p>
						</div>

						<!-- Arrow divider -->
						<div class="hidden md:flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-3.5 text-stone/30"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</div>

						<!-- After -->
						<div>
							<p
								class="mb-2 text-[10px] font-medium tracking-widest uppercase"
								style="color: {item.accentColor}; opacity: 0.55;"
							>
								With Masche
							</p>
							<div class="h-1.5 overflow-hidden rounded-full bg-stone/10">
								<div
									class="h-full rounded-full"
									style="width: {animated ? item.afterWidth : 0}%; background-color: {item.accentColor}; transition: width 1s cubic-bezier(0.16, 1, 0.3, 1) {i * 120 + 500}ms;"
								></div>
							</div>
							<p class="mt-2.5 text-xl font-semibold" style="color: {item.accentColor};">
								{item.after.value}
							</p>
							<p
								class="mt-1 text-[12px] leading-relaxed"
								style="color: {item.accentColor}; opacity: 0.45;"
							>
								{item.after.desc}
							</p>
						</div>

					</div>
				</div>
			{/each}
		</div>

		<!-- Bottom note -->
		<p
			class="mx-auto mt-12 max-w-sm text-center text-[12px] leading-relaxed text-slate/30 transition-all delay-500 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			Measured across institutions in their first semester using Masche.
		</p>

	</div>
</section>
