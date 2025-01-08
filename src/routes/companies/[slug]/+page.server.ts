import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const salaries = await pb.collection('salaries').getFullList({
        filter: `company = '${params.slug}'`
    });
    
    return {
        salaries: salaries,
        slug: params.slug
    };
};