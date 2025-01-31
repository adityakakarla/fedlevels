// import { pb } from "$lib/utils/pocketbase";
import { clientSupabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, locals: {supabase, user}}) => {
    // const salaries = await pb.collection('salaries').getFullList({
    //     filter: `company = '${params.slug}' && approved = true`,
    //     sort: '-created'
    // });
    const {data, error} = await supabase.from("submitted_emails").select().eq("id", user?.id)

    if(user && data?.length){
        const {data, error} = await clientSupabase.from("salaries").select().eq("company",params.slug).order("created", {ascending: false}).eq("approved", true)
        return {
            salaries: data,
            slug: params.slug,
            authenticated: true
        };
    } else {
        const {data, error} = await clientSupabase.from("salaries").select().eq("company",params.slug).order("created", {ascending: false}).eq("approved", true).limit(3)
        return {
            salaries: data,
            authenticated: false,
            slug: params.slug
        };
    }
};