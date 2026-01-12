export const ssr = false;
export const prerender = false;

import { API_ENDPOINTS } from "$lib/api";

export const load = async ({ params }: any) => {
  const { event } = params;
  return {
    event: event,
  };
};
