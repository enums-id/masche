<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const academicPrograms = [
		{ name: 'Elementary', classes: '12 classes', students: '324 students', color: 'bg-amber' },
		{ name: 'Middle School', classes: '9 classes', students: '247 students', color: 'bg-plum' },
		{ name: 'High School', classes: '9 classes', students: '276 students', color: 'bg-ink' }
	];

	const portalRows = [
		{ label: 'Grades & Assessments', value: 'Updated', accent: 'text-success' },
		{ label: 'Attendance — Term 2', value: '89.3%', accent: 'text-ink' },
		{ label: 'Graduation Status', value: 'On track', accent: 'text-success' },
		{ label: 'Documents', value: 'IJAZAH ready', accent: 'text-plum' }
	];

	const comingSoon = [
		{
			label: 'Finance & Billing',
			desc: 'Tuition, fees, and reconciliation — automated end to end.',
			icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z'
		},
		{
			label: 'Communication',
			desc: 'Announcements, alerts, and parent notifications in real time.',
			icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
		},
		{
			label: 'Scheduling',
			desc: 'Conflict-free timetables generated automatically each semester.',
			icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
		}
	];
</script>

<section id="product" class="scroll-mt-24 px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-14 transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="text-[13px] font-medium tracking-widest text-plum/50 uppercase">The product</p>
			<h2 class="mt-2 text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				One platform. Every layer.
			</h2>
			<p class="mt-4 max-w-lg text-base text-slate/50">
				Everything your institution runs on — academics, people, records, and operations — built as
				one coherent system.
			</p>
		</div>

		<!-- Cards -->
		<div
			class="space-y-3 transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<!-- Hero card: Academic Core (full width) -->
			<div class="overflow-hidden rounded-3xl border border-stone/15 bg-white">
				<div class="flex flex-col md:min-h-72 md:flex-row">
					<!-- Left: text -->
					<div class="flex flex-col justify-between p-8 md:w-72 md:shrink-0 md:py-10">
						<div>
							<p class="text-[11px] font-medium tracking-widest text-slate/40 uppercase">
								Academic Core
							</p>
							<h3 class="mt-3 text-2xl leading-snug font-bold tracking-tight text-ink">
								Build your school's structure, not spreadsheets.
							</h3>
						</div>
						<!-- <button
							class="mt-8 flex size-10 cursor-pointer items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 hover:scale-105"
							aria-label="Explore Academic Core"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="size-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
								/>
							</svg>
						</button> -->
					</div>

					<!-- Right: colored panel + mockup -->
					<div
						class="relative flex-1 overflow-hidden bg-plum/8 p-6 md:flex md:items-center md:justify-end"
					>
						<!-- Mockup card -->
						<div class="w-full max-w-sm rounded-2xl bg-white shadow-lg ring-1 ring-stone/10">
							<div class="border-b border-stone/10 px-5 py-4">
								<div class="flex items-center justify-between">
									<div>
										<p class="text-[13px] font-semibold text-ink">Academic Year 2025/2026</p>
										<p class="text-[11px] text-slate/40">3 active terms · 4 programs</p>
									</div>
									<span
										class="rounded-full bg-success/10 px-2.5 py-0.5 text-[10px] font-medium text-success"
										>Active</span
									>
								</div>
							</div>
							<div class="space-y-1.5 p-4">
								{#each academicPrograms as program}
									<div class="flex items-center gap-3 rounded-xl bg-stone/5 px-3.5 py-2.5">
										<div class="size-1.5 rounded-full {program.color}"></div>
										<span class="flex-1 text-[12px] font-medium text-ink">{program.name}</span>
										<span class="text-[11px] text-slate/40">{program.classes}</span>
										<span class="text-[11px] text-slate/35">{program.students}</span>
									</div>
								{/each}
							</div>
							<p class="px-5 pb-4 text-[11px] text-slate/35">
								186 teaching assignments · 847 students enrolled
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Two-column row -->
			<div class="grid gap-3 md:grid-cols-2">
				<!-- Student Intelligence -->
				<div class="overflow-hidden rounded-3xl border border-stone/15 bg-white">
					<div class="flex flex-col">
						<div class="flex flex-col justify-between p-8 pb-5">
							<div>
								<p class="text-[11px] font-medium tracking-widest text-slate/40 uppercase">
									Student Intelligence
								</p>
								<h3 class="mt-3 text-xl leading-snug font-bold tracking-tight text-ink">
									Every grade. Every note. Every student.
								</h3>
							</div>
							<!-- <button
								class="mt-6 flex size-9 cursor-pointer items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 hover:scale-105"
								aria-label="Explore Student Intelligence"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="size-3.5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</button> -->
						</div>

						<!-- Colored panel -->
						<div class="mx-4 mb-4 overflow-hidden rounded-2xl bg-slate/8 p-5">
							<div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-stone/10">
								<div class="mb-3 flex items-center gap-2.5">
									<div class="flex size-7 items-center justify-center rounded-full bg-plum/10">
										<span class="text-[10px] font-bold text-plum">AR</span>
									</div>
									<div>
										<p class="text-[12px] font-semibold text-ink">Ahmad Rasyid</p>
										<p class="text-[10px] text-slate/40">Grade 9B · NISN 0058291</p>
									</div>
								</div>
								<div class="space-y-2">
									{#each [['Mathematics', 87.5], ['Natural Science', 92.0], ['English', 78.3]] as [subj, score]}
										<div class="flex items-center gap-2">
											<span class="w-28 shrink-0 truncate text-[10px] text-slate/45">{subj}</span>
											<div class="h-1 flex-1 overflow-hidden rounded-full bg-stone/15">
												<div class="h-full rounded-full bg-plum/35" style="width: {score}%;"></div>
											</div>
											<span class="w-8 text-right text-[10px] font-medium text-ink">{score}</span>
										</div>
									{/each}
								</div>
								<div class="mt-3 flex flex-wrap gap-1.5">
									<span class="rounded-full bg-warning/10 px-2 py-0.5 text-[10px] text-warning"
										>2 behavior notes</span
									>
									<span class="rounded-full bg-success/10 px-2 py-0.5 text-[10px] text-success"
										>1 achievement</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Student Portal -->
				<div class="overflow-hidden rounded-3xl border border-stone/15 bg-white">
					<div class="flex flex-col">
						<div class="flex flex-col justify-between p-8 pb-5">
							<div>
								<p class="text-[11px] font-medium tracking-widest text-slate/40 uppercase">
									Student Portal
								</p>
								<h3 class="mt-3 text-xl leading-snug font-bold tracking-tight text-ink">
									Students see everything. You handle nothing.
								</h3>
							</div>
							<!-- <button
								class="mt-6 flex size-9 cursor-pointer items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 hover:scale-105"
								aria-label="Explore Student Portal"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									class="size-3.5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</button> -->
						</div>

						<!-- Colored panel -->
						<div class="mx-4 mb-4 overflow-hidden rounded-2xl bg-amber/8 p-5">
							<div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-stone/10">
								<p class="mb-3 text-[11px] font-medium text-slate/40">
									Ahmad Rasyid — Student Portal
								</p>
								<div class="space-y-1.5">
									{#each portalRows as row}
										<div class="flex items-center justify-between rounded-lg bg-stone/5 px-3 py-2">
											<span class="text-[11px] text-slate/55">{row.label}</span>
											<span class="text-[11px] font-medium {row.accent}">{row.value}</span>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Coming soon row -->
			<div class="grid gap-3 md:grid-cols-3">
				{#each comingSoon as item}
					<div class="rounded-3xl border border-stone/10 bg-stone/3 p-7">
						<div class="mb-5 flex items-start justify-between">
							<div class="flex size-10 items-center justify-center rounded-xl bg-stone/10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-5 text-slate/30"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
								</svg>
							</div>
							<span
								class="rounded-full border border-stone/20 px-2.5 py-0.5 text-[10px] font-medium text-slate/35"
							>
								Coming soon
							</span>
						</div>
						<h3 class="text-base font-semibold text-ink/40">{item.label}</h3>
						<p class="mt-1.5 text-[12px] leading-relaxed text-slate/30">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
