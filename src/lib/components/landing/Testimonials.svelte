<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const testimonials = [
		{
			quote: 'Masche transformed how we operate. What used to take weeks of coordination now happens seamlessly in the background.',
			name: 'Dr. Sarah Okonkwo',
			role: 'Vice Chancellor, Westfield University',
			color: 'bg-plum'
		},
		{
			quote: 'Every department, every schedule, every record — it all just works together. Our staff finally has time to focus on teaching.',
			name: 'James Hartley',
			role: 'Head of Administration, Brighton Academy',
			color: 'bg-sage'
		},
		{
			quote: "We evaluated six platforms before choosing Masche. Nothing came close to the level of thoughtful design we found here.",
			name: 'Prof. Amina Diallo',
			role: 'Dean of Sciences, Maputo Institute',
			color: 'bg-amber'
		}
	];
</script>

<section id="testimonials" class="scroll-mt-24 px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<div
			class="mb-16 text-center transition-all duration-700 ease-out {visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}"
		>
			<p class="text-[13px] font-medium tracking-widest text-plum/50 uppercase">What they say</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
				Trusted by institutions worldwide.
			</h2>
		</div>

		<div
			class="grid gap-6 transition-all delay-150 duration-700 ease-out md:grid-cols-3 {visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}"
		>
			{#each testimonials as t, i}
				<div
					class="flex flex-col rounded-2xl border border-stone/15 bg-white p-8 transition-all duration-300 hover:border-plum/10 hover:shadow-lg hover:shadow-plum/3"
					style="transition-delay: {i * 100}ms"
				>
					<svg class="mb-5 size-8 text-plum/15" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.7 22.7c-1.3 0-2.4-.4-3.3-1.3-.9-.9-1.3-2-1.3-3.3 0-.5.1-1.1.2-1.7.2-.6.4-1.3.8-2L11.4 6h4.1l-3.2 7.6c.6-.1 1.1-.1 1.6 0 .5.1 1 .3 1.4.6.6.4 1.1 1 1.4 1.7.3.7.5 1.4.5 2.2 0 1.3-.5 2.4-1.4 3.3-.9.9-2 1.3-3.2 1.3h-.1Zm12 0c-1.3 0-2.4-.4-3.3-1.3-.9-.9-1.3-2-1.3-3.3 0-.5.1-1.1.2-1.7.2-.6.4-1.3.8-2L23.4 6h4.1l-3.2 7.6c.6-.1 1.1-.1 1.6 0 .5.1 1 .3 1.4.6.6.4 1.1 1 1.4 1.7.3.7.5 1.4.5 2.2 0 1.3-.5 2.4-1.4 3.3-.9.9-2 1.3-3.2 1.3h-.1Z" />
					</svg>
					<p class="flex-1 text-[15px] leading-relaxed text-slate/60 italic">"{t.quote}"</p>
					<div class="mt-6 flex items-center gap-3 border-t border-stone/10 pt-5">
						<div class="flex size-10 items-center justify-center rounded-full {t.color} text-xs font-bold text-white">
							{t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
						</div>
						<div>
							<p class="text-sm font-semibold text-ink">{t.name}</p>
							<p class="text-[12px] text-slate/40">{t.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
