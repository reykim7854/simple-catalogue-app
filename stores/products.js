export const useProductsStore = defineStore("products", () => {
  const product = ref({});

  const getAllProducts = () => {
    try {
      return useApi("/products", {
        method: "GET",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async (id) => {
    try {
      if (product?.id !== id) {
        const { data } = await useApi(`/products/${id}`);
        if (!!data) {
          product.value = { ...data.value };
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { product, getAllProducts, getProduct };
});
