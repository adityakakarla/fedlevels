<script>
    import { formatSalary, getDate } from "$lib/utils/formatting";
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte'
    let {salaries} = $props()
</script>

<p class='text-sm text-gray-500'>Note: some rows may have missing information due to prior versions of FedLevels</p>
<div class='overflow-x-auto'>
<Table>
    <TableHead>
        <TableHeadCell class='py-1 px-2'>Company</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>TC</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Base</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Stock</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Clearance Bonus</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Annual Bonus</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Signing Bonus</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Role</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Level</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>YOE</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Clearance</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Posted</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass='divide-y'>
        {#each salaries as salary}
        <TableBodyRow>
            <TableBodyCell class='py-1 px-2'>{salary.company}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.salary + salary.stock + salary.clearance_bonus + salary.annual_bonus + salary.signing_bonus)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.salary)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.stock)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.clearance_bonus)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.annual_bonus)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.signing_bonus)}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{salary.role}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{salary.level}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{salary.yoe}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{salary.clearance}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{getDate(salary.created)}</TableBodyCell>
        </TableBodyRow>
        {/each}
    </TableBody>
</Table>
</div>