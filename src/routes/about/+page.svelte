<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const values = [
		{
			title: 'Schools are ecosystems',
			desc: 'Every role — management, teachers, staff, students, and parents — is connected. Our platform reflects that reality.',
			color: 'bg-plum/10 text-plum'
		},
		{
			title: 'Data should serve people',
			desc: 'Not the other way around. We turn raw records into clear, actionable insights for every stakeholder.',
			color: 'bg-sage/15 text-sage-dark'
		},
		{
			title: 'Simplicity is a feature',
			desc: 'Powerful systems don\u2019t have to be complicated. We obsess over making complex workflows feel effortless.',
			color: 'bg-amber/10 text-amber-dark'
		},
		{
			title: 'Built for Indonesia',
			desc: 'Localized from day one — NISN, IJAZAH, bilingual interfaces, and compliance with national education standards.',
			color: 'bg-ink/8 text-ink'
		}
	];
</script>

<PageShell title="About Masche Academics" subtitle="The system behind every well-run school.">
	<div class="space-y-20" use:reveal={() => (visible = true)}>
		<!-- Mission -->
		<section
			class="transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				Our Mission
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				Bringing clarity to education management.
			</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				<p>
					Across Indonesia, thousands of schools still run on a patchwork of spreadsheets, WhatsApp
					groups, paper forms, and disconnected software. Academic records live in one system,
					attendance in another, finances in a third — and none of them talk to each other.
				</p>
				<p>
					Masche Academics exists to replace that fragmentation with one coherent platform. We give
					schools the infrastructure they deserve — so administrators can focus on leading, teachers
					can focus on teaching, and students can focus on learning.
				</p>
			</div>
		</section>

		<!-- Story -->
		<section
			class="transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				Our Story
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">Born from a real problem.</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				<p>
					Masche was built by <span class="font-medium text-ink">Enums</span>, a technology studio
					based in Indonesia. After working closely with schools and seeing firsthand how much time
					and energy is lost to broken administrative workflows, we knew there had to be a better way.
				</p>
				<p>
					We started with a simple belief: schools deserve infrastructure as good as their teaching.
					That belief became Masche — a platform designed from the ground up for the way Indonesian
					schools actually work.
				</p>
			</div>
		</section>

		<!-- Values -->
		<section
			class="transition-all delay-200 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				What We Believe
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				Principles that shape every decision.
			</h2>
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				{#each values as value}
					<div class="rounded-3xl border border-stone/15 bg-white p-7">
						<div
							class="mb-4 flex size-10 items-center justify-center rounded-xl {value.color}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m4.5 12.75 6 6 9-13.5"
								/>
							</svg>
						</div>
						<h3 class="text-base font-semibold text-ink">{value.title}</h3>
						<p class="mt-2 text-[13px] leading-relaxed text-slate/50">{value.desc}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA -->
		<section
			class="rounded-3xl bg-plum/5 p-10 text-center transition-all delay-300 duration-700 ease-out md:p-14 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				Ready to see Masche in action?
			</h2>
			<p class="mt-3 text-[15px] text-slate/50">
				Book a personalized demo and see how Masche can transform your school's operations.
			</p>
			<a
				href="/#cta"
				class="mt-8 inline-block cursor-pointer rounded-full bg-plum px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-plum/20"
			>
				Request Demo
			</a>
		</section>
	</div>
</PageShell>
