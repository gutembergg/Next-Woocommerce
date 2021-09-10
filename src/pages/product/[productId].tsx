import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { IProduct } from "..";
import { getProductById } from "../../utils/WoocomerceApi";

interface Props {
  product: IProduct;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  return <div>{JSON.stringify(product)}</div>;
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.productId;

  const product = await getProductById("34");

  console.log("product: ", product);

  return {
    props: {
      product,
    },
  };
};
