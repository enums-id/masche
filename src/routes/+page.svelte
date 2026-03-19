<script lang="ts">
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Ecosystem from '$lib/components/landing/Ecosystem.svelte';
	import PainPoints from '$lib/components/landing/PainPoints.svelte';
	import TheShift from '$lib/components/landing/TheShift.svelte';
	import Impact from '$lib/components/landing/Impact.svelte';
	import Product from '$lib/components/landing/Product.svelte';
	import ProductPreview from '$lib/components/landing/ProductPreview.svelte';
	import Testimonials from '$lib/components/landing/Testimonials.svelte';
	import CallToAction from '$lib/components/landing/CallToAction.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
</script>

<svelte:head>
	<title>Masche &mdash; The System Behind the System</title>
	<meta
		name="description"
		content="Masche brings clarity and order to education management. An intelligent framework for academic administration, operations, and communication."
	/>
</svelte:head>

<div class="min-h-screen bg-white font-sans text-ink antialiased selection:bg-plum/10">
	<Navbar />
	<Hero />
	<Ecosystem />
	<PainPoints />
	<TheShift />
	<Product />
	<Impact />
	<!-- <ProductPreview /> -->
	<Testimonials />
	<CallToAction />
	<Footer />
</div>
