export default defineEventHandler(async (event) => {
  const { catApiBaseUrl } = useRuntimeConfig();

  const uri = `${catApiBaseUrl}/facts/${event.context.params?.id}`;

  const data = await $fetch(uri);

  return {
    data,
  };
});
