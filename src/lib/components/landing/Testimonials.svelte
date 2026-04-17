<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const logos = Array.from({ length: 6 }, (_, i) => i);

	const testimonials = [
		{
			quote:
				'Setelah menggunakan Masche, semua data terpusat dan bisa diakses real-time. Pengambilan keputusan jadi jauh lebih cepat karena kami tidak lagi menunggu laporan manual.',
			name: 'Kepala Sekolah',
			role: 'Sekolah Swasta, Jakarta',
			initials: 'KS',
			color: 'bg-plum'
		},
		{
			quote:
				'Yang paling terasa adalah waktu. Proses penilaian dan rekap nilai yang biasanya memakan waktu sekarang jauh lebih ringkas. Saya bisa lebih fokus ke pengajaran dibanding administrasi.',
			name: 'Guru',
			role: 'SMP, Bandung',
			initials: 'GR',
			color: 'bg-sage-dark'
		},
		{
			quote:
				'Dulu banyak pekerjaan berulang, terutama untuk input data dan laporan. Sekarang sebagian besar sudah otomatis, jadi pekerjaan administratif berkurang cukup signifikan dan lebih minim kesalahan.',
			name: 'Staff Administrasi',
			role: 'SMA, Surabaya',
			initials: 'SA',
			color: 'bg-amber-dark'
		}
	];
</script>

<section class="px-6 py-20 md:py-28" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">

		<!-- School logo row -->
		<div
			class="mb-14 transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<div class="flex flex-wrap items-center justify-center gap-4">
				{#each logos as _, i}
					<div
						class="flex h-16 w-32 items-center justify-center rounded-2xl bg-white shadow-sm"
						style="transition-delay: {i * 60}ms;"
					>
						<div class="h-8 w-20 rounded-lg bg-stone/40"></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Testimonial cards -->
		<div class="grid gap-5 md:grid-cols-3">
			{#each testimonials as t, i}
				<div
					class="rounded-3xl bg-lavender p-7 transition-all duration-700 ease-out {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition-delay: {100 + i * 100}ms;"
				>
					<!-- Quote mark -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="mb-4 size-6 text-plum/30"
					>
						<path
							d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
						/>
					</svg>

					<p class="text-[14px] italic leading-relaxed text-slate/70">
						"{t.quote}"
					</p>

					<div class="mt-6 flex items-center gap-3">
						<div
							class="flex size-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white {t.color}"
						>
							{t.initials}
						</div>
						<div>
							<p class="text-[13px] font-semibold text-ink">{t.name}</p>
							<p class="text-[11px] text-slate/45">{t.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
