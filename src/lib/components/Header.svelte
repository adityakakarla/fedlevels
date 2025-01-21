<script>
    const links = [
        {path: '/', title: 'Home'},
        {path: '/submit', title: 'Submit'},
        {path: '/companies', title: 'Companies'},
        {path: '/clearance', title: 'Clearance'}
    ]
</script>

<div class='px-10 py-4 border-b-[1px] border-gray-700 space-x-6'>
{#each links as link}
<a href={link.path} class='hover:text-emerald-600 text-md md:text-xl font-light transition duration-50 ease-in-out'>{link.title}</a>
{/each}
</div>