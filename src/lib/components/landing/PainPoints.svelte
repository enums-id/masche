<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
	let hoveredRole = $state<string | null>(null);
	let lockedRole = $state<string | null>(null);

	// Same color system as Ecosystem — visual bridge between the two sections
	const roles = [
		{
			id: 'management',
			label: 'Management',
			bg: 'bg-ink',
			iconColor: 'text-white/65',
			color: '#1b1b1d',
			icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0'
		},
		{
			id: 'staff',
			label: 'Staff',
			bg: 'bg-sage',
			iconColor: 'text-white/65',
			color: '#8faf9a',
			icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		},
		{
			id: 'teachers',
			label: 'Teachers',
			bg: 'bg-plum',
			iconColor: 'text-white/75',
			color: '#4b2e83',
			icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
		},
		{
			id: 'students',
			label: 'Students',
			bg: 'bg-amber',
			iconColor: 'text-white/80',
			color: '#e6a23c',
			icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
		},
		{
			id: 'parents',
			label: 'Parents',
			bg: 'bg-amber-light',
			iconColor: 'text-white',
			color: '#edb85e',
			icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		}
	];

	const painPoints = [
		{
			roles: ['management', 'staff'],
			scenario:
				'Every semester, the registrar spends 3 weeks untangling schedule conflicts across 200+ sections...',
			title: 'Disconnected Systems',
			desc: 'Grades in one app, attendance in another, billing in a spreadsheet. Nothing talks to each other.'
		},
		{
			roles: ['teachers', 'parents', 'students'],
			scenario: 'A teacher discovers a student dropped out 2 weeks ago — nobody told them...',
			title: 'Communication Gaps',
			desc: 'Critical information gets lost between departments. Parents are the last to know.'
		},
		{
			roles: ['staff', 'management'],
			scenario:
				'The finance team reconciles tuition payments by hand every month. 4 days, every time...',
			title: 'Manual Processes',
			desc: 'Hours burned on data entry, reconciliation, and report generation that should be instant.'
		},
		{
			roles: ['management'],
			scenario:
				'The dean asks for enrollment trends — it takes a week to pull data from 5 different sources...',
			title: 'Data Silos',
			desc: 'Insights are trapped. Decision-making is slow because no one has the full picture.'
		},
		{
			roles: ['parents', 'students'],
			scenario: 'Parents receive report cards once a semester. Between then? Complete silence.',
			title: 'Invisible Progress',
			desc: "Families are kept in the dark about day-to-day academic life until it's too late to intervene."
		},
		{
			roles: ['teachers', 'staff'],
			scenario:
				'Teachers spend Sunday nights rebuilding lesson materials that already exist somewhere else...',
			title: 'Administrative Burden',
			desc: 'The best educators are drowning in paperwork instead of focusing on what matters: teaching.'
		}
	];

	// Hover = preview; click = lock. activeRole = whichever is set.
	const activeRole = $derived(lockedRole ?? hoveredRole);

	function toggleLock(roleId: string) {
		lockedRole = lockedRole === roleId ? null : roleId;
	}

	function isCardActive(pain: (typeof painPoints)[0]): boolean {
		if (!activeRole) return true;
		return pain.roles.includes(activeRole);
	}

	function getPrimaryColor(pain: (typeof painPoints)[0]): string {
		return roles.find((r) => r.id === pain.roles[0])?.color ?? '#4b2e83';
	}

	function getRoleData(id: string) {
		return roles.find((r) => r.id === id)!;
	}

	function countFor(roleId: string): number {
		return painPoints.filter((p) => p.roles.includes(roleId)).length;
	}

	const activeRoleData = $derived(activeRole ? roles.find((r) => r.id === activeRole) : null);
	const activeCount = $derived(
		activeRole ? painPoints.filter((p) => p.roles.includes(activeRole!)).length : painPoints.length
	);
</script>

