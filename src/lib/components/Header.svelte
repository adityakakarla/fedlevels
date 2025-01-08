<script>
    const links = [
        {path: '/', title: 'Home'},
        {path: '/submit', title: 'Submit'},
        {path: '/companies', title: 'Companies'},
        {path: '/clearance', title: 'Clearance'}
    ]
</script>

<div class='px-10 py-2 border-b border-gray-400 space-x-6'>
{#each links as link}
<a href={link.path} class='text-slate-700 hover:text-emerald-700 transition duration-100 ease-in-out'>{link.title}</a>
{/each}
</div>