/**
 * Svelte action for scroll-triggered reveal animations.
 * Attaches an IntersectionObserver and calls `onset` when the element enters the viewport.
 *
 * Usage:
 *   let visible = $state(false);
 *   <div use:reveal={() => (visible = true)}>
 */
export function reveal(
	node: HTMLElement,
	onset: () => void
): { destroy: () => void } {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					onset();
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
