// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.get(
    "http://localhost/wordpress/wp-json/wc/v3/products/36?consumer_key=ck_e3e1a2bdbf3e2fa64a37db156423bce13da7646e&consumer_secret=cs_1b8ccdf4b1448080fde4aa593c58bff6cb41fe6b"
  );

  res.status(200).json(response);
}
