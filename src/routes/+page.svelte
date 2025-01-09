<script lang="ts">
	import { formatSalary } from '$lib/utils/formatting.js';
	import { getTimeDifference } from '$lib/utils/formatting.js';
	let { data } = $props();
</script>

<div class="flex flex-col items-center text-center">
	<h1 class="mt-8 text-6xl font-bold text-emerald-600">welcome to fedlevels.fyi</h1>
	<h2 class="mt-2 text-2xl">we're building levels.fyi for contractors.</h2>
	<div class="mt-8 w-fit space-y-4 text-left">
		{#each data.salaries as salary}
			<div>
				<p class="text-lg">
					{salary.role} @ {salary.company}
				</p>
				<p class="font-bold text-emerald-600">{formatSalary(salary.salary)}</p>
				<p class="text-sm text-gray-500">
					{getTimeDifference(salary.created).description} ago • {salary.clearance} • {salary.yoe} YOE
				</p>
			</div>
		{/each}
	</div>
</div>
