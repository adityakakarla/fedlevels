import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/utils/pocketbase';

export const actions: Actions = {
  default: async ({ request }) => {
    const requestData = await request.formData();
    const company = requestData.get('company');
    const salary = requestData.get('salary');
    const stock = requestData.get('stock')
    const clearance_bonus = requestData.get('clearance_bonus')
    const annual_bonus = requestData.get('annual_bonus')
    const signing_bonus = requestData.get('signing_bonus')
    const role = requestData.get('role');
    const level = requestData.get('level');
    const yoe = requestData.get('yoe');
    const clearance = requestData.get('clearance');

    const data = {
      company,
      salary,
      stock,
      clearance_bonus,
      annual_bonus,
      signing_bonus,
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