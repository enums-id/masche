<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { fade } from 'svelte/transition';

	let visible = $state(false);
	let currentSlide = $state(0);
	let paused = $state(false);

	const slides = [
		{
			roles: ['Tenant Admin', 'Academic Staff'],
			roleBgs: ['bg-ink', 'bg-sage'],
			accentColor: '#1b1b1d',
			pain: 'Every semester, the team spends 3 weeks manually recreating class sections, assigning courses, and linking every teacher by hand.',
			feature: 'Academic Structure Setup',
			desc: 'Define Academic Years, Programs, Levels, Terms, and Classes once. Masche connects courses, teachers, and students automatically.',
			stat: { before: '3 weeks', after: '2 hours' },
			url: 'masche-academic.com/academic',
			activity: [
				{ status: 'ok', text: 'Academic Year 2025/2026 initialized — 3 active Terms configured' },
				{ status: 'ok', text: '12 Programs set up across Elementary, Middle, and High School' },
				{ status: 'ok', text: '48 class sections created — Grade 7A through Grade 12F' },
				{ status: 'ok', text: '186 teaching assignments linked to courses and classes' },
				{ status: 'done', text: 'Full academic structure ready — 847 students auto-enrolled' }
			]
		},
		{
			roles: ['Teachers', 'Academic Staff'],
			roleBgs: ['bg-plum', 'bg-sage'],
			accentColor: '#4b2e83',
			pain: 'Teachers grade on paper. Staff re-enter scores into spreadsheets. By the time reports are ready, at-risk students are already two weeks behind.',
			feature: 'Real-Time Performance Tracking',
			desc: 'Assessments, attendance, and learning objective scores — recorded once, visible instantly. Score corrections with a full approval workflow.',
			stat: { before: '5–7 day lag', after: 'Real-time' },
			url: 'masche-academic.com/assessments',
			activity: [
				{ status: 'ok', text: 'Class 9B — 28 scores recorded with learning objective breakdown' },
				{ status: 'warn', text: '4 students below threshold — flagged for follow-up' },
				{ status: 'ok', text: 'Score correction by Mr. Santos — approved by Academic Staff' },
				{ status: 'ok', text: 'Bulk attendance recorded for 6 classes — 142 entries in 90s' },
				{ status: 'done', text: 'Term report published — 0 manual data entry required' }
			]
		},
		{
			roles: ['Students', 'Parents'],
			roleBgs: ['bg-amber', 'bg-amber-light'],
			accentColor: '#e6a23c',
			pain: 'Students call the office to ask about grades. Parents email to check attendance. Staff spend half their day pulling records from 4 different systems.',
			feature: 'Student Self-Service Portal',
			desc: 'Every student and parent gets a portal. Assessments, attendance, notes, extracurriculars, and graduation documents — available 24/7 without a single staff query.',
			stat: { before: '45 min/query', after: 'Self-serve' },
			url: 'masche-academic.com/portal',
			activity: [
				{ status: 'ok', text: 'Student ID 4821 — assessments and learning objectives loaded' },
				{ status: 'ok', text: 'Attendance record for Term 2: 89.3% presence rate displayed' },
				{ status: 'ok', text: 'Achievement note published: 1st Place, Regional Science Olympiad' },
				{ status: 'ok', text: 'Graduation status: Passed — IJAZAH available for download' },
				{ status: 'done', text: '0 staff queries. All information accessed directly by student.' }
			]
		},
		{
			roles: ['Tenant Admin'],
			roleBgs: ['bg-ink'],
			accentColor: '#1b1b1d',
			pain: "The school has 6 different user types and no way to control who sees what. A teacher accidentally views payroll. A parent edits a student's grade.",
			feature: 'Role-Based Access Control',
			desc: '6 roles with granular permission rulesets. READ/WRITE control per resource, per tenant. JWT auth with rate-limited login and a full audit trail.',
			stat: { before: 'Open access', after: 'Zero leaks' },
			url: 'masche-academic.com/access',
			activity: [
				{
					status: 'ok',
					text: '6 roles provisioned: Admin, Teacher, Student, Parent, Academic Staff, Non-Academic Staff'
				},
				{
					status: 'ok',
					text: 'Ruleset applied: Teachers — READ grades, WRITE own assessments only'
				},
				{
					status: 'warn',
					text: 'Login attempt 5/5 for user@school.id — rate limit triggered, 60s lockout'
				},
				{ status: 'ok', text: 'Account suspended: user_291 — audit trail logged with timestamp' },
				{ status: 'done', text: 'All 312 accounts provisioned with correct roles and permissions' }
			]
		}
	];

	// Auto-advance
	$effect(() => {
		if (!visible || paused) return;
		const id = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 4500);
		return () => clearInterval(id);
	});

	function goTo(i: number) {
		currentSlide = i;
		paused = true;
	}

	function prev() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		paused = true;
	}

	function next() {
		currentSlide = (currentSlide + 1) % slides.length;
		paused = true;
	}

	const slide = $derived(slides[currentSlide]);
</script>

