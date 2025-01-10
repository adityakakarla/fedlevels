import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const salaries = await pb.collection('salaries').getFullList({
        filter: 'approved = true',
        sort: '-created'
    });
    
    return {
        salaries
    };
};