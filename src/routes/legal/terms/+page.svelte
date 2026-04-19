<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const sections = [
		{ id: 'acceptance', label: 'Penerimaan Syarat' },
		{ id: 'definitions', label: 'Definisi' },
		{ id: 'registration', label: 'Pendaftaran Akun' },
		{ id: 'permitted-use', label: 'Penggunaan yang Diizinkan' },
		{ id: 'prohibited-conduct', label: 'Perilaku yang Dilarang' },
		{ id: 'intellectual-property', label: 'Kekayaan Intelektual' },
		{ id: 'data-ownership', label: 'Kepemilikan Data' },
		{ id: 'availability', label: 'Ketersediaan Layanan' },
		{ id: 'fees', label: 'Biaya & Pembayaran' },
		{ id: 'termination', label: 'Pengakhiran' },
		{ id: 'liability', label: 'Batasan Tanggung Jawab' },
		{ id: 'governing-law', label: 'Hukum yang Berlaku' },
		{ id: 'disputes', label: 'Penyelesaian Sengketa' },
		{ id: 'changes', label: 'Perubahan Syarat' },
		{ id: 'contact', label: 'Kontak' }
	];
</script>

<LegalPageLayout
	title="Syarat & Ketentuan"
	subtitle="Perjanjian antara Anda dan Masche Academics."
	effectiveDate="1 Maret 2026"
	lastUpdated="1 Maret 2026"
	{sections}
