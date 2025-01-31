// import { pb } from "$lib/utils/pocketbase";
import { clientSupabase } from "$lib/utils/supabase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals: {user}}) => {
    // const salaries = await pb.collection('salaries').getFullList({
    //     filter: 'approved = true',
    //     sort: '-created'
    // });

    const {data, error} = await clientSupabase.from("submitted_emails").select().eq("id", user?.id)

    if(user && data?.length){
        const {data, error} = await clientSupabase.from("salaries").select().order("created", {ascending: false}).eq("approved", true)
    
        return {
            salaries: data, authenticated: true
        };
    } else {
        const {data, error} = await clientSupabase.from("salaries").select().order("created", {ascending: false}).eq("approved", true).limit(10)
    
    return {
        salaries: data, authenticated: false
    };
    }
    
};