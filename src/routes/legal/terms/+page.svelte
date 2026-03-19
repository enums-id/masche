<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const sections = [
		{ id: 'acceptance', label: 'Acceptance of Terms' },
		{ id: 'definitions', label: 'Definitions' },
		{ id: 'registration', label: 'Account Registration' },
		{ id: 'permitted-use', label: 'Permitted Use' },
		{ id: 'prohibited-conduct', label: 'Prohibited Conduct' },
		{ id: 'intellectual-property', label: 'Intellectual Property' },
		{ id: 'data-ownership', label: 'Data Ownership' },
		{ id: 'availability', label: 'Service Availability' },
		{ id: 'fees', label: 'Fees & Payment' },
		{ id: 'termination', label: 'Termination' },
		{ id: 'liability', label: 'Limitation of Liability' },
		{ id: 'governing-law', label: 'Governing Law' },
		{ id: 'disputes', label: 'Dispute Resolution' },
		{ id: 'changes', label: 'Changes to Terms' },
		{ id: 'contact', label: 'Contact' }
	];
</script>

<LegalPageLayout
	title="Terms of Service"
	subtitle="The agreement between you and Masche Academics."
	effectiveDate="March 1, 2026"
	lastUpdated="March 1, 2026"
	{sections}
>
	<h2 id="acceptance">Acceptance of Terms</h2>
	<p>
		By accessing or using the Masche Academics platform ("Platform"), you agree to be bound by these
		Terms of Service ("Terms"). If you are entering into these Terms on behalf of an institution, you
		represent that you have the authority to bind that institution. If you do not agree, do not use
		the Platform.
	</p>

	<h2 id="definitions">Definitions</h2>
	<ul>
		<li><strong>"Platform"</strong> — The Masche Academics web application, APIs, and related services</li>
		<li><strong>"Institution"</strong> — The school or educational organization subscribing to the Platform</li>
		<li><strong>"User"</strong> — Any individual authorized by the Institution to access the Platform</li>
		<li><strong>"Student Data"</strong> — Academic records, grades, attendance, and other student-related information</li>
		<li><strong>"Account Administrator"</strong> — The User designated by the Institution with full administrative privileges</li>
	</ul>

	<h2 id="registration">Account Registration</h2>
	<p>
		To use the Platform, your Institution must register an account through an authorized representative.
		You agree to provide accurate, current, and complete registration information and to keep it updated.
		The Account Administrator is responsible for managing user access and ensuring all Users comply with
		these Terms.
	</p>
	<p>
		You are responsible for maintaining the confidentiality of account credentials and for all
		activities that occur under your account.
	</p>

	<h2 id="permitted-use">Permitted Use</h2>
	<p>
		The Platform is provided exclusively for educational institution management purposes. You may use
		the Platform to:
	</p>
	<ul>
		<li>Manage academic programs, terms, classes, and teaching assignments</li>
		<li>Record and track student grades, attendance, and behavioral notes</li>
		<li>Generate reports and analytics for institutional decision-making</li>
		<li>Manage staff records and role-based access permissions</li>
		<li>Facilitate student and parent portal access to authorized information</li>
	</ul>

	<h2 id="prohibited-conduct">Prohibited Conduct</h2>
	<p>You agree not to:</p>
	<ul>
		<li>Use the Platform for any purpose other than legitimate educational administration</li>
		<li>Attempt to gain unauthorized access to other accounts, systems, or data</li>
		<li>Reverse engineer, decompile, or disassemble any part of the Platform</li>
		<li>Scrape, harvest, or systematically extract data from the Platform</li>
		<li>Share student data with unauthorized third parties</li>
		<li>Use the Platform to store or transmit malicious code</li>
		<li>Circumvent or disable any security or access control features</li>
	</ul>

	<h2 id="intellectual-property">Intellectual Property</h2>
	<p>
		The Platform, including its design, code, features, documentation, and branding, is the
		intellectual property of PT Enums Teknologi Indonesia. These Terms do not grant you any ownership
		rights to the Platform. You may not copy, modify, distribute, or create derivative works based on
		the Platform without our prior written consent.
	</p>

	<h2 id="data-ownership">Data Ownership</h2>
	<p>
		Your Institution retains full ownership of all institutional data and student data entered into
		the Platform. Masche processes this data solely on behalf of and under the direction of your
		Institution. We do not claim ownership of your data, and we will not use it for purposes
		unrelated to providing the Platform.
	</p>
	<p>
		Upon termination, you may export your data within the 90-day data export window described in our
		Privacy Policy.
	</p>

	<h2 id="availability">Service Availability</h2>
	<p>
		We strive to maintain high availability of the Platform but do not guarantee uninterrupted
		access. We may perform scheduled maintenance with reasonable advance notice. We are not liable
		for service interruptions caused by circumstances beyond our reasonable control, including
		natural disasters, internet outages, or government actions.
	</p>

	<h2 id="fees">Fees & Payment</h2>
	<p>
		Access to the Platform requires a paid subscription. Fees are based on your selected plan and
		billed according to the billing cycle agreed upon during registration. All fees are quoted in
		Indonesian Rupiah (IDR) unless otherwise stated.
	</p>
	<p>
		Invoices are due within 30 days of issuance. Late payments may result in temporary suspension of
		access after a 14-day grace period and written notice.
	</p>

	<h2 id="termination">Termination</h2>
	<p>
		Either party may terminate this agreement with 30 days' written notice. We may also suspend or
		terminate access immediately if you violate these Terms or engage in prohibited conduct.
	</p>
	<p>
		Upon termination, your right to use the Platform ceases immediately. Your Institution will have
		90 days to export its data before it is permanently deleted from our systems.
	</p>

	<h2 id="liability">Limitation of Liability</h2>
	<p>
		To the maximum extent permitted by law, Masche and its affiliates shall not be liable for any
		indirect, incidental, special, consequential, or punitive damages arising from your use of the
		Platform, including loss of data, revenue, or business opportunities. Our total aggregate
		liability shall not exceed the fees paid by your Institution in the twelve (12) months preceding
		the claim.
	</p>

	<h2 id="governing-law">Governing Law</h2>
	<p>
		These Terms are governed by and construed in accordance with the laws of the Republic of
		Indonesia. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts
		located in Jakarta, Indonesia.
	</p>

	<h2 id="disputes">Dispute Resolution</h2>
	<p>
		In the event of a dispute, both parties agree to attempt resolution through good faith
		negotiation for a period of 30 days. If the dispute cannot be resolved through negotiation,
		it shall be submitted to binding arbitration in accordance with the rules of the Indonesian
		National Board of Arbitration (BANI), with proceedings conducted in Jakarta.
	</p>

	<h2 id="changes">Changes to Terms</h2>
	<p>
		We may update these Terms from time to time. Material changes will be communicated to Account
		Administrators via email at least 30 days before they take effect. Continued use of the Platform
		after changes become effective constitutes acceptance of the revised Terms.
	</p>

	<h2 id="contact">Contact</h2>
	<p>
		For questions about these Terms, contact us at:
	</p>
	<ul>
		<li>Email: <strong>legal@masche.id</strong></li>
		<li>Address: PT Enums Teknologi Indonesia, Jakarta, Indonesia</li>
	</ul>
</LegalPageLayout>
