<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppLink, whatsappMessages } from '$lib/utils/whatsapp';
	import feature01 from '$lib/assets/icons/masche-fitur-01.svg';
	import feature02 from '$lib/assets/icons/masche-fitur-02.svg';
	import feature03 from '$lib/assets/icons/masche-fitur-03.svg';
	import feature04 from '$lib/assets/icons/masche-fitur-04.svg';
	import feature05 from '$lib/assets/icons/masche-fitur-05.svg';
	import feature06 from '$lib/assets/icons/masche-fitur-06.svg';
	import usp01 from '$lib/assets/icons/masche-usp-01.svg';
	import usp02 from '$lib/assets/icons/masche-usp-02.svg';
	import usp03 from '$lib/assets/icons/masche-usp-03.svg';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let visible = $state(false);

	const c = $derived((content as any)[langStore.value].product);

	const moduleMeta: Record<string, { color: string; soon: boolean; iconURL: string }> = {
		'manajemen-akademik': { color: 'plum', soon: false, iconURL: feature02 },
		'operasional-akademik': { color: 'plum', soon: false, iconURL: feature03 },
		'perkembangan-siswa': { color: 'plum', soon: false, iconURL: feature05 },
		'kelulusan-tracking': { color: 'plum', soon: false, iconURL: feature06 },
		'pembayaran-tagihan': { color: 'amber', soon: true, iconURL: feature04 },
		'pendaftaran-sekolah': { color: 'amber', soon: true, iconURL: feature01 }
	};

	const benefitIcons: Record<string, string> = {
		'usp-01': usp01,
		'usp-02': usp02,
		'usp-03': usp03
	};

	const modules = $derived(c.modules.map((m: any) => ({ ...m, ...moduleMeta[m.id] })));
	const benefits = $derived(c.benefits.map((b: any) => ({ ...b, icon: benefitIcons[b.id] })));
</script>

<section id="produk" class="px-6 py-20 md:py-28" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-14 transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<h2 class="text-[clamp(1.8rem,4vw,3rem)] leading-tight font-bold tracking-tight text-ink">
				{#each c.heading.split('\n') as line, i}{#if i > 0}<br />{/if}{line}{/each}
			</h2>
			<p class="mt-3 text-[15px] font-medium text-slate/60">
				{c.subheading}
			</p>
		</div>

		<!-- Main 2-col layout -->
		<div
			class="grid items-start gap-5 transition-all delay-100 duration-700 ease-out lg:grid-cols-[1fr_1.2fr] {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<!-- Left: dark card -->
			<div class="flex flex-col overflow-hidden rounded-3xl bg-plum">
				<!-- Gradient placeholder -->
				<div
					class="h-52 w-full"
					style="background: linear-gradient(135deg, #4b2e83 0%, #3a2368 40%, #e6a23c 100%);"
				></div>
				<!-- Text content -->
				<div class="p-8">
					<h3 class="text-xl leading-snug font-bold text-white">
						{#each c.cardHeading as line, i}{#if i > 0}<br />{/if}{line}{/each}
					</h3>
					<p class="mt-3 text-[13px] leading-relaxed text-white/45">
						{c.cardDesc}
					</p>
					<a
						href={getWhatsAppLink(whatsappMessages.consultation)}
						target="_blank"
						rel="noopener noreferrer"
						class="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10"
					>
						{c.cardCta}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="size-3.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Right: 2×3 module grid -->
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each modules as mod, i}
					<div
						class="rounded-2xl bg-white p-5 transition-all duration-700 ease-out {visible
							? 'translate-y-0 opacity-100'
							: 'translate-y-8 opacity-0'}"
						style="transition-delay: {150 + i * 60}ms;"
					>
						{#if mod.soon}
							<!-- Dimmed / soon state -->
							<div
								class="mb-3 flex size-10 items-center justify-center rounded-xl"
								style="background: {mod.color === 'amber' ? '#e6a23c20' : '#4b2e8320'};"
							>
								<img src={mod.iconURL} alt={mod.iconURL} class="w-4" />
							</div>
							<p
								class="text-[13px] font-semibold"
								style="color: {mod.color === 'amber' ? '#e6a23c' : '#4b2e83'};"
							>
								{mod.label}
							</p>
							<p class="mt-1 text-[11px] text-slate/40">
								{#each c.soonLabel.split('\n') as line, i}{#if i > 0}<br />{/if}{line}{/each}
							</p>
						{:else}
							<div class="mb-3 flex size-10 items-center justify-center rounded-xl bg-plum/10">
								<img src={mod.iconURL} alt={mod.iconURL} class="w-4" />
							</div>
							<p class="text-[13px] font-semibold text-ink">{mod.label}</p>
							<p class="mt-1 text-[11px] leading-relaxed text-slate/50">{mod.desc}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Benefits row -->
		<div
			class="mt-14 grid gap-8 transition-all delay-300 duration-700 ease-out md:grid-cols-3 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			{#each benefits as benefit}
				<div class="flex flex-col items-center text-center">
					<div class="mb-4 flex items-center justify-center">
						<img src={benefit.icon} alt="" class="h-16 w-full" />
					</div>
					<h4 class="text-[14px] font-bold text-ink">{benefit.title}</h4>
					<p class="mt-2 text-[13px] leading-relaxed text-slate/55">{benefit.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
