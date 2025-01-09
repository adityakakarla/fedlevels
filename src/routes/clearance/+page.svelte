<script>
    import SalaryTable from '$lib/components/SalaryTable.svelte';
import { formatSalary } from '$lib/utils/formatting';
    let clearance = $state('TS/SCI FSP')
    let {data} = $props()
    const clearanceLevels = ['None','S', 'TS','TS/SCI','TS/SCI CIP','TS/SCI FSP']
    const filteredSalaries = $derived(data.salaries.filter((salary) => salary.clearance === clearance))
</script>

<h1 class='text-3xl font-bold'>Clearance</h1>
<p class='mt-1'>Don't get ripped off</p>
<div class="mt-4 relative w-48">
    <select 
      bind:value={clearance} 
      name="role" 
      class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-base
             hover:border-gray-400 
             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
             disabled:bg-gray-100 disabled:cursor-not-allowed
             appearance-none cursor-pointer relative"
      required
    >
      <option value="" disabled>Select a role</option>
      {#each clearanceLevels as c}
        <option 
          value={c}
          class="py-2"
        >
          {c}
        </option>
      {/each}
    </select>
    
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div class='flex flex-col space-y-2 mt-4'>
    <SalaryTable salaries={filteredSalaries}/>
</div>