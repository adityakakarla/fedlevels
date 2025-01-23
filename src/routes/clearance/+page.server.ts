// import { pb } from "$lib/utils/pocketbase";
import { supabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // const salaries = await pb.collection('salaries').getFullList({
    //     filter: 'approved = true',
    //     sort: '-created'
    // });

    const {data, error} = await supabase.from("salaries").select().order("created", {ascending: false}).eq("approved", true)
    
    return {
        salaries: data
    };
};