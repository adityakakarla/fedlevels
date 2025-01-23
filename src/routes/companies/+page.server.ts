// import { pb } from "$lib/utils/pocketbase";
import { supabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // const records = await pb.collection('salaries').getFullList({
    //     filter: 'approved = true'
    // });

    const companies = await supabase.from('salaries').select('company')
    const uniqueCompanies = companies.data ? [...new Set(companies.data.map(salary => salary.company))] : [];
    
    return {
        companies: uniqueCompanies
    };
};