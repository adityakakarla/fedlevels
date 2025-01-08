import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/utils/pocketbase';

export const actions: Actions = {
  default: async ({ request }) => {
    const requestData = await request.formData();
    const company = requestData.get('company');
    const salary = requestData.get('salary');
    const role = requestData.get('role');
    const level = requestData.get('level');
    const yoe = requestData.get('yoe');
    const clearance = requestData.get('clearance');

    const data = {
      company,
      salary,
      role,
      level,
      yoe,
      clearance,
    };

    try {
      await pb.collection('salaries').create(data);
      return {success: true}
    } catch (error) {
      console.error('Error submitting data:', error);
      return {success: false}
    }
  },
};