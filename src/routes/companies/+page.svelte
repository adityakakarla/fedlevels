<script>
    let { data } = $props();
    let searchTerm = $state('');
  
    let filteredCompanies = $derived(data.companies.filter(company =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  </script>
  
  <h1 class='font-bold text-3xl'>Companies</h1>
  <p class='mt-1'>Negotiate the salary you deserve</p>
  
  <div class='mt-4'>
    <input
      type="text"
      placeholder="Search companies..."
      bind:value={searchTerm}
      class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  </div>
  
  <div class='flex flex-col space-y-2 mt-4'>
    {#if filteredCompanies.length > 0}
      {#each filteredCompanies as company}
        <a href={`/companies/${company}`} class="hover:underline text-emerald-600">{company}</a>
      {/each}
    {:else}
      <p>No companies found matching "{searchTerm}"</p>
    {/if}
  </div>