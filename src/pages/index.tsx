import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { getProducts } from "../utils/WoocomerceApi";

import { Container, ProductsCarts } from "../styles/Home";

interface IImage {
  id: number;
  src: string;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  images: IImage[];
  price: string;
  description?: string;
  slug?: string;
}

export interface IProducts {
  products: IProduct[];
}

const Home: NextPage<IProducts> = ({ products }) => {
  return (
    <Layout>
      {products.length && (
        <>
          <ProductsCarts>
            {products.map((item: any) => {
              return (
                <div key={item.id}>
                  <Product product={item} />
                </div>
              );
            })}
          </ProductsCarts>

          <div>{JSON.stringify(products)}</div>
        </>
      )}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await getProducts();

  return {
    props: {
      products: data,
      revalidate: 60,
    },
  };
};
