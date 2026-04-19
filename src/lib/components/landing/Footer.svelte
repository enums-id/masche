<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo/masche-primary-horizontal.svg';
	import enumsLogo from '$lib/assets/logo/enums-black.svg';

	let currentYear = new Date().getFullYear();

	const nav = [
		{
			heading: 'Produk dan Layanan',
			links: [
				{ label: 'Sistem Manajemen Sekolah Terpadu', href: `${base}/#produk` },
				{ label: 'Konsultasi dan Pengembangan Solusi', href: `${base}/contact` },
				{ label: 'Artikel', href: `${base}/articles` }
			]
		},
		{
			heading: 'Perusahaan',
			links: [
				{ label: 'Tentang Kami', href: `${base}/about` },
				{ label: 'Kontak', href: `${base}/contact` }
			]
		},
		{
			heading: 'Legal',
			links: [
				{ label: 'Kebijakan Privasi', href: `${base}/legal/privacy` },
				{ label: 'Keamanan', href: `${base}/legal/security` },
				{ label: 'Syarat & Ketentuan', href: `${base}/legal/terms` }
			]
		}
	];
</script>

<footer class="border-t border-stone/15 bg-white px-6 pt-16 pb-10">
	<div class="mx-auto max-w-6xl">
		<!-- Top: brand + nav columns -->
		<div class="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
			<!-- Brand -->
			<div>
				<img src={logo} alt="Masche Academics" class="h-7 w-auto" />
				<p class="mt-4 max-w-52 text-[13px] leading-relaxed text-slate/40">
					Sistem operasi untuk institusi pendidikan modern.
				</p>
				<!-- Social icons -->
				<div class="mt-6 flex items-center gap-3">
					<a
						href="{base}/"
						class="flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone/20 text-slate/35 transition-colors duration-200 hover:border-ink/20 hover:text-ink"
						aria-label="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-3.5"
						>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a
						href="{base}/"
						class="flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone/20 text-slate/35 transition-colors duration-200 hover:border-ink/20 hover:text-ink"
						aria-label="X (Twitter)"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-3.5"
						>
							<path
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Nav columns -->
			{#each nav as col}
				<div>
					<p class="mb-4 text-[11px] font-semibold tracking-widest text-ink/50 uppercase">
						{col.heading}
					</p>
					<ul class="space-y-3">
						{#each col.links as link}
							<li>
								<a
									href={link.href}
									class="text-[13px] text-slate/40 transition-colors duration-200 hover:text-ink"
								>
									{link.label}
									<!-- {#if link.soon}
										<span
											class="ml-1.5 rounded-full bg-stone/10 px-2 py-0.5 text-[9px] font-medium text-slate/35"
											>Segera</span
										>
									{/if} -->
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom bar -->
		<div
			class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone/10 pt-8 md:flex-row"
		>
			<p class="text-[12px] text-slate/30">
				&copy; {currentYear} Masche Academics. Semua hak dilindungi.
			</p>
			<div class="flex flex-col gap-2">
				<p class="text-[12px] text-slate/25">
					Dikembangan oleh <span class="text-slate/40"></span>
				</p>
				<img src={enumsLogo} alt="enums" class="w-16" />
			</div>
		</div>
	</div>
</footer>