<section class="bg-ivory/50 px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mb-14 max-w-2xl transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="text-[13px] font-medium tracking-widest text-error/60 uppercase">
				The reality today
			</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
				Every role. A different burden.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate/50">
				These aren't isolated problems. They're the same institution — seen through five different
				perspectives.
				<span class="font-medium text-slate/70">Select a role to see their reality.</span>
			</p>
		</div>

		<!-- Role selector — same visual language as Ecosystem nodes -->
		<div
			class="mb-10 transition-all delay-100 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<div class="flex flex-wrap items-end gap-4">
				<!-- All button -->
				<button
					class="flex cursor-pointer flex-col items-center gap-1.5 transition-all duration-200"
					onclick={() => (lockedRole = null)}
					onmouseenter={() => (hoveredRole = null)}
				>
					<div
						class="flex size-10 items-center justify-center rounded-2xl border transition-all duration-200 {!activeRole
							? 'scale-105 border-ink/20 bg-ink/5'
							: 'border-stone/30 bg-white'}"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4 {!activeRole ? 'text-ink' : 'text-slate/30'}"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
							/>
						</svg>
					</div>
					<span class="text-[10px] font-medium {!activeRole ? 'text-ink' : 'text-slate/35'}"
						>All</span
					>
				</button>

				<!-- Divider -->
				<div class="h-10 w-px bg-stone/30"></div>

				<!-- Role chips -->
				{#each roles as role, i}
					<button
						class="flex cursor-pointer flex-col items-center gap-1.5 transition-all duration-200 select-none"
						style="transition-delay: {i * 30}ms"
						onclick={() => toggleLock(role.id)}
						onmouseenter={() => (hoveredRole = role.id)}
						onmouseleave={() => (hoveredRole = null)}
					>
						<div class="relative">
							<!-- Pulse ring when locked -->
							{#if lockedRole === role.id}
								<div class="absolute inset-0 rounded-2xl {role.bg} animate-ping opacity-20"></div>
							{/if}
							<div
								class="size-10 rounded-2xl {role.bg} flex items-center justify-center transition-all duration-200"
								style="
									{activeRole === role.id
									? `transform: scale(1.15); box-shadow: 0 8px 24px -4px ${role.color}50;`
									: activeRole && activeRole !== role.id
										? 'transform: scale(0.9); opacity: 0.3;'
										: 'transform: scale(1);'}
								"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-4 {role.iconColor}"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d={role.icon} />
								</svg>
							</div>
						</div>
						<div class="flex items-center gap-1">
							<span
								class="text-[10px] font-medium transition-colors duration-200 {activeRole ===
								role.id
									? 'text-ink'
									: 'text-slate/35'}">{role.label}</span
							>
							<span class="text-[9px] text-slate/25">{countFor(role.id)}</span>
						</div>
					</button>
				{/each}
			</div>
		</div>

		<!-- Pain cards grid -->
		<div
			class="grid gap-4 transition-all delay-150 duration-700 ease-out md:grid-cols-2 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			{#each painPoints as pain, i}
				{@const active = isCardActive(pain)}
				{@const primaryColor = getPrimaryColor(pain)}

				<div
					class="group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300"
					style="
						opacity: {active ? 1 : 0.15};
						transform: {active && activeRole ? 'translateY(-2px)' : 'translateY(0)'};
						box-shadow: {active && activeRole
						? `0 8px 32px -8px ${primaryColor}30`
						: '0 1px 3px 0 rgb(0 0 0 / 0.04)'};
						border: 0px solid {active && activeRole ? primaryColor + '20' : '#D7D9DD30'};
						transition-delay: {i * 60}ms;
					"
				>
					<!-- Role badges -->
					<div class="mb-5 flex flex-wrap items-center gap-1.5">
						{#each pain.roles as roleId}
							{@const r = getRoleData(roleId)}
							<div
								class="flex items-center gap-1.5 rounded-lg px-2 py-1 transition-all duration-200 {r.bg}"
								style="opacity: {!activeRole || activeRole === roleId ? 1 : 0.35};"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-3 {r.iconColor}"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d={r.icon} />
								</svg>
								<span class="text-[10px] font-medium text-white">{r.label}</span>
							</div>
						{/each}
					</div>

					<!-- Scenario quote -->
					<p class="mb-4 text-[13px] leading-relaxed text-slate/40 italic">
						"{pain.scenario}"
					</p>

					<!-- Title + description -->
					<h3 class="text-base font-semibold text-ink">{pain.title}</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-slate/50">{pain.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Info bar — mirrors Ecosystem's info bar -->
		<div
			class="mt-4 hidden min-h-16 items-center justify-center rounded-2xl px-8 py-4 text-center ring-1 transition-all duration-300 md:flex {activeRole
				? 'ring-stone/15'
				: 'bg-ivory/60 ring-stone/10'}"
			style="background-color: {activeRole ? activeRoleData?.color + '08' : ''};"
		>
			{#if activeRoleData}
				<p class="text-sm text-slate/60">
					<span class="font-semibold text-ink">{activeRoleData.label}</span>
					faces
					<span class="font-semibold text-ink">{activeCount}</span>
					of these pain points daily.
					{#if lockedRole}
						<button
							class="ml-2 cursor-pointer text-[12px] text-slate/35 underline underline-offset-2 transition-colors duration-200 hover:text-ink"
							onclick={() => (lockedRole = null)}
						>
							Clear filter
						</button>
					{/if}
				</p>
			{:else}
				<p class="text-sm text-slate/30">Hover a role to preview — click to lock the filter</p>
			{/if}
		</div>
	</div>
</section>
