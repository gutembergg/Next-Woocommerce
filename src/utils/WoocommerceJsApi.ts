var WooCommerceAPI = require("woocommerce-api");

var WooCommerce = new WooCommerceAPI({
  url: "http://localhost:80/wordpress",
  consumerKey: "ck_1002d406981eec982940cd74ec9767a1dfa2b6f1",
  consumerSecret: "cs_eb37cbc53f995845a60175e47420c15de15de3ab",
  wpAPI: true,
  version: "wc/v1",
});

export const getProducts = () => {
  WooCommerce.get("products")
    .then((response: any) => {
      console.log(response.data);
    })
    .catch((error: Error) => {
      console.log(error);
    });
};
