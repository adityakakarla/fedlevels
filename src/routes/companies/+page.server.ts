// import { pb } from "$lib/utils/pocketbase";
import { clientSupabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // const records = await pb.collection('salaries').getFullList({
    //     filter: 'approved = true'
    // });

    const companies = await clientSupabase.from('salaries').select('company').eq("approved", true)
    const uniqueCompanies = companies.data ? [...new Set(companies.data.map(salary => salary.company))] : [];
    
    return {
        companies: uniqueCompanies
    };
};