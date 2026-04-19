<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';
	import content from '$lib/data/content.json';
	import { langStore } from '$lib/stores/lang.svelte';

	let visible = $state(false);
	let hoveredNode = $state<string | null>(null);

	const c = $derived((content as any)[langStore.value].ecosystem);

	const nodeMeta: Record<string, { x: number; y: number; shape: string; size: string; bg: string; iconColor: string; glowColor: string; icon: string }> = {
		management: { x: 50, y: 10, shape: 'rounded-2xl', size: 'size-20', bg: 'bg-ink', iconColor: 'text-white', glowColor: '#1b1b1d', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0' },
		staff: { x: 12, y: 52, shape: 'rounded-2xl', size: 'size-16', bg: 'bg-sage', iconColor: 'text-white', glowColor: '#8faf9a', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' },
		teachers: { x: 88, y: 52, shape: 'rounded-2xl', size: 'size-16', bg: 'bg-plum', iconColor: 'text-white', glowColor: '#4b2e83', icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5' },
		students: { x: 28, y: 88, shape: 'rounded-2xl', size: 'size-16', bg: 'bg-amber', iconColor: 'text-white', glowColor: '#e6a23c', icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' },
		parents: { x: 72, y: 88, shape: 'rounded-2xl', size: 'size-16', bg: 'bg-amber-light', iconColor: 'text-white', glowColor: '#edb85e', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' }
	};

	const nodes = $derived(c.nodes.map((n: any) => ({ ...n, ...nodeMeta[n.id] })));
	const connections = $derived(c.connections);

	function isConnected(nodeId: string): boolean {
		if (!hoveredNode) return false;
		if (hoveredNode === nodeId) return true;
		return connections.some(
			(conn: any) =>
				(conn.from === hoveredNode && conn.to === nodeId) || (conn.to === hoveredNode && conn.from === nodeId)
		);
	}

	function isActiveConnection(conn: { from: string; to: string }): boolean {
		if (!hoveredNode) return false;
		return conn.from === hoveredNode || conn.to === hoveredNode;
	}

	function getNode(id: string) {
		return nodes.find((n: any) => n.id === id)!;
	}

	const activeNode = $derived(hoveredNode ? nodes.find((n: any) => n.id === hoveredNode) : null);

	const activeConnectionCount = $derived(
		hoveredNode
			? connections.filter((conn: any) => conn.from === hoveredNode || conn.to === hoveredNode).length
			: 0
	);
</script>

<section
	id="ecosystem"
	class="scroll-mt-24 px-6 py-24 md:py-36"
	use:reveal={() => (visible = true)}
>
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div
			class="mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ease-out {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<p class="mb-3 text-[11px] font-semibold tracking-widest text-slate/40 uppercase">
				{c.label}
			</p>
			<h2 class="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold tracking-tight text-ink">
				{c.heading}
			</h2>
		</div>

		<!-- Interactive web diagram — desktop only -->
		<div
			class="relative hidden h-135 w-full transition-all delay-150 duration-700 ease-out md:block {visible
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<!-- SVG layer: connection lines + traveling particles -->
			<svg
				class="pointer-events-none absolute inset-0 h-full w-full"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				{#each connections as conn}
					{@const fromNode = getNode(conn.from)}
					{@const toNode = getNode(conn.to)}
					{@const active = isActiveConnection(conn)}
					{@const activeColor = hoveredNode ? getNode(hoveredNode).glowColor : '#4b2e83'}

					<!-- Connection line -->
					<line
						x1={fromNode.x}
						y1={fromNode.y}
						x2={toNode.x}
						y2={toNode.y}
						stroke={active ? activeColor : '#8faf9a'}
						stroke-width={active ? '0.7' : '0.25'}
						stroke-dasharray={active ? undefined : '1.5 2.5'}
						opacity={active ? 0.7 : hoveredNode ? 0.05 : 0.14}
						style="transition: stroke-width 0.3s ease, opacity 0.3s ease, stroke 0.3s ease"
					/>

					<!-- Traveling particle (forward) -->
					{#if active}
						<circle r="1.4" fill={activeColor} opacity="0.9">
							<animateMotion
								dur="1.8s"
								repeatCount="indefinite"
								path="M {fromNode.x},{fromNode.y} L {toNode.x},{toNode.y}"
							/>
						</circle>
						<!-- Return particle (smaller, going back) -->
						<circle r="0.7" fill={activeColor} opacity="0.45">
							<animateMotion
								dur="2.4s"
								repeatCount="indefinite"
								keyPoints="1;0"
								keyTimes="0;1"
								calcMode="linear"
								path="M {fromNode.x},{fromNode.y} L {toNode.x},{toNode.y}"
							/>
						</circle>
					{/if}
				{/each}
			</svg>

			<!-- Connection label pills at midpoint of active connections -->
			{#each connections as conn}
				{@const fromNode = getNode(conn.from)}
				{@const toNode = getNode(conn.to)}
				{@const active = isActiveConnection(conn)}
				{#if active}
					<div
						class="pointer-events-none absolute z-20"
						style="left: {(fromNode.x + toNode.x) / 2}%; top: {(fromNode.y + toNode.y) /
							2}%; transform: translate(-50%, -50%)"
					>
						<div
							class="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-plum shadow-md ring-1 ring-plum/10"
						>
							{conn.label}
						</div>
					</div>
				{/if}
			{/each}

			<!-- Node elements -->
			{#each nodes as node, i}
				{@const connected = isConnected(node.id)}
				{@const isHovered = hoveredNode === node.id}
				{@const dimmed = !!hoveredNode && !connected}

				<div
					class="absolute z-10 flex cursor-pointer flex-col items-center gap-1.5 select-none"
					style="left: {node.x}%; top: {node.y}%; transform: translate(-50%, -50%);"
					onmouseenter={() => (hoveredNode = node.id)}
					onmouseleave={() => (hoveredNode = null)}
					onfocus={() => (hoveredNode = node.id)}
					onblur={() => (hoveredNode = null)}
					role="button"
					tabindex={i}
					aria-label="{node.label}: {node.desc}"
				>
					<div class="relative">
						<!-- Pulse on hover -->
						{#if isHovered}
							<div class="absolute inset-0 {node.shape} {node.bg} animate-ping opacity-25"></div>
						{/if}

						<!-- Node shape -->
						<img
							src={`${base}/icons/${node.id}.svg`}
							class="h-16 w-fit rounded-md bg-white"
							alt=""
						/>
					</div>

					<!-- Label -->
					<div
						class="bg-white text-center transition-all duration-300"
						style={dimmed ? 'opacity: 0.18;' : 'opacity: 1;'}
					>
						<p class="rounded-sm bg-white p-2 text-xs font-semibold whitespace-nowrap text-ink/80">
							{node.label}
						</p>
						<p class="rounded-sm bg-white p-2 text-[10px] whitespace-nowrap text-black">
							{node.sublabel}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Info bar -->
		<div
			class="mt-4 hidden min-h-16 items-center justify-center rounded-2xl px-8 py-4 text-center ring-1 transition-all duration-300 md:flex {hoveredNode
				? 'bg-plum/3 ring-plum/10'
				: 'bg-ivory/50 ring-stone/10'}"
		>
			{#if activeNode}
				<div>
					<p class="text-sm text-slate/60">
						<span class="font-semibold text-ink">{activeNode.label}</span>
						&nbsp;&mdash;&nbsp;
						{activeNode.sublabel}
					</p>
					<p class="mt-1 text-[11px] text-plum/50">
						{activeConnectionCount} {c.connectionSuffix}
					</p>
				</div>
			{:else}
				<p class="text-sm text-slate/30">
					{c.infoPlaceholder}
				</p>
			{/if}
		</div>

		<!-- Mobile fallback: card grid -->
		<div class="grid gap-3 sm:grid-cols-2 md:hidden">
			{#each nodes as node, i}
				<div
					class="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-stone/15 transition-all duration-300 hover:shadow-md hover:ring-plum/15"
					style="transition-delay: {visible ? i * 60 : 0}ms"
				>
					<div class="flex size-12 shrink-0 items-center justify-center">
						<img src={`${base}/icons/${node.id}.svg`} alt={node.icon} />
					</div>
					<div>
						<p class="text-sm font-semibold text-ink">{node.label}</p>
						<p class="mt-0.5 text-[12px] leading-relaxed text-slate/50">{node.sublabel}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
