// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://localhost:80/wordpress",
  consumerKey: "ck_e3e1a2bdbf3e2fa64a37db156423bce13da7646e",
  consumerSecret: "cs_1b8ccdf4b1448080fde4aa593c58bff6cb41fe6b",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  console.log("reponse: ");

  try {
    const response = await api.get("products", {
      axiosConfig: {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dvcmRwcmVzcyIsImlhdCI6MTYzMTExNDA3MSwibmJmIjoxNjMxMTE0MDcxLCJleHAiOjE2MzE3MTg4NzEsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.2QNGM43RiVVxeDSvyTXFKCqzPSXr9cPfm5qgmElflJ0`,
        },
      },
    });

    return response;
  } catch (error) {
    console.log("error");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products");

    console.log("data: ", data);

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json(error);
  }
  res.status(200).json({ name: "Products" });
}
