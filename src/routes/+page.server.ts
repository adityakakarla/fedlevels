// import { pb } from "$lib/utils/pocketbase";
import { supabase } from "$lib/utils/supabase";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async() => {
    // const salaries = await pb.collection('salaries').getList(1, 3, {
    //     filter: 'approved = true',
    //     sort: '-created'
    // })

    const {data, error} = await supabase.from('salaries').select().order('created', {ascending: false}).limit(3)
    
    return {
        salaries: (data as ArrayLike<any>)
    }
}