import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

const wooCommerce = new WooCommerceRestApi({
  url: "http://localhost/wordpress",
  consumerKey: "ck_e3e1a2bdbf3e2fa64a37db156423bce13da7646e",
  consumerSecret: "cs_1b8ccdf4b1448080fde4aa593c58bff6cb41fe6b",
  version: "wc/v3",
  queryStringAuth: true,
});

export const getProducts = async () => {
  const response = await wooCommerce.get("products");

  return response;
};

export const getProductById = async (id: string) => {
  const { data } = await wooCommerce.get(`products/${id}`);

  return data;
};
