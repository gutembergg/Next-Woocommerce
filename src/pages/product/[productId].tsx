import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { IProduct } from "..";
import { getProductById } from "../../utils/WoocomerceApi";

import { Container, Card, ImageBox, Infos } from "../../styles/productDetail";
import Layout from "../../components/Layout";

interface Props {
  product: IProduct;
}

const ProductDetail: NextPage<Props> = ({ product }) => {
  return (
    <Layout>
      {product && (
        <Container>
          <Card>
            <ImageBox>
              <Image
                width={200}
                height={200}
                src={product.images[0].src}
                alt="product"
              />
            </ImageBox>
            <Infos>
              <h2>Slug: {product.slug}</h2>
              <h2>{product.name}</h2>
              <h2>Prix: {product.price}</h2>
            </Infos>
          </Card>
        </Container>
      )}
    </Layout>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug: any = ctx.params?.productId;

  const id = slug?.split("-").pop();

  const product = await getProductById(id as string);

  return {
    props: {
      product,
    },
  };
};
