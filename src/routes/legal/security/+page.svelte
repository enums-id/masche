<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const highlights = [
		{
			label: 'Enkripsi AES-256',
			desc: 'Semua data dienkripsi saat diam dan dalam transit.',
			icon: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
		},
		{
			label: 'Akses Berbasis Peran',
			desc: 'Enam level izin, prinsip hak minimum diterapkan.',
			icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		},
		{
			label: 'Jejak Audit',
			desc: 'Setiap tindakan dicatat dan dapat ditelusuri.',
			icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		},
		{
			label: 'Uptime 99,9%',
			desc: 'Ketersediaan tinggi dengan infrastruktur redundan.',
			icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
		},
		{
			label: 'Pencadangan Harian',
			desc: 'Cadangan otomatis dengan kemampuan pemulihan point-in-time.',
			icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
		},
		{
			label: 'Pembatasan Akses',
			desc: 'Perlindungan brute-force di semua endpoint.',
			icon: 'M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286ZM12 15.75h.008v.008H12v-.008Z'
		}
	];

	const sections = [
		{ id: 'commitment', label: 'Komitmen Kami' },
		{ id: 'infrastructure', label: 'Keamanan Infrastruktur' },
		{ id: 'application', label: 'Keamanan Aplikasi' },
		{ id: 'data-protection', label: 'Perlindungan Data' },
		{ id: 'access-controls', label: 'Kontrol Akses' },
		{ id: 'monitoring', label: 'Pemantauan & Respons Insiden' },
		{ id: 'compliance', label: 'Kepatuhan Regulasi' },
		{ id: 'disclosure', label: 'Pengungkapan Bertanggung Jawab' }
	];
</script>

<LegalPageLayout
	title="Keamanan"
	subtitle="Cara kami melindungi data institusi Anda."
	effectiveDate="1 Maret 2026"
	lastUpdated="1 Maret 2026"
	{sections}
