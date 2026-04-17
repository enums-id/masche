<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const articles = [
		{
			title: 'Mengurangi Beban Administratif Guru Tanpa Mengorbankan Kualitas Pembelajaran',
			desc: 'Guru menghabiskan rata-rata 30% waktunya untuk urusan administratif. Temukan bagaimana otomatisasi sistem dapat mengembalikan fokus ke hal yang paling penting: mengajar.',
			gradient: 'linear-gradient(135deg, #4b2e83 0%, #7c5cbf 100%)',
			tag: 'Produktivitas'
		},
		{
			title: 'Mengelola Multi-Unit Sekolah dengan Sistem Terpusat',
			desc: 'Yayasan dengan banyak unit sekolah sering menghadapi tantangan koordinasi dan visibilitas data. Pelajari pendekatan terpadu untuk mengelola seluruh ekosistem dari satu dashboard.',
			gradient: 'linear-gradient(135deg, #8faf9a 0%, #5a8a6a 100%)',
			tag: 'Manajemen'
		},
		{
			title: 'Pentingnya Data Terintegrasi untuk Pemantauan Perkembangan Siswa',
			desc: 'Data yang tersebar di berbagai sistem membuat pengambilan keputusan menjadi lambat dan tidak akurat. Simak bagaimana integrasi data mengubah cara institusi memantau performa siswa.',
			gradient: 'linear-gradient(135deg, #e6a23c 0%, #edb85e 100%)',
			tag: 'Data & Insight'
		}
	];
</script>

<section id="artikel" class="scroll-mt-24 px-6 py-20 md:py-28" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-12 text-center transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum uppercase">
				ARTIKEL MASCHE
			</p>
			<h2 class="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				Wawasan untuk Institusi yang Terus Berkembang
			</h2>
		</div>

		<!-- Article cards -->
		<div class="grid gap-6 md:grid-cols-3">
			{#each articles as article, i}
				<div
					class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone/10 transition-all duration-700 ease-out hover:shadow-md hover:ring-plum/15 {visible
						? 'translate-y-0 opacity-100'
						: 'translate-y-8 opacity-0'}"
					style="transition-delay: {100 + i * 100}ms;"
				>
					<!-- Gradient image placeholder (16:9) -->
					<div
						class="relative aspect-video w-full overflow-hidden"
						style="background: {article.gradient};"
					>
						<span
							class="absolute top-3 left-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm"
						>
							{article.tag}
						</span>
					</div>

					<!-- Content -->
					<div class="flex flex-1 flex-col p-6">
						<h3 class="text-[15px] font-bold leading-snug text-plum">
							{article.title}
						</h3>
						<p class="mt-3 flex-1 text-[13px] leading-relaxed text-slate/55">
							{article.desc}
						</p>
						<div class="mt-5">
							<button
								type="button"
								class="cursor-pointer rounded-full border border-plum/25 px-4 py-2 text-[12px] font-semibold text-plum transition-all duration-200 hover:bg-plum hover:text-white"
							>
								Baca selengkapnya
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
