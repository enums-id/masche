<script lang="ts">
	import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';

	const highlights = [
		{
			label: 'AES-256 Encryption',
			desc: 'All data encrypted at rest and in transit.',
			icon: 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
		},
		{
			label: 'Role-Based Access',
			desc: 'Six permission levels, least-privilege enforced.',
			icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		},
		{
			label: 'Audit Trail',
			desc: 'Every action logged and traceable.',
			icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		},
		{
			label: '99.9% Uptime',
			desc: 'High availability with redundant infrastructure.',
			icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
		},
		{
			label: 'Daily Backups',
			desc: 'Automated backups with point-in-time recovery.',
			icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125'
		},
		{
			label: 'Rate Limiting',
			desc: 'Brute-force protection on all endpoints.',
			icon: 'M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286ZM12 15.75h.008v.008H12v-.008Z'
		}
	];

	const sections = [
		{ id: 'commitment', label: 'Our Commitment' },
		{ id: 'infrastructure', label: 'Infrastructure Security' },
		{ id: 'application', label: 'Application Security' },
		{ id: 'data-protection', label: 'Data Protection' },
		{ id: 'access-controls', label: 'Access Controls' },
		{ id: 'monitoring', label: 'Monitoring & Incident Response' },
		{ id: 'compliance', label: 'Compliance' },
		{ id: 'disclosure', label: 'Responsible Disclosure' }
	];
</script>

<LegalPageLayout
	title="Security"
	subtitle="How we protect your institution's data."
	effectiveDate="March 1, 2026"
	lastUpdated="March 1, 2026"
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

	<h2 id="commitment">Our Security Commitment</h2>
	<p>
		At Masche, security is not an afterthought — it is foundational to everything we build. Schools
		entrust us with sensitive data about students, staff, and operations. We take that responsibility
		seriously and implement multiple layers of protection to ensure your data remains safe, private,
		and available.
	</p>

	<h2 id="infrastructure">Infrastructure Security</h2>
	<p>
		The Masche platform is hosted on enterprise-grade cloud infrastructure within Indonesian data
		centers, ensuring compliance with local data residency requirements. Our infrastructure includes:
	</p>
	<ul>
		<li>Redundant servers across multiple availability zones for high availability</li>
		<li>AES-256 encryption for all data at rest</li>
		<li>TLS 1.3 encryption for all data in transit</li>
		<li>Automated daily backups with point-in-time recovery capability</li>
		<li>Network-level firewalls and intrusion detection systems</li>
		<li>DDoS protection and traffic filtering</li>
	</ul>

	<h2 id="application">Application Security</h2>
	<p>
		Our application layer is built with security best practices at every level:
	</p>
	<ul>
		<li>JWT-based authentication with secure token rotation</li>
		<li>Rate-limited login attempts to prevent brute-force attacks</li>
		<li>Input validation and sanitization on all user-facing endpoints</li>
		<li>Protection against OWASP Top 10 vulnerabilities (XSS, SQL injection, CSRF, etc.)</li>
		<li>Content Security Policy headers to prevent code injection</li>
		<li>Regular dependency audits and automated vulnerability scanning</li>
	</ul>

	<h2 id="data-protection">Data Protection</h2>
	<p>
		We implement strict data isolation and protection measures:
	</p>
	<ul>
		<li>Multi-tenant architecture with complete data isolation between institutions</li>
		<li>Encryption keys managed per-tenant for an additional layer of separation</li>
		<li>Automated backups stored in geographically separate locations</li>
		<li>Data minimization — we only collect and retain what is necessary for the Platform to function</li>
	</ul>

	<h2 id="access-controls">Access Controls</h2>
	<p>
		Masche enforces a six-role permission system designed around the principle of least privilege:
	</p>
	<ul>
		<li><strong>Tenant Admin</strong> — Full access to all institutional settings and data</li>
		<li><strong>Academic Staff</strong> — Read/write access to academic records across the institution</li>
		<li><strong>Teacher</strong> — Read/write access limited to their own classes and students</li>
		<li><strong>Non-Academic Staff</strong> — Limited access to operational data relevant to their role</li>
		<li><strong>Student</strong> — Read-only access to their own records via the student portal</li>
		<li><strong>Parent</strong> — Read-only access to their child's records via the parent portal</li>
	</ul>
	<p>
		All permission changes are logged, and sessions are managed with automatic expiration and
		re-authentication requirements.
	</p>

	<h2 id="monitoring">Monitoring & Incident Response</h2>
	<p>
		We maintain continuous monitoring and a structured incident response process:
	</p>
	<ul>
		<li>24/7 automated monitoring of system health, performance, and security events</li>
		<li>Real-time alerting for anomalous access patterns or potential security incidents</li>
		<li>Comprehensive audit trails recording all data access and system changes</li>
		<li>Documented incident response procedures with defined severity levels</li>
		<li>Affected institutions are notified within 72 hours of a confirmed security incident</li>
	</ul>

	<h2 id="compliance">Compliance</h2>
	<p>
		Masche is designed to comply with Indonesian data protection regulations, including:
	</p>
	<ul>
		<li>UU PDP (Undang-Undang Pelindungan Data Pribadi) — Indonesia's Personal Data Protection Law</li>
		<li>Data residency requirements — all data stored within Indonesian jurisdiction</li>
		<li>Education sector data handling standards as defined by the Ministry of Education</li>
	</ul>
	<p>
		We regularly review our practices to ensure ongoing compliance as regulations evolve.
	</p>

	<h2 id="disclosure">Responsible Disclosure</h2>
	<p>
		We welcome and appreciate responsible security research. If you discover a vulnerability in the
		Masche platform, please report it to us at <strong>security@masche.id</strong>. We ask that you:
	</p>
	<ul>
		<li>Provide a detailed description of the vulnerability and steps to reproduce it</li>
		<li>Allow us reasonable time to investigate and address the issue before public disclosure</li>
		<li>Do not access or modify data belonging to other users or institutions</li>
	</ul>
	<p>
		We are committed to acknowledging reports promptly and working with researchers to resolve
		issues responsibly.
	</p>
</LegalPageLayout>
