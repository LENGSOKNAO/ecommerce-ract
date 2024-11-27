import React from "react";
import Layout from "../layout/Layout";
import Bainner from "../components/Home/Bainner";
import Product from "../components/Home/Product";
import Discount from "../components/Home/Discount";

const HomeScreen = () => {
  return (
    <Layout>
      <Bainner />
      <Product />
      <Discount />
    </Layout>
  );
};

export default HomeScreen;
