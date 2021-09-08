import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/Layout";
import { getProducts } from "../utils/WoocomerceApi";

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout>
      <div>{JSON.stringify(data, null, 4)}</div>

      {data.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}

      <button type="button">Products</button>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await getProducts();

  return {
    props: {
      data,
    },
  };
};
