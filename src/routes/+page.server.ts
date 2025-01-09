import { pb } from "$lib/utils/pocketbase";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async() => {
    const salaries = await pb.collection('salaries').getList(1, 3, {
        filter: 'approved = true',
        sort: '-created'
    })
    
    return {
        salaries: salaries.items
    }
}