<script>
    let { data } = $props();
    let searchTerm = $state('');
  
    let filteredCompanies = $derived(data.companies.filter(company =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  </script>
  
  <h1 class='font-light text-4xl'>Companies</h1>
  
  <div class='mt-4'>
    <input
      type="text"
      placeholder=""
      bind:value={searchTerm}
      class="w-full p-2 border text-lg bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-emerald-500"
    />
  </div>
  
  <div class='flex flex-col space-y-2 mt-4'>
    {#if filteredCompanies.length > 0}
      {#each filteredCompanies as company}
        <a href={`/companies/${company}`} class=" hover:text-emerald-600 transition duration-50 ease-in-out font-light text-xl">{company}</a>
      {/each}
    {:else}
      <p class=' text-lg'>No companies found matching "{searchTerm}"</p>
    {/if}
  </div>