<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const modules = [
		{
			label: 'Pendaftaran',
			color: 'amber',
			soon: true,
			desc: ''
		},
		{
			label: 'Manajemen Akademik',
			color: 'plum',
			soon: false,
			desc: 'Pengelolaan kurikulum, jadwal, dan data akademik dalam satu sistem'
		},
		{
			label: 'Operasional Akademik',
			color: 'plum',
			soon: false,
			desc: 'Mendukung aktivitas harian sekolah secara efisien'
		},
		{
			label: 'Keuangan',
			color: 'amber',
			soon: true,
			desc: ''
		},
		{
			label: 'Perkembangan Siswa',
			color: 'plum',
			soon: false,
			desc: 'Monitoring perkembangan siswa secara menyeluruh dan berkelanjutan'
		},
		{
			label: 'Kelulusan & Tracking',
			color: 'plum',
			soon: false,
			desc: 'Dokumentasi perjalanan siswa hingga setelah lulus'
		}
	];

	const benefits = [
		{
			title: 'Kurangi Proses Manual yang Memakan Waktu',
			desc: 'Otomatisasi alur kerja untuk mempercepat proses dan mengurangi kesalahan.',
			icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
		},
		{
			title: 'Sistem yang Menyesuaikan Kebutuhan Anda',
			desc: 'Dirancang mengikuti alur kerja institusi tanpa menambah kompleksitas.',
			icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
		},
		{
			title: 'Satu Platform, Tanpa Tools Terpisah',
			desc: 'Seluruh operasional terpusat untuk efisiensi dan keputusan yang lebih cepat.',
			icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
		}
	];
</script>

<section id="produk" class="px-6 py-20 md:py-28" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-14 transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight text-ink">
				Satu platform untuk seluruh<br />siklus siswa. Tanpa kerumitan.
			</h2>
			<p class="mt-3 text-[15px] font-medium text-slate/60">
				Mengurangi Beban Operasional. Menghemat Waktu yang Terbuang.
			</p>
		</div>

		<!-- Main 2-col layout -->
		<div
			class="grid items-start gap-5 lg:grid-cols-[1fr_1.2fr] transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<!-- Left: dark card -->
			<div class="flex flex-col overflow-hidden rounded-3xl bg-ink">
				<!-- Gradient placeholder -->
				<div
					class="h-52 w-full"
					style="background: linear-gradient(135deg, #4b2e83 0%, #3a2368 40%, #e6a23c 100%);"
				></div>
				<!-- Text content -->
				<div class="p-8">
					<h3 class="text-xl font-bold leading-snug text-white">
						MASCHE Academics<br />Menyesuaikan Kebutuhan<br />Institusi Anda
					</h3>
					<p class="mt-3 text-[13px] leading-relaxed text-white/45">
						Kami bantu memetakan sistem yang tepat untuk operasional institusi Anda.
					</p>
					<a
						href="{base}/contact"
						class="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
					>
						Konsultasikan Kebutuhan Anda
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
					</a>
				</div>
			</div>

			<!-- Right: 2×3 module grid -->
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each modules as mod, i}
					<div
						class="rounded-2xl bg-white p-5 transition-all duration-700 ease-out {visible
							? 'translate-y-0 opacity-100'
							: 'translate-y-8 opacity-0'}"
						style="transition-delay: {150 + i * 60}ms;"
					>
						{#if mod.soon}
							<!-- Dimmed / soon state -->
							<div
								class="mb-3 flex size-10 items-center justify-center rounded-xl"
								style="background: {mod.color === 'amber' ? '#e6a23c20' : '#4b2e8320'};"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke={mod.color === 'amber' ? '#e6a23c' : '#4b2e83'}
									class="size-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</div>
							<p
								class="text-[13px] font-semibold"
								style="color: {mod.color === 'amber' ? '#e6a23c' : '#4b2e83'};"
							>
								{mod.label}
							</p>
							<p class="mt-1 text-[11px] text-slate/40">*Dalam Pengembangan.<br />Akan Segera Tersedia.</p>
						{:else}
							<div class="mb-3 flex size-10 items-center justify-center rounded-xl bg-plum/10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#4b2e83"
									class="size-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
									/>
								</svg>
							</div>
							<p class="text-[13px] font-semibold text-ink">{mod.label}</p>
							<p class="mt-1 text-[11px] leading-relaxed text-slate/50">{mod.desc}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Benefits row -->
		<div
			class="mt-14 grid gap-8 md:grid-cols-3 transition-all delay-300 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			{#each benefits as benefit}
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 flex size-12 items-center justify-center rounded-2xl bg-plum/10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="#4b2e83"
							class="size-5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={benefit.icon} />
						</svg>
					</div>
					<h4 class="text-[14px] font-bold text-ink">{benefit.title}</h4>
					<p class="mt-2 text-[13px] leading-relaxed text-slate/55">{benefit.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
