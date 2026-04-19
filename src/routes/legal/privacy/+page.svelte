<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const sections = [
		{ id: 'introduction', label: 'Pendahuluan' },
		{ id: 'information-we-collect', label: 'Informasi yang Kami Kumpulkan' },
		{ id: 'how-we-use', label: 'Cara Kami Menggunakan Informasi' },
		{ id: 'data-sharing', label: 'Berbagi Data' },
		{ id: 'student-data', label: 'Perlindungan Data Siswa' },
		{ id: 'data-security', label: 'Keamanan Data' },
		{ id: 'data-retention', label: 'Retensi Data' },
		{ id: 'your-rights', label: 'Hak Anda' },
		{ id: 'cookies', label: 'Cookie' },
		{ id: 'changes', label: 'Perubahan Kebijakan' },
		{ id: 'contact', label: 'Hubungi Kami' }
	];
</script>

<LegalPageLayout
	title="Kebijakan Privasi"
	subtitle="Cara kami mengumpulkan, menggunakan, dan melindungi data Anda."
	effectiveDate="1 Maret 2026"
	lastUpdated="1 Maret 2026"
	{sections}
>
	<h2 id="introduction">Pendahuluan</h2>
	<p>
		Masche Academics ("Masche," "kami," atau "milik kami") dioperasikan oleh PT Enums Teknologi
		Indonesia. Kebijakan Privasi ini menjelaskan cara kami mengumpulkan, menggunakan, mengungkapkan,
		dan melindungi informasi Anda saat Anda menggunakan platform Masche, termasuk aplikasi web, API,
		dan layanan terkait kami (secara kolektif disebut "Platform").
	</p>
	<p>
		Dengan mengakses atau menggunakan Platform, Anda menyetujui ketentuan Kebijakan Privasi ini.
		Jika Anda tidak menyetujuinya, harap hentikan penggunaan Platform segera.
	</p>

	<h2 id="information-we-collect">Informasi yang Kami Kumpulkan</h2>
	<h3>Informasi Akun</h3>
	<p>
		Saat institusi Anda mendaftar ke Masche, kami mengumpulkan nama, alamat email, nomor telepon,
		dan jabatan pengguna yang berwenang. Administrator akun memberikan informasi ini selama proses
		pendaftaran.
	</p>
	<h3>Data Institusi</h3>
	<p>
		Ini mencakup program akademik, struktur kelas, konfigurasi semester, penugasan pengajaran, dan
		data organisasi lainnya yang dimasukkan oleh institusi Anda untuk menjalankan Platform.
	</p>
	<h3>Data Siswa</h3>
	<p>
		Data siswa — termasuk nama, nomor identitas (NISN), nilai, absensi, catatan perilaku, rekam
		kesehatan, dan dokumen kelulusan (IJAZAH) — dimasukkan dan dikelola oleh staf institusi yang
		berwenang.
	</p>
	<h3>Data Penggunaan</h3>
	<p>
		Kami secara otomatis mengumpulkan informasi tentang cara Anda berinteraksi dengan Platform,
		termasuk halaman yang dikunjungi, fitur yang digunakan, cap waktu, jenis perangkat, browser, dan
		alamat IP.
	</p>

	<h2 id="how-we-use">Cara Kami Menggunakan Informasi</h2>
	<ul>
		<li>Untuk menyediakan, memelihara, dan meningkatkan Platform serta fitur-fiturnya</li>
		<li>Untuk mengautentikasi pengguna dan menerapkan kontrol akses berbasis peran</li>
		<li>Untuk menghasilkan laporan, analitik, dan insight bagi institusi Anda</li>
		<li>
			Untuk mengkomunikasikan pembaruan penting, peringatan keamanan, dan pemberitahuan layanan
		</li>
		<li>Untuk mematuhi hukum dan kewajiban hukum yang berlaku</li>
		<li>Untuk mendeteksi, mencegah, dan mengatasi penipuan, penyalahgunaan, dan masalah teknis</li>
	</ul>

	<h2 id="data-sharing">Berbagi Data</h2>
	<p>Kami tidak menjual data Anda. Kami dapat berbagi informasi dengan:</p>
	<ul>
		<li>
			<strong>Penyedia infrastruktur</strong> — Layanan hosting dan penyimpanan cloud yang memproses data
			atas nama kami, dengan tunduk pada perjanjian pemrosesan data yang ketat.
		</li>
		<li>
			<strong>Layanan analitik</strong> — Data penggunaan yang diagregasi dan dianonimkan untuk membantu
			kami meningkatkan Platform. Tidak ada data siswa yang dapat diidentifikasi secara pribadi yang dibagikan
			untuk keperluan analitik.
		</li>
		<li>
			<strong>Otoritas hukum</strong> — Ketika diwajibkan oleh hukum, perintah pengadilan, atau regulasi
			pemerintah.
		</li>
	</ul>
	<p>
		Semua data institusi dan siswa disimpan di pusat data Indonesia untuk memenuhi persyaratan
		residensi data lokal.
	</p>

	<h2 id="student-data">Perlindungan Data Siswa</h2>
	<p>Kami mengakui sensitivitas data siswa dan menerapkan perlindungan tambahan:</p>
	<ul>
		<li>Data siswa dimiliki oleh institusi, bukan oleh Masche</li>
		<li>Akses ke catatan siswa diatur oleh izin berbasis peran yang ditetapkan institusi Anda</li>
		<li>
			Persetujuan orang tua diperlukan untuk pengumpulan data anak di bawah umur, sebagaimana
			dikelola oleh institusi
		</li>
		<li>
			Data siswa tidak pernah digunakan untuk periklanan, pembuatan profil, atau pemasaran pihak
			ketiga
		</li>
		<li>Institusi dapat meminta ekspor atau penghapusan penuh data siswa kapan saja</li>
	</ul>

	<h2 id="data-security">Keamanan Data</h2>
	<p>
		Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi data Anda, termasuk:
	</p>
	<ul>
		<li>Enkripsi AES-256 untuk data saat diam dan TLS 1.3 untuk data dalam transit</li>
		<li>Autentikasi berbasis JWT dengan upaya login yang dibatasi frekuensinya</li>
		<li>Kontrol akses berbasis peran dengan enam level izin yang terperinci</li>
		<li>Jejak audit komprehensif untuk semua akses dan modifikasi data</li>
		<li>Penilaian keamanan dan pengujian penetrasi secara berkala</li>
	</ul>

	<h2 id="data-retention">Retensi Data</h2>
	<p>
		Kami menyimpan data Anda selama institusi Anda memiliki akun aktif. Setelah akun diakhiri, kami
		menyediakan jendela 90 hari untuk ekspor data, setelah itu semua data institusi dan siswa akan
		dihapus secara permanen dari sistem kami, termasuk cadangan.
	</p>
	<p>
		Data penggunaan yang dianonimkan dan diagregasi dapat disimpan tanpa batas waktu untuk keperluan
		peningkatan produk.
	</p>

	<h2 id="your-rights">Hak Anda</h2>
	<p>Anda dan institusi Anda memiliki hak untuk:</p>
	<ul>
		<li><strong>Akses</strong> — Meminta salinan data yang kami simpan tentang Anda</li>
		<li><strong>Koreksi</strong> — Meminta koreksi data yang tidak akurat atau tidak lengkap</li>
		<li>
			<strong>Penghapusan</strong> — Meminta penghapusan data Anda, dengan tunduk pada kewajiban retensi
			hukum
		</li>
		<li>
			<strong>Portabilitas</strong> — Menerima data Anda dalam format terstruktur yang dapat dibaca mesin
		</li>
		<li>
			<strong>Keberatan</strong> — Mengajukan keberatan terhadap aktivitas pemrosesan tertentu
		</li>
	</ul>
	<p>
		Untuk menggunakan hak-hak ini, hubungi kami di <strong>privacy@masche.id</strong>.
	</p>

	<h2 id="cookies">Cookie</h2>
	<p>
		Kami menggunakan cookie esensial untuk menjaga sesi dan status autentikasi Anda. Kami juga
		menggunakan cookie analitik untuk memahami cara Platform digunakan. Anda dapat mengelola
		preferensi cookie melalui pengaturan browser Anda. Menonaktifkan cookie esensial dapat
		memengaruhi fungsionalitas Platform.
	</p>

	<h2 id="changes">Perubahan Kebijakan</h2>
	<p>
		Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Ketika kami membuat perubahan
		material, kami akan memberi tahu administrator akun melalui email dan menampilkan pemberitahuan
		di dalam Platform setidaknya 30 hari sebelum perubahan berlaku.
	</p>

	<h2 id="contact">Hubungi Kami</h2>
	<p>
		Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik data kami, hubungi kami
		di:
	</p>
	<ul>
		<li>Email: <strong>privacy@masche.id</strong></li>
		<li>Alamat: PT Enumerasi Rekayasa Digital, Kota Bandung, Indonesia</li>
	</ul>
</LegalPageLayout>
