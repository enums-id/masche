<script lang="ts">
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Product from '$lib/components/landing/Product.svelte';
	import TheShift from '$lib/components/landing/TheShift.svelte';
	import Ecosystem from '$lib/components/landing/Ecosystem.svelte';
	import Impact from '$lib/components/landing/Impact.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import Articles from '$lib/components/landing/Articles.svelte';
	import CallToAction from '$lib/components/landing/CallToAction.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import NewHero from '$lib/components/landing/NewHero.svelte';
</script>

<svelte:head>
	<title>Masche &mdash; Sistem Operasi untuk Institusi Pendidikan Modern</title>
	<meta
		name="description"
		content="Platform terpadu untuk mengelola akademik, keuangan, dan operasional sekolah. Dirancang khusus untuk ekosistem pendidikan Indonesia."
	/>
</svelte:head>

<div class="min-h-screen bg-white font-sans text-ink antialiased selection:bg-plum/10">
	<Navbar />
	<NewHero />
	<Product />
	<TheShift />
	<Ecosystem />
	<Impact />
	<Testimonials />
	<Articles />
	<CallToAction />
	<Footer />
</div>
