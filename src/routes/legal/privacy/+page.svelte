<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const sections = [
		{ id: 'introduction', label: 'Introduction' },
		{ id: 'information-we-collect', label: 'Information We Collect' },
		{ id: 'how-we-use', label: 'How We Use Your Information' },
		{ id: 'data-sharing', label: 'Data Sharing' },
		{ id: 'student-data', label: 'Student Data Protection' },
		{ id: 'data-security', label: 'Data Security' },
		{ id: 'data-retention', label: 'Data Retention' },
		{ id: 'your-rights', label: 'Your Rights' },
		{ id: 'cookies', label: 'Cookies' },
		{ id: 'changes', label: 'Changes to This Policy' },
		{ id: 'contact', label: 'Contact Us' }
	];
</script>

<LegalPageLayout
	title="Privacy Policy"
	subtitle="How we collect, use, and protect your data."
	effectiveDate="March 1, 2026"
	lastUpdated="March 1, 2026"
	{sections}
>
	<h2 id="introduction">Introduction</h2>
	<p>
		Masche Academics ("Masche," "we," "our," or "us") is operated by PT Enums Teknologi Indonesia.
		This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
		you use the Masche platform, including our web application, APIs, and related services
		(collectively, the "Platform").
	</p>
	<p>
		By accessing or using the Platform, you agree to the terms of this Privacy Policy. If you do not
		agree, please discontinue use of the Platform immediately.
	</p>

	<h2 id="information-we-collect">Information We Collect</h2>
	<h3>Account Information</h3>
	<p>
		When your institution registers for Masche, we collect names, email addresses, phone numbers,
		and roles of authorized users. An account administrator provides this information during setup.
	</p>
	<h3>Institutional Data</h3>
	<p>
		This includes academic programs, class structures, term configurations, teaching assignments, and
		other organizational data entered by your institution to operate the Platform.
	</p>
	<h3>Student Records</h3>
	<p>
		Student data — including names, identification numbers (NISN), grades, attendance, behavioral
		notes, health records, and graduation documents (IJAZAH) — is entered and managed by authorized
		institutional staff.
	</p>
	<h3>Usage Data</h3>
	<p>
		We automatically collect information about how you interact with the Platform, including pages
		visited, features used, timestamps, device type, browser, and IP address.
	</p>

	<h2 id="how-we-use">How We Use Your Information</h2>
	<ul>
		<li>To provide, maintain, and improve the Platform and its features</li>
		<li>To authenticate users and enforce role-based access control</li>
		<li>To generate reports, analytics, and insights for your institution</li>
		<li>To communicate important updates, security alerts, and service notices</li>
		<li>To comply with applicable laws and legal obligations</li>
		<li>To detect, prevent, and address fraud, abuse, and technical issues</li>
	</ul>

	<h2 id="data-sharing">Data Sharing</h2>
	<p>We do not sell your data. We may share information with:</p>
	<ul>
		<li>
			<strong>Infrastructure providers</strong> — Cloud hosting and storage services that process
			data on our behalf, subject to strict data processing agreements.
		</li>
		<li>
			<strong>Analytics services</strong> — Aggregated, anonymized usage data to help us improve
			the Platform. No personally identifiable student data is shared for analytics.
		</li>
		<li>
			<strong>Legal authorities</strong> — When required by law, court order, or governmental
			regulation.
		</li>
	</ul>
	<p>
		All institutional and student data is stored within Indonesian data centers to comply with local
		data residency requirements.
	</p>

	<h2 id="student-data">Student Data Protection</h2>
	<p>
		We recognize the sensitivity of student data and apply additional safeguards:
	</p>
	<ul>
		<li>Student data is owned by the institution, not by Masche</li>
		<li>Access to student records is governed by role-based permissions set by your institution</li>
		<li>
			Parental consent is required for data collection of minors, as managed by the institution
		</li>
		<li>Student data is never used for advertising, profiling, or third-party marketing</li>
		<li>
			Institutions may request full export or deletion of student data at any time
		</li>
	</ul>

	<h2 id="data-security">Data Security</h2>
	<p>
		We implement industry-standard security measures to protect your data, including:
	</p>
	<ul>
		<li>AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
		<li>JWT-based authentication with rate-limited login attempts</li>
		<li>Role-based access control with six granular permission levels</li>
		<li>Comprehensive audit trails for all data access and modifications</li>
		<li>Regular security assessments and penetration testing</li>
	</ul>

	<h2 id="data-retention">Data Retention</h2>
	<p>
		We retain your data for as long as your institution maintains an active account. Upon account
		termination, we provide a 90-day window for data export, after which all institutional and
		student data is permanently deleted from our systems, including backups.
	</p>
	<p>
		Anonymized, aggregated usage data may be retained indefinitely for product improvement purposes.
	</p>

	<h2 id="your-rights">Your Rights</h2>
	<p>You and your institution have the right to:</p>
	<ul>
		<li><strong>Access</strong> — Request a copy of the data we hold about you</li>
		<li><strong>Correction</strong> — Request correction of inaccurate or incomplete data</li>
		<li><strong>Deletion</strong> — Request deletion of your data, subject to legal retention obligations</li>
		<li><strong>Portability</strong> — Receive your data in a structured, machine-readable format</li>
		<li><strong>Objection</strong> — Object to specific processing activities</li>
	</ul>
	<p>
		To exercise these rights, contact us at <strong>privacy@masche.id</strong>.
	</p>

	<h2 id="cookies">Cookies</h2>
	<p>
		We use essential cookies to maintain your session and authentication state. We also use analytics
		cookies to understand how the Platform is used. You can manage cookie preferences through your
		browser settings. Disabling essential cookies may affect Platform functionality.
	</p>

	<h2 id="changes">Changes to This Policy</h2>
	<p>
		We may update this Privacy Policy from time to time. When we make material changes, we will
		notify account administrators via email and display a notice within the Platform at least 30 days
		before the changes take effect.
	</p>

	<h2 id="contact">Contact Us</h2>
	<p>
		If you have questions about this Privacy Policy or our data practices, contact us at:
	</p>
	<ul>
		<li>Email: <strong>privacy@masche.id</strong></li>
		<li>Address: PT Enums Teknologi Indonesia, Jakarta, Indonesia</li>
	</ul>
</LegalPageLayout>
