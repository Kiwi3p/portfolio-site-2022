import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import PortfolioList from "../components/PortfolioList";
import PortfolioListV2 from "../components/PortfolioBlocks";
import Layout from "../components/wrappers/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Portfolio">
      {/* <Hero /> */}
      <PortfolioList />
      
    </Layout>
  );
};

export default Home;
