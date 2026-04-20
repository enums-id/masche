<script>
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo/masche-primary-vertical.svg';
</script>

<div class="fixed inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
	<img src={logo} alt="Masche Academics" class="h-16 w-auto" />
	<h1 class="text-6xl font-bold text-plum">404</h1>
	<p class="text-lg text-ink">Oops! The page you're looking for doesn't exist.</p>
	<a
		href="{base}/"
		class="rounded-full bg-plum px-8 py-3 text-[13px] font-semibold text-white transition-all hover:bg-plum-light"
	>
		Back to Home
	</a>
</div>
