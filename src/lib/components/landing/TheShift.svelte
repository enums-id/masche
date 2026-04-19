<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { fly } from 'svelte/transition';

	let visible = $state(false);
	let current = $state(0);
	let paused = $state(false);
	let resumeTimer: ReturnType<typeof setTimeout> | null = null;

	const slides = [
		{
			category: 'MANAJEMEN',
			categoryColor: '#4b2e83',
			categoryBg: '#4b2e8318',
			title: 'Visibilitas real-time lintas unit dalam satu sistem terpusat',
			desc: 'Sentralisasi operasional seluruh unit sekolah tanpa mengorbankan struktur masing-masing.',
			bullets: [
				'Dashboard terpusat untuk seluruh unit',
				'Struktur data tetap terpisah per sekolah',
				'Kontrol penuh di level yayasan'
			],
			stat: 'Kelola 2\u201310+ unit sekolah\ndalam satu sistem terpusat',
			gradientFrom: '#4b2e83',
			gradientTo: '#5e3da0'
		},
		{
			category: 'AKADEMIK',
			categoryColor: '#4b2e83',
			categoryBg: '#4b2e8318',
			title: 'Penilaian Otomatis & Presisi Tinggi',
			desc: 'Kurangi beban administratif guru dengan sistem penilaian yang terotomatisasi dan akurat.',
			bullets: [
				'Perhitungan nilai otomatis tanpa error',
				'Sinkronisasi data akademik real-time',
				'Siap untuk laporan & rapor'
			],
			stat: '+5 jam efisiensi kerja\nper guru / minggu',
			gradientFrom: '#5e3da0',
			gradientTo: '#8faf9a'
		},
		{
			category: 'PENGEMBANGAN SISWA',
			categoryColor: '#769885',
			categoryBg: '#8faf9a18',
			title: 'Pantau Perkembangan Siswa Secara Menyeluruh',
			desc: 'Lebih dari sekadar nilai \u2014 pantau perilaku, kesehatan, dan milestone siswa dalam satu sistem.',
			bullets: [
				'Catatan kualitatif (behavior & aktivitas)',
				'Tracking kesehatan & perkembangan fisik',
				'Riwayat siswa dari awal hingga kelulusan'
			],
			stat: 'Insight 360\u00b0 untuk peningkatan\nkualitas sekolah secara terukur',
			gradientFrom: '#8faf9a',
			gradientTo: '#e6a23c'
		},
		{
			category: 'OPERASIONAL',
			categoryColor: '#4a4f57',
			categoryBg: '#4a4f5718',
			title: 'Otomatisasi Sistem Administratif',
			desc: 'Hilangkan proses manual dalam pengelolaan administrasi sekolah dengan sistem yang terintegrasi.',
			bullets: [
				'Otomatisasi perhitungan nilai',
				'Tanpa rekap laporan akademik berulang',
				'Absensi dan data siswa tercatat otomatis secara real-time'
			],
			stat: '\u2193 90% pekerjaan administratif\nmelalui otomatisasi sistem',
			gradientFrom: '#59b88a',
			gradientTo: '#4b2e83'
		},
		{
			category: 'PEMENUHAN KEBIJAKAN',
			categoryColor: '#c88a2a',
			categoryBg: '#e6a23c18',
			title: 'Pelaporan Tanpa Double Entry',
			desc: 'Sinkronisasi data dan laporan ke sistem pemerintah tanpa proses input ulang.',
			bullets: [
				'Export data siap Dapodik',
				'Integrasi sistem pelaporan',
				'Mengurangi risiko kesalahan data'
			],
			stat: 'Pelaporan otomatis dengan\nkepatuhan regulasi 100%',
			gradientFrom: '#e6a23c',
			gradientTo: '#4b2e83'
		},
		{
			category: 'DUKUNGAN AKADEMIK',
			categoryColor: '#c88a2a',
			categoryBg: '#e6a23c18',
			title: 'Intervensi Dini untuk Keberhasilan Siswa',
			desc: 'Identifikasi siswa yang membutuhkan bantuan dan lakukan intervensi sebelum terlambat.',
			bullets: [
				'Deteksi siswa "at-risk" lebih awal',
				'Program remedial & enrichment terstruktur',
				'Monitoring progres intervensi'
			],
			stat: '\u2191 Retensi siswa & peningkatan\nperforma akademik hingga 10\u201320%',
			gradientFrom: '#edb85e',
			gradientTo: '#8faf9a'
		},
		{
			category: 'AKSES & SEKURITAS',
			categoryColor: '#4a4f57',
			categoryBg: '#4a4f5718',
			title: 'Kontrol Akses Berbasis Peran',
			desc: 'Memastikan setiap pengguna mengakses data yang relevan dengan tanggung jawabnya.',
			bullets: [
				'Sistem 5 role',
				'Audit trail untuk setiap aktivitas',
				'Pencegahan akses tidak sah'
			],
			stat: '5 peran, 100% kontrol akses\n& pelacakan aktivitas',
			gradientFrom: '#d7d9dd',
			gradientTo: '#4b2e83'
		}
	];

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
				FITUR UTAMA
			</p>
			<h2 class="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				Dirancang untuk Cara Kerja Institusi Modern
			</h2>
			<p class="mt-2 text-[15px] font-medium text-plum">
				Setiap fitur dibangun untuk memberikan dampak nyata.
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
