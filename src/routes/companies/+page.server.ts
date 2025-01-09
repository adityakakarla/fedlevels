import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const records = await pb.collection('salaries').getFullList({
        filter: 'approved = true'
    });
    const uniqueCompanies = [...new Set(records.map(salary => salary.company))];
    
    return {
        companies: uniqueCompanies
    };
};