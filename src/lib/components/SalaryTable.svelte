<script>
    import { formatSalary, getDate } from "$lib/utils/formatting";
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte'
    let {salaries} = $props()
</script>

<div class='overflow-x-auto p-2 bg-transparent border border-stone-400 rounded-sm'>
<Table class='text-black'>
    <TableHead class='border-b text-center border-stone-400 text-xl'>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Company</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>TC</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Base</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Stock</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Clearance Bonus</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Annual Bonus</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Signing Bonus</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Role</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Level</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>YOE</TableHeadCell>
        <TableHeadCell class='py-2 px-4 border-r border-stone-400 font-light'>Clearance</TableHeadCell>
        <TableHeadCell class='py-2 px-4 font-light'>Posted</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass='divide-y'>
        {#each salaries as salary}
        <TableBodyRow class='bg-transparent border-b-0'>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{salary.company}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.salary + salary.stock + salary.clearance_bonus + salary.annual_bonus + salary.signing_bonus)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.salary)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.stock)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.clearance_bonus)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.annual_bonus)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{formatSalary(salary.signing_bonus)}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{salary.role}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{salary.level}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{salary.yoe}</TableBodyCell>
            <TableBodyCell class='p-2 border-r border-t border-stone-400 font-light'>{salary.clearance}</TableBodyCell>
            <TableBodyCell class='p-2 border-t border-stone-400 font-light'>{getDate(salary.created)}</TableBodyCell>
        </TableBodyRow>
        {/each}
    </TableBody>
</Table>
</div>