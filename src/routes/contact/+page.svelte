<script lang="ts">
	import { base } from '$app/paths';
	import PageShell from '$lib/components/PageShell.svelte';
	import { reveal } from '$lib/actions/reveal';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let visible = $state(false);

	const c = $derived((content as any)[langStore.value].contact);
	const faqs = $derived(c.faqs);
</script>

<PageShell title={c.pageTitle} subtitle={c.pageSubtitle}>
	<div use:reveal={() => (visible = true)}>
		<div
			class="grid gap-12 transition-all duration-700 ease-out md:grid-cols-[1.5fr_1fr] {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<!-- Formulir → Google Form Redirect -->
			<div>
				<div class="rounded-3xl border border-plum/20 bg-plum/5 p-10 text-center">
					<div
						class="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-plum/10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="size-7 text-plum"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m2.121 2.121a4.5 4.5 0 0 1 6.364 0m-1.414-1.414L12.586 9M9 18H6.5a4.5 4.5 0 0 1 0-9h3" />
						</svg>
					</div>
					<h3 class="text-xl font-bold text-ink">{c.formTitle || 'Hubungi Kami'}</h3>
					<p class="mt-3 text-[15px] leading-relaxed text-slate/60">
						{c.formDescription || 'Silakan isi formulir di bawah untuk mengirimkan pertanyaan atau inquiry Anda kepada kami. Kami akan merespons secepat mungkin.'}
					</p>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSeTUzNmju5rUd1_ru7OASlv1iNAnMFPsB8IJ8jKg3pRvG43Qw/viewform?usp=dialog"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-8 inline-block cursor-pointer rounded-full bg-plum px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-plum/20"
					>
						{c.formSubmit || 'Buka Formulir'}
					</a>
				</div>
			</div>

			<!-- Info kontak -->
			<div class="space-y-8">
				<div>
					<p class="mb-1 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
						Email
					</p>
					<p class="text-[15px] font-medium text-ink">hello@masche.id</p>
				</div>
				<div>
					<p class="mb-1 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
						Lokasi
					</p>
					<p class="text-[15px] font-medium text-ink">Kota Bandung, Indonesia</p>
				</div>
				<div>
					<p class="mb-1 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
						Waktu Respons
					</p>
					<p class="text-[15px] text-slate/60">Kami biasanya merespons dalam 1 hari kerja.</p>
				</div>
				<div class="flex items-center gap-3">
					<a
						href="{base}/"
						class="flex size-9 cursor-pointer items-center justify-center rounded-full border border-stone/20 text-slate/35 transition-colors duration-200 hover:border-ink/20 hover:text-ink"
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
						class="flex size-9 cursor-pointer items-center justify-center rounded-full border border-stone/20 text-slate/35 transition-colors duration-200 hover:border-ink/20 hover:text-ink"
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
		</div>

		<!-- FAQ -->
		<div
			class="mt-20 transition-all delay-200 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-6 text-[11px] font-semibold tracking-widest text-plum/50 uppercase">
				{c.faqTitle}
			</p>
			<div class="grid gap-4 md:grid-cols-3">
				{#each faqs as faq}
					<div class="rounded-3xl border border-stone/15 bg-white p-7">
						<h3 class="text-[15px] font-semibold text-ink">{faq.q}</h3>
						<p class="mt-2 text-[13px] leading-relaxed text-slate/50">{faq.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</PageShell>
