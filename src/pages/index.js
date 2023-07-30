import RootLayout from "./../../components/Layouts/RootLayout";
import Head from "next/head";
import Hero from "./../ui/hero";
import Products from "../ui/Products";
import Category from "./../ui/catagories";

const HomePage = ({ allProducts }) => {
  return (
    <div>
      <Head>
        <title> My PC Store </title>

        <meta name="pc store" description="ram, cpu, monitor, mouse" />
      </Head>
      <Hero />

      <h1 className="m-5 text-center font-bold text-2xl">
        {" "}
        Featured Categories
      </h1>

      <Category />

      <h1 className="m-5 text-center font-bold text-2xl"> Featured Products</h1>
      <Products allProducts={allProducts} />
      <br />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-server.onrender.com/product",
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
