<script>
    import { formatSalary, getDate } from "$lib/utils/formatting";
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte'
    let {salaries} = $props()
</script>

<Table>
    <TableHead>
        <TableHeadCell>Company</TableHeadCell>
        <TableHeadCell>Salary</TableHeadCell>
        <TableHeadCell>Role</TableHeadCell>
        <TableHeadCell>Level</TableHeadCell>
        <TableHeadCell>YOE</TableHeadCell>
        <TableHeadCell>Clearance</TableHeadCell>
        <TableHeadCell>Created</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass='divide-y'>
        {#each salaries as salary}
        <TableBodyRow>
            <TableBodyCell>{salary.company}</TableBodyCell>
            <TableBodyCell>{formatSalary(salary.salary)}</TableBodyCell>
            <TableBodyCell>{salary.role}</TableBodyCell>
            <TableBodyCell>{salary.level}</TableBodyCell>
            <TableBodyCell>{salary.yoe}</TableBodyCell>
            <TableBodyCell>{salary.clearance}</TableBodyCell>
            <TableBodyCell>{getDate(salary.created)}</TableBodyCell>
        </TableBodyRow>
        {/each}
    </TableBody>
</Table>