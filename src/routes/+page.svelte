<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatSalary } from '$lib/utils/formatting.js';
	import { getTimeDifference } from '$lib/utils/formatting.js';
	let { data } = $props();
</script>

<div class="flex flex-col items-center text-center">
	<h1 class="text-center p-2 mt-8 text-5xl font-light max-w-[600px]">
		Building levels.fyi for government contractors.
	  </h1>
	<div class="mt-8 w-fit space-y-6 text-left hidden md:block">
		{#each data.salaries as salary}
			<div class='p-4 bg-stone-50 border border-stone-600 rounded-md hover:scale-105 transition duration-300 ease-in-out'>
				<p class="text-lg">
					{salary.role} @ {salary.company}
				</p>
				<p class=" text-emerald-600 font-semibold">{formatSalary(salary.salary + salary.stock + salary.clearance_bonus + salary.annual_bonus + salary.signing_bonus)}</p>
				<p class="text-sm text-stone-700">
					{getTimeDifference(salary.created).description} ago • {salary.clearance} • {salary.yoe} YOE
				</p>
			</div>
		{/each}
	</div>
	<button class='border border-black hover:text-white hover:bg-emerald-600 transition duration-300 ease-in-out mt-8 px-4 py-2' onclick={async() => await goto('/submit')}>
		Get Started
	</button>
</div>
