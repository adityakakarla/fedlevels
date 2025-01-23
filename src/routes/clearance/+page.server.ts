// import { pb } from "$lib/utils/pocketbase";
import { supabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // const salaries = await pb.collection('salaries').getFullList({
    //     filter: 'approved = true',
    //     sort: '-created'
    // });

    const {data, error} = await supabase.from("salaries").select().order("created", {ascending: false})
    
    return {
        salaries: data
    };
};