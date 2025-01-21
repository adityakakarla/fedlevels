<script lang="ts">
	import '../app.css';
	import Header from "$lib/components/Header.svelte";
	let { children } = $props();
</script>

<div class='bg-white text-black min-h-screen'>
<Header/>
<div class='p-10'>
	{@render children()}
</div>
</div>