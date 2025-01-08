<script>
	import { formatSalary } from '$lib/utils/formatting';
  import SalaryTable from '$lib/components/SalaryTable.svelte';

    let {data} = $props()
</script>

<h1 class='font-bold text-3xl'>{data.slug}</h1>
<div class='mt-4'>
  <SalaryTable salaries={data.salaries}/>
  </div>
