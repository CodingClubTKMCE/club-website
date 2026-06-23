export const ssr = false;
export const prerender = false;

export const load = async ({ params }: any) => {
  const { event } = params;
  return {
    event: event,
  };
};
