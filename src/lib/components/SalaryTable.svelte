<script>
    import { formatSalary, getDate } from "$lib/utils/formatting";
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte'
    let {salaries} = $props()
</script>

<div class='overflow-x-auto'>
<Table>
    <TableHead>
        <TableHeadCell class='py-1 px-2'>Company</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Salary</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Role</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Level</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>YOE</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Clearance</TableHeadCell>
        <TableHeadCell class='py-1 px-2'>Created</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass='divide-y'>
        {#each salaries as salary}
        <TableBodyRow>
            <TableBodyCell class='py-1 px-2'>{salary.company}</TableBodyCell>
            <TableBodyCell class='py-1 px-2'>{formatSalary(salary.salary)}</TableBodyCell>
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