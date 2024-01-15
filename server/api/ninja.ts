export default defineEventHandler(async (event) => {
  // Handle query params

  const { name } = getQuery(event);

  //   handle post data

  const { age } = await readBody(event);

  return {
    message: `Hello, ${name}, you are ${age}`,
  };
});
