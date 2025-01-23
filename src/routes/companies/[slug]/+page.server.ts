// import { pb } from "$lib/utils/pocketbase";
import { supabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    // const salaries = await pb.collection('salaries').getFullList({
    //     filter: `company = '${params.slug}' && approved = true`,
    //     sort: '-created'
    // });

    const {data, error} = await supabase.from("salaries").select().eq("company",params.slug).order("created", {ascending: false})
    
    return {
        salaries: data,
        slug: params.slug
    };
};