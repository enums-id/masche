<script lang="ts">
	import { base } from '$app/paths';
	import PageShell from '$lib/components/PageShell.svelte';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const values = [
		{
			title: 'Sekolah adalah ekosistem',
			desc: 'Setiap peran — manajemen, guru, staf, siswa, dan orang tua — saling terhubung. Platform kami mencerminkan realita tersebut.',
			color: 'bg-plum/10 text-plum'
		},
		{
			title: 'Data harus melayani manusia',
			desc: 'Bukan sebaliknya. Kami mengubah data mentah menjadi insight yang jelas dan dapat ditindaklanjuti oleh setiap pemangku kepentingan.',
			color: 'bg-sage/15 text-sage-dark'
		},
		{
			title: 'Kesederhanaan adalah fitur',
			desc: 'Sistem yang powerful tidak harus rumit. Kami terus berupaya membuat alur kerja yang kompleks terasa mudah dan alami.',
			color: 'bg-amber/10 text-amber-dark'
		},
		{
			title: 'Dibangun untuk Indonesia',
			desc: 'Dilokalisasi sejak awal — NISN, IJAZAH, antarmuka dwibahasa, dan kepatuhan terhadap standar pendidikan nasional.',
			color: 'bg-ink/8 text-ink'
		}
	];
</script>

<PageShell title="Tentang Masche Academics" subtitle="Sistem di balik setiap sekolah yang berjalan dengan baik.">
	<div class="space-y-20" use:reveal={() => (visible = true)}>
		<!-- Misi -->
		<section
			class="transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				Misi Kami
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				Membawa kejelasan dalam pengelolaan pendidikan.
			</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				<p>
					Di seluruh Indonesia, ribuan sekolah masih beroperasi dengan tambal sulam spreadsheet, grup
					WhatsApp, formulir kertas, dan perangkat lunak yang tidak terhubung satu sama lain. Data
					akademik ada di satu sistem, absensi di sistem lain, keuangan di sistem ketiga — dan
					semuanya tidak bisa saling berbicara.
				</p>
				<p>
					Masche Academics hadir untuk menggantikan fragmentasi itu dengan satu platform yang
					koheren. Kami memberikan infrastruktur yang layak bagi sekolah — agar administrator bisa
					fokus memimpin, guru bisa fokus mengajar, dan siswa bisa fokus belajar.
				</p>
			</div>
		</section>

		<!-- Cerita -->
		<section
			class="transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				Cerita Kami
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">Lahir dari masalah nyata.</h2>
			<div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate/60">
				<p>
					Masche dibangun oleh <span class="font-medium text-ink">Enums</span>, sebuah studio
					teknologi yang berbasis di Indonesia. Setelah bekerja erat dengan berbagai sekolah dan
					menyaksikan langsung betapa banyak waktu dan energi yang terbuang akibat alur kerja
					administratif yang rusak, kami tahu pasti ada cara yang lebih baik.
				</p>
				<p>
					Kami memulai dengan satu keyakinan sederhana: sekolah layak mendapatkan infrastruktur
					sebaik kualitas pengajaran mereka. Keyakinan itulah yang menjadi Masche — platform yang
					dirancang dari dasar untuk cara kerja sekolah Indonesia yang sebenarnya.
				</p>
			</div>
		</section>

		<!-- Nilai -->
		<section
			class="transition-all delay-200 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				Yang Kami Yakini
			</p>
			<h2 class="text-2xl font-bold tracking-tight text-ink">
				Prinsip yang membentuk setiap keputusan.
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
				Siap melihat Masche beraksi?
			</h2>
			<p class="mt-3 text-[15px] text-slate/50">
				Jadwalkan demo personal dan lihat bagaimana Masche dapat mengubah operasional sekolah Anda.
			</p>
			<a
				href="{base}/contact"
				class="mt-8 inline-block cursor-pointer rounded-full bg-plum px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-plum/20"
			>
				Request Demo
			</a>
		</section>
	</div>
</PageShell>
