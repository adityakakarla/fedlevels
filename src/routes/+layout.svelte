<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="min-h-[100svh] bg-white text-black">
	<Header />
	<div class="p-10">
		{@render children()}
	</div>
</div>
