import { productsMock } from "../data/productsMock";

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productsMock), 800);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsMock.find(p => p.id === Number(id));
      resolve(product || null);
    }, 800);
  });
};