>
	<h2 id="acceptance">Penerimaan Syarat</h2>
	<p>
		Dengan mengakses atau menggunakan platform Masche Academics ("Platform"), Anda setuju untuk
		terikat oleh Syarat & Ketentuan ("Syarat") ini. Jika Anda memasuki Syarat ini atas nama sebuah
		institusi, Anda menyatakan bahwa Anda memiliki wewenang untuk mengikat institusi tersebut. Jika
		Anda tidak setuju, jangan gunakan Platform.
	</p>

	<h2 id="definitions">Definisi</h2>
	<ul>
		<li><strong>"Platform"</strong> — Aplikasi web, API, dan layanan terkait Masche Academics</li>
		<li>
			<strong>"Institusi"</strong> — Sekolah atau organisasi pendidikan yang berlangganan Platform
		</li>
		<li>
			<strong>"Pengguna"</strong> — Setiap individu yang diberi wewenang oleh Institusi untuk mengakses
			Platform
		</li>
		<li>
			<strong>"Data Siswa"</strong> — Catatan akademik, nilai, absensi, dan informasi terkait siswa lainnya
		</li>
		<li>
			<strong>"Administrator Akun"</strong> — Pengguna yang ditunjuk oleh Institusi dengan hak administratif
			penuh
		</li>
	</ul>

	<h2 id="registration">Pendaftaran Akun</h2>
	<p>
		Untuk menggunakan Platform, Institusi Anda harus mendaftarkan akun melalui perwakilan yang
		berwenang. Anda setuju untuk memberikan informasi pendaftaran yang akurat, terkini, dan lengkap
		serta menjaganya agar tetap diperbarui. Administrator Akun bertanggung jawab untuk mengelola
		akses pengguna dan memastikan semua Pengguna mematuhi Syarat ini.
	</p>
	<p>
		Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun dan atas semua aktivitas yang
		terjadi di bawah akun Anda.
	</p>

	<h2 id="permitted-use">Penggunaan yang Diizinkan</h2>
	<p>
		Platform disediakan secara eksklusif untuk keperluan manajemen institusi pendidikan. Anda dapat
		menggunakan Platform untuk:
	</p>
	<ul>
		<li>Mengelola program akademik, semester, kelas, dan penugasan pengajaran</li>
		<li>Mencatat dan memantau nilai, absensi, dan catatan perilaku siswa</li>
		<li>Menghasilkan laporan dan analitik untuk pengambilan keputusan institusional</li>
		<li>Mengelola data staf dan izin akses berbasis peran</li>
		<li>Memfasilitasi akses portal siswa dan orang tua ke informasi yang diizinkan</li>
	</ul>

	<h2 id="prohibited-conduct">Perilaku yang Dilarang</h2>
	<p>Anda setuju untuk tidak:</p>
	<ul>
		<li>Menggunakan Platform untuk tujuan selain administrasi pendidikan yang sah</li>
		<li>Mencoba mendapatkan akses tidak sah ke akun, sistem, atau data lain</li>
		<li>Merekayasa balik, mendekompilasi, atau membongkar bagian apa pun dari Platform</li>
		<li>Mengikis, memanen, atau mengekstrak data secara sistematis dari Platform</li>
		<li>Membagikan data siswa kepada pihak ketiga yang tidak berwenang</li>
		<li>Menggunakan Platform untuk menyimpan atau mengirimkan kode berbahaya</li>
		<li>Menghindari atau menonaktifkan fitur keamanan atau kontrol akses apa pun</li>
	</ul>

	<h2 id="intellectual-property">Kekayaan Intelektual</h2>
	<p>
		Platform, termasuk desain, kode, fitur, dokumentasi, dan mereknya, adalah kekayaan intelektual
		PT Enumerasi Rekayasa Digital. Syarat ini tidak memberikan hak kepemilikan apa pun atas Platform
		kepada Anda. Anda tidak boleh menyalin, memodifikasi, mendistribusikan, atau membuat karya
		turunan berdasarkan Platform tanpa persetujuan tertulis sebelumnya dari kami.
	</p>

	<h2 id="data-ownership">Kepemilikan Data</h2>
	<p>
		Institusi Anda mempertahankan kepemilikan penuh atas semua data institusi dan data siswa yang
		dimasukkan ke dalam Platform. Masche memproses data ini semata-mata atas nama dan di bawah
		arahan Institusi Anda. Kami tidak mengklaim kepemilikan atas data Anda, dan kami tidak akan
		menggunakannya untuk tujuan yang tidak berkaitan dengan penyediaan Platform.
	</p>
	<p>
		Setelah pengakhiran, Anda dapat mengekspor data Anda dalam jendela ekspor data 90 hari
		sebagaimana dijelaskan dalam Kebijakan Privasi kami.
	</p>

	<h2 id="availability">Ketersediaan Layanan</h2>
	<p>
		Kami berupaya mempertahankan ketersediaan Platform yang tinggi namun tidak menjamin akses yang
		tidak terputus. Kami dapat melakukan pemeliharaan terjadwal dengan pemberitahuan yang wajar
		sebelumnya. Kami tidak bertanggung jawab atas gangguan layanan yang disebabkan oleh keadaan di
		luar kendali wajar kami, termasuk bencana alam, gangguan internet, atau tindakan pemerintah.
	</p>

	<h2 id="fees">Biaya & Pembayaran</h2>
	<p>
		Akses ke Platform memerlukan langganan berbayar. Biaya didasarkan pada paket yang Anda pilih dan
		ditagih sesuai siklus penagihan yang disepakati saat pendaftaran. Semua biaya dikutip dalam
		Rupiah Indonesia (IDR) kecuali dinyatakan lain.
	</p>
	<p>
		Faktur jatuh tempo dalam 30 hari setelah diterbitkan. Keterlambatan pembayaran dapat
		mengakibatkan penangguhan akses sementara setelah masa tenggang 14 hari dan pemberitahuan
		tertulis.
	</p>

	<h2 id="termination">Pengakhiran</h2>
	<p>
		Salah satu pihak dapat mengakhiri perjanjian ini dengan pemberitahuan tertulis 30 hari. Kami
		juga dapat menangguhkan atau mengakhiri akses secara langsung jika Anda melanggar Syarat ini
		atau terlibat dalam perilaku yang dilarang.
	</p>
	<p>
		Setelah pengakhiran, hak Anda untuk menggunakan Platform berakhir segera. Institusi Anda akan
		memiliki 90 hari untuk mengekspor datanya sebelum dihapus secara permanen dari sistem kami.
	</p>

	<h2 id="liability">Batasan Tanggung Jawab</h2>
	<p>
		Sejauh diizinkan oleh hukum, Masche dan afiliasinya tidak bertanggung jawab atas kerugian tidak
		langsung, insidental, khusus, konsekuensial, atau punitif yang timbul dari penggunaan Platform
		Anda, termasuk kehilangan data, pendapatan, atau peluang bisnis. Total tanggung jawab agregat
		kami tidak akan melebihi biaya yang dibayarkan oleh Institusi Anda dalam dua belas (12) bulan
		sebelum klaim.
	</p>

	<h2 id="governing-law">Hukum yang Berlaku</h2>
	<p>
		Syarat ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap proses
		hukum tunduk pada yurisdiksi eksklusif pengadilan yang berlokasi di Kota Bandung, Indonesia.
	</p>

	<h2 id="disputes">Penyelesaian Sengketa</h2>
	<p>
		Dalam hal terjadi sengketa, kedua pihak setuju untuk mencoba penyelesaian melalui negosiasi
		itikad baik selama 30 hari. Jika sengketa tidak dapat diselesaikan melalui negosiasi, sengketa
		tersebut akan diserahkan ke arbitrase mengikat sesuai dengan peraturan Badan Arbitrase Nasional
		Indonesia (BANI), dengan proses yang dilakukan di Kota Bandung.
	</p>

	<h2 id="changes">Perubahan Syarat</h2>
	<p>
		Kami dapat memperbarui Syarat ini dari waktu ke waktu. Perubahan material akan dikomunikasikan
		kepada Administrator Akun melalui email setidaknya 30 hari sebelum berlaku. Penggunaan Platform
		yang berkelanjutan setelah perubahan berlaku merupakan penerimaan atas Syarat yang direvisi.
	</p>

	<h2 id="contact">Kontak</h2>
	<p>Untuk pertanyaan tentang Syarat ini, hubungi kami di:</p>
	<ul>
		<li>Email: <strong>legal@masche.id</strong></li>
		<li>Alamat: PT Enumerasi Rekayasa Digital, Kota Bandung, Indonesia</li>
	</ul>
</LegalPageLayout>