>
	<!-- Highlight cards -->
	<div class="not-prose mb-12 grid grid-cols-2 gap-3 md:grid-cols-3">
		{#each highlights as item}
			<div class="rounded-2xl border border-stone/15 bg-stone/4 p-5">
				<div class="mb-3 flex size-9 items-center justify-center rounded-xl bg-plum/10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4.5 text-plum"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
					</svg>
				</div>
				<p class="text-[13px] font-semibold text-ink">{item.label}</p>
				<p class="mt-1 text-[11px] leading-relaxed text-slate/45">{item.desc}</p>
			</div>
		{/each}
	</div>

	<h2 id="commitment">Komitmen Keamanan Kami</h2>
	<p>
		Di Masche, keamanan bukan sekadar tambahan — ini adalah fondasi dari segalanya yang kami bangun.
		Sekolah mempercayakan kepada kami data sensitif tentang siswa, staf, dan operasional. Kami
		mengambil tanggung jawab itu dengan serius dan menerapkan beberapa lapisan perlindungan untuk
		memastikan data Anda tetap aman, privat, dan tersedia.
	</p>

	<h2 id="infrastructure">Keamanan Infrastruktur</h2>
	<p>
		Platform Masche dihosting di infrastruktur cloud kelas enterprise di dalam pusat data Indonesia,
		memastikan kepatuhan terhadap persyaratan residensi data lokal. Infrastruktur kami meliputi:
	</p>
	<ul>
		<li>Server redundan di beberapa zona ketersediaan untuk ketersediaan tinggi</li>
		<li>Enkripsi AES-256 untuk semua data saat diam</li>
		<li>Enkripsi TLS 1.3 untuk semua data dalam transit</li>
		<li>Pencadangan harian otomatis dengan kemampuan pemulihan point-in-time</li>
		<li>Firewall tingkat jaringan dan sistem deteksi intrusi</li>
		<li>Perlindungan DDoS dan penyaringan lalu lintas</li>
	</ul>

	<h2 id="application">Keamanan Aplikasi</h2>
	<p>
		Lapisan aplikasi kami dibangun dengan praktik terbaik keamanan di setiap tingkat:
	</p>
	<ul>
		<li>Autentikasi berbasis JWT dengan rotasi token yang aman</li>
		<li>Upaya login yang dibatasi frekuensinya untuk mencegah serangan brute-force</li>
		<li>Validasi dan sanitasi input pada semua endpoint yang menghadap pengguna</li>
		<li>Perlindungan terhadap kerentanan OWASP Top 10 (XSS, SQL injection, CSRF, dll.)</li>
		<li>Header Content Security Policy untuk mencegah injeksi kode</li>
		<li>Audit dependensi rutin dan pemindaian kerentanan otomatis</li>
	</ul>

	<h2 id="data-protection">Perlindungan Data</h2>
	<p>
		Kami menerapkan isolasi dan tindakan perlindungan data yang ketat:
	</p>
	<ul>
		<li>Arsitektur multi-tenant dengan isolasi data yang lengkap antar institusi</li>
		<li>Kunci enkripsi yang dikelola per-tenant untuk lapisan pemisahan tambahan</li>
		<li>Cadangan otomatis yang disimpan di lokasi yang terpisah secara geografis</li>
		<li>Minimisasi data — kami hanya mengumpulkan dan menyimpan apa yang diperlukan untuk Platform berfungsi</li>
	</ul>

	<h2 id="access-controls">Kontrol Akses</h2>
	<p>
		Masche menerapkan sistem izin enam peran yang dirancang berdasarkan prinsip hak minimum:
	</p>
	<ul>
		<li><strong>Admin Tenant</strong> — Akses penuh ke semua pengaturan dan data institusi</li>
		<li><strong>Staf Akademik</strong> — Akses baca/tulis ke catatan akademik di seluruh institusi</li>
		<li><strong>Guru</strong> — Akses baca/tulis terbatas pada kelas dan siswa mereka sendiri</li>
		<li><strong>Staf Non-Akademik</strong> — Akses terbatas ke data operasional yang relevan dengan peran mereka</li>
		<li><strong>Siswa</strong> — Akses hanya-baca ke catatan mereka sendiri melalui portal siswa</li>
		<li><strong>Orang Tua</strong> — Akses hanya-baca ke catatan anak mereka melalui portal orang tua</li>
	</ul>
	<p>
		Semua perubahan izin dicatat, dan sesi dikelola dengan kedaluwarsa otomatis dan persyaratan
		autentikasi ulang.
	</p>

	<h2 id="monitoring">Pemantauan & Respons Insiden</h2>
	<p>
		Kami mempertahankan pemantauan berkelanjutan dan proses respons insiden yang terstruktur:
	</p>
	<ul>
		<li>Pemantauan otomatis 24/7 untuk kesehatan sistem, performa, dan kejadian keamanan</li>
		<li>Peringatan real-time untuk pola akses yang tidak wajar atau insiden keamanan yang mungkin terjadi</li>
		<li>Jejak audit komprehensif yang mencatat semua akses data dan perubahan sistem</li>
		<li>Prosedur respons insiden yang terdokumentasi dengan tingkat keparahan yang jelas</li>
		<li>Institusi yang terdampak diberitahu dalam 72 jam setelah insiden keamanan dikonfirmasi</li>
	</ul>

	<h2 id="compliance">Kepatuhan Regulasi</h2>
	<p>
		Masche dirancang untuk mematuhi regulasi perlindungan data Indonesia, termasuk:
	</p>
	<ul>
		<li>UU PDP (Undang-Undang Pelindungan Data Pribadi) — Undang-Undang Perlindungan Data Pribadi Indonesia</li>
		<li>Persyaratan residensi data — semua data disimpan dalam yurisdiksi Indonesia</li>
		<li>Standar penanganan data sektor pendidikan sebagaimana ditetapkan oleh Kementerian Pendidikan</li>
	</ul>
	<p>
		Kami secara rutin meninjau praktik kami untuk memastikan kepatuhan yang berkelanjutan seiring
		berkembangnya regulasi.
	</p>

	<h2 id="disclosure">Pengungkapan Bertanggung Jawab</h2>
	<p>
		Kami menyambut dan menghargai penelitian keamanan yang bertanggung jawab. Jika Anda menemukan
		kerentanan dalam platform Masche, harap laporkan kepada kami di <strong>security@masche.id</strong>. Kami meminta Anda untuk:
	</p>
	<ul>
		<li>Memberikan deskripsi detail tentang kerentanan dan langkah-langkah untuk mereproduksinya</li>
		<li>Memberikan kami waktu yang wajar untuk menyelidiki dan mengatasi masalah sebelum pengungkapan publik</li>
		<li>Tidak mengakses atau memodifikasi data milik pengguna atau institusi lain</li>
	</ul>
	<p>
		Kami berkomitmen untuk mengakui laporan dengan segera dan bekerja sama dengan peneliti untuk
		menyelesaikan masalah secara bertanggung jawab.
	</p>
</LegalPageLayout>
