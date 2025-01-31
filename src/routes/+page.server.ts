// import { pb } from "$lib/utils/pocketbase";
import { clientSupabase } from "$lib/utils/supabase";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async() => {
    // const salaries = await pb.collection('salaries').getList(1, 3, {
    //     filter: 'approved = true',
    //     sort: '-created'
    // })

    const {data, error} = await clientSupabase.from('salaries').select().order('created', {ascending: false}).limit(3).eq("approved", true)
    
    return {
        salaries: (data as ArrayLike<any>)
    }
}