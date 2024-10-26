export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://fakestoreapi.com",
    async onResponseError({ response }) { },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