<section class="px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Two-column layout: left = copy, right = mockup -->
		<div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
			<!-- LEFT: Question + slide narrative -->
			<div
				class="transition-all duration-700 ease-out {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-8 opacity-0'}"
			>
				<!-- Static headline — the big question -->
				<h2
					class="text-[clamp(1.6rem,3.5vw,2.75rem)] leading-tight font-light tracking-tight text-ink/80"
				>
					What if every person, every process, and every piece of data were part of
					<span class="font-normal text-plum">one connected system?</span>
				</h2>

				<!-- Divider pill -->
				<div class="my-10 flex items-center gap-3">
					<div class="h-px flex-1 bg-stone/30"></div>
					<span class="rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-white/50">
						Masche in action
					</span>
					<div class="h-px flex-1 bg-stone/30"></div>
				</div>

				<!-- Slide content — fades between slides -->
				{#key currentSlide}
					<div in:fade={{ duration: 200 }}>
						<!-- Role badges -->
						<div class="mb-5 flex flex-wrap gap-1.5">
							{#each slide.roles as role, i}
								<span
									class="rounded-lg px-2.5 py-1 text-[11px] font-medium text-white/70 {slide
										.roleBgs[i]}"
								>
									{role}
								</span>
							{/each}
						</div>

						<!-- Before -->
						<p class="mb-1 text-[11px] font-medium tracking-widest text-error/50 uppercase">
							Before
						</p>
						<p class="mb-5 text-sm leading-relaxed text-slate/40 italic">
							"{slide.pain}"
						</p>

						<!-- Arrow transition -->
						<div class="mb-5 flex items-center gap-2">
							<div class="h-px w-8 bg-stone/40"></div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="size-3.5 text-slate/30"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
								/>
							</svg>
						</div>

						<!-- After -->
						<p class="text-lg font-semibold text-ink">{slide.feature}</p>
						<p class="mt-2 text-sm leading-relaxed text-slate/50">{slide.desc}</p>
					</div>
				{/key}

				<!-- Navigation -->
				<div class="mt-10 flex items-center gap-4">
					<!-- Prev -->
					<button
						class="flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone/30 text-slate/40 transition-all duration-200 hover:border-ink/20 hover:text-ink"
						onclick={prev}
						aria-label="Previous"
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
								d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
							/>
						</svg>
					</button>

					<!-- Dots -->
					<div class="flex items-center gap-2">
						{#each slides as _, i}
							<button
								class="cursor-pointer rounded-full transition-all duration-300 {i === currentSlide
									? 'h-2 w-5 bg-ink'
									: 'size-2 bg-stone/50 hover:bg-stone'}"
								onclick={() => goTo(i)}
								aria-label="Go to slide {i + 1}"
							></button>
						{/each}
					</div>

					<!-- Next -->
					<button
						class="flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone/30 text-slate/40 transition-all duration-200 hover:border-ink/20 hover:text-ink"
						onclick={next}
						aria-label="Next"
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
					</button>
				</div>
			</div>

			<!-- RIGHT: Live activity mockup -->
			<div
				class="overflow-hidden rounded-2xl border border-stone/20 shadow-xl transition-all delay-150 duration-700 ease-out {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'}"
				style="background-color: {slide.accentColor}07;"
				onmouseenter={() => (paused = true)}
				onmouseleave={() => (paused = false)}
				role="region"
				aria-label="Feature demonstration"
			>
				<!-- Browser chrome -->
				<div class="flex items-center gap-2 border-b border-stone/20 bg-white/60 px-4 py-3">
					<span class="size-2.5 rounded-full bg-stone/50"></span>
					<span class="size-2.5 rounded-full bg-stone/50"></span>
					<span class="size-2.5 rounded-full bg-stone/50"></span>
					<div class="ml-3 flex-1 rounded-full bg-white/80 px-3 py-1">
						<span class="text-[10px] text-slate/30">{slide.url}</span>
					</div>
				</div>

				<!-- Mockup body -->
				{#key currentSlide}
					<div class="p-5" in:fade={{ duration: 200 }}>
						<!-- Header row -->
						<div class="mb-4 flex items-start justify-between">
							<div>
								<p class="text-sm font-semibold text-ink">{slide.feature}</p>
								<p class="text-[11px] text-slate/40">Live activity log</p>
							</div>
							<!-- Before → After stat -->
							<div class="rounded-xl bg-white px-3 py-2 text-center ring-1 ring-stone/15">
								<p class="text-[9px] text-slate/35 line-through">{slide.stat.before}</p>
								<p class="text-xs font-semibold" style="color: {slide.accentColor};">
									{slide.stat.after}
								</p>
							</div>
						</div>

						<!-- Activity feed -->
						<div class="space-y-2">
							{#each slide.activity as item, i}
								<div
									class="flex items-start gap-2.5 rounded-xl bg-white px-3.5 py-2.5 ring-1 transition-all duration-300 {item.status ===
									'done'
										? 'ring-success/25'
										: 'ring-stone/10'}"
									style="transition-delay: {i * 70}ms;"
								>
									<div
										class="mt-1.5 size-1.5 shrink-0 rounded-full {item.status === 'warn'
											? 'bg-warning'
											: item.status === 'done'
												? 'bg-success'
												: 'bg-success/50'}"
									></div>
									<p
										class="text-[12px] leading-relaxed {item.status === 'done'
											? 'font-medium text-ink'
											: 'text-slate/60'}"
									>
										{item.text}
									</p>
									{#if item.status === 'done'}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2.5"
											stroke="currentColor"
											class="mt-0.5 ml-auto size-3 shrink-0 text-success"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m4.5 12.75 6 6 9-13.5"
											/>
										</svg>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/key}
			</div>
		</div>

		<!-- Bottom bridge text -->
		<!-- <p
			class="mx-auto mt-20 max-w-xl text-center text-base leading-relaxed text-slate/40 transition-all delay-300 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			Masche doesn't replace your tools. It becomes the invisible architecture underneath —
			connecting academics, operations, finance, and communication into one coherent system.
		</p> -->
	</div>
</section>
