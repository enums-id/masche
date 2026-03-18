<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
</script>

<section class="bg-ivory/50 px-6 py-24 md:py-36" use:reveal={() => (visible = true)}>
	<div class="mx-auto max-w-6xl">
		<div
			class="mb-14 max-w-2xl transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="text-[13px] font-medium tracking-widest text-plum/50 uppercase">Inside Masche</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
				Designed to disappear.
			</h2>
			<p class="mt-4 text-base leading-relaxed text-slate/50">
				The best infrastructure doesn't demand attention. It just works. Here's what yours looks
				like.
			</p>
		</div>

		<div
			class="overflow-hidden rounded-2xl border border-stone/40 bg-ivory/50 shadow-2xl shadow-ink/4 transition-all delay-150 duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-12 opacity-0'}"
		>
			<!-- Browser bar -->
			<div class="flex items-center gap-2 border-b border-stone/30 bg-white px-5 py-3">
				<span class="size-2.5 rounded-full bg-stone/60"></span>
				<span class="size-2.5 rounded-full bg-stone/60"></span>
				<span class="size-2.5 rounded-full bg-stone/60"></span>
				<div class="ml-4 flex-1 rounded-full bg-ivory px-3 py-1">
					<span class="text-[11px] text-slate/30">masche-academic.com</span>
				</div>
			</div>

			<div class="grid grid-cols-12 gap-px bg-stone/15">
				<!-- Sidebar -->
				<div class="col-span-3 hidden space-y-6 bg-white p-6 md:block">
					<div class="flex items-center gap-2">
						<div class="size-6 rounded-md bg-plum"></div>
						<span class="text-[13px] font-semibold text-ink">Masche</span>
					</div>
					<div class="space-y-0.5">
						<div class="rounded-lg bg-plum/5 px-3 py-2">
							<span class="text-xs font-medium text-plum">Dashboard</span>
						</div>
						{#each ['Students', 'Academics', 'Schedule', 'Finance', 'Reports', 'Settings'] as item}
							<div
								class="cursor-pointer rounded-lg px-3 py-2 transition-colors duration-150 hover:bg-ivory"
							>
								<span class="text-xs text-slate/50">{item}</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Main content -->
				<div class="col-span-12 space-y-5 bg-ivory/60 p-5 md:col-span-9 md:p-7">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-semibold text-ink">Overview</p>
							<p class="text-[11px] text-slate/40">Academic Year 2025/2026 &middot; Semester 2</p>
						</div>
						<div
							class="rounded-lg border border-stone/30 bg-white px-3 py-1.5 text-[11px] text-slate/50"
						>
							This semester
						</div>
					</div>

					<!-- Stats -->
					<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
						{#each [{ label: 'Students', value: '3,842', change: '+12%', color: 'text-success' }, { label: 'Attendance', value: '94.2%', change: '+2.1%', color: 'text-success' }, { label: 'Courses', value: '186', change: 'stable', color: 'text-slate/30' }, { label: 'Collection', value: '87%', change: '+5.3%', color: 'text-success' }] as s}
							<div class="rounded-xl bg-white p-4 ring-1 ring-stone/15">
								<p class="text-[11px] text-slate/40">{s.label}</p>
								<p class="mt-1 text-xl font-bold text-ink">{s.value}</p>
								<span class="text-[11px] font-medium {s.color}">{s.change}</span>
							</div>
						{/each}
					</div>

					<!-- Chart -->
					<div class="rounded-xl bg-white p-5 ring-1 ring-stone/15">
						<div class="mb-4 flex items-center justify-between">
							<p class="text-xs font-medium text-slate/60">Enrollment Trends</p>
							<div class="flex gap-3">
								{#each ['6M', '1Y', 'All'] as period, i}
									<button
										class="cursor-pointer text-[11px] transition-colors duration-150 {i === 1
											? 'font-medium text-plum'
											: 'text-slate/30 hover:text-slate/60'}">{period}</button
									>
								{/each}
							</div>
						</div>
						<div class="flex h-28 items-end gap-1.5">
							{#each [35, 42, 38, 55, 48, 62, 54, 70, 65, 80, 75, 88] as h, i}
								<div
									class="flex-1 rounded-t transition-all duration-300 hover:opacity-70 {i >= 10
										? 'bg-plum'
										: 'bg-plum/8'}"
									style="height: {h}%"
								></div>
							{/each}
						</div>
						<div class="mt-2 flex justify-between px-0.5 text-[9px] text-slate/25">
							{#each ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as m}
								<span>{m}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
