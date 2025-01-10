<script>
	let { form } = $props();

	let company = $state('');
	let salary = $state('');
	let stock = $state('')
	let clearance_bonus = $state('')
	let annual_bonus = $state('')
	let signing_bonus = $state('')
	let role = $state('');
	let level = $state('');
	let yoe = $state('');
	let clearance = $state('');

	const roles = [
		'Software Engineer',
		'Software Engineering Manager',
		'Program Manager',
		'Technical Program Manager',
		'Product Designer',
		'Product Manager',
		'Data Scientist',
		'Solution Architect',
		'IT',
		'Data Analyst',
		'Security',
		'DevOps'
	];
	const clearanceLevels = ['None','S', 'TS', 'TS/SCI', 'TS/SCI CIP', 'TS/SCI FSP'];

	function validateForm() {
		return (
			company &&
			Number.isInteger(Number(salary)) &&
			roles.includes(role) &&
			level &&
			Number.isInteger(Number(yoe)) &&
			clearanceLevels.includes(clearance)
		);
	}
</script>

<div class="flex w-full flex-col items-center">
	{#if form?.success}
		<p class="text-xl font-semibold text-emerald-600">Thanks for sharing your salary! We'll take a look at what you sent.</p>
	{:else}
		<h1 class="text-3xl font-bold">Submit Your Salary</h1>
		<form method="POST" class="mt-4 flex w-full max-w-md flex-col space-y-4">
			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Company</span>
				<input
					bind:value={company}
					name="company"
					type="text"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="AWS"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Base Salary</span>
				<input
					bind:value={salary}
					name="salary"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="150000"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Stock Comp</span>
				<input
					bind:value={stock}
					name="stock"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="50000"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Clearance Bonus</span>
				<input
					bind:value={clearance_bonus}
					name="clearance_bonus"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="250000"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Annual Bonus</span>
				<input
					bind:value={annual_bonus}
					name="annual_bonus"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="10000"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Signing Bonus</span>
				<input
					bind:value={signing_bonus}
					name="signing_bonus"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="20000"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Role</span>
				<div class="relative">
					<select
						bind:value={role}
						name="role"
						class="relative w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white
                   px-4
                   py-2 text-base hover:border-gray-400 focus:border-transparent
                   focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
						required
					>
						<option value="" disabled>Select a role</option>
						{#each roles as r}
							<option value={r} class="py-2">
								{r}
							</option>
						{/each}
					</select>

					<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
						<svg
							class="h-4 w-4 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M19 9l-7 7-7-7"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Level</span>
				<input
					bind:value={level}
					name="level"
					type="text"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
				   placeholder="L5"
					required
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Years of Experience</span>
				<input
					bind:value={yoe}
					name="yoe"
					type="number"
					step="1"
					class="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2
                   text-base
                   hover:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed
                   disabled:bg-gray-100"
					required
					placeholder="3"
				/>
			</label>

			<label class="flex flex-col">
				<span class="my-1 font-medium text-emerald-600">Clearance</span>
				<div class="relative">
					<select
						bind:value={clearance}
						name="clearance"
						class="relative w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white
                   px-4
                   py-2 text-base hover:border-gray-400 focus:border-transparent
                   focus:outline-none focus:ring-2
                   focus:ring-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
						required
					>
						<option value="" disabled>Select a clearance level</option>
						{#each clearanceLevels as c}
							<option value={c} class="py-2">
								{c}
							</option>
						{/each}
					</select>

					<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
						<svg
							class="h-4 w-4 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M19 9l-7 7-7-7"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</label>

			<button
				type="submit"
				class="rounded bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
				disabled={!validateForm()}
			>
				Submit
			</button>
		</form>
	{/if}
</div>
