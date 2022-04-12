import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import PortfolioBlocks from "../components/PortfolioBlocks";
import Layout from "../components/wrappers/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="homepage">
      <Hero
        title="JACK TRANSUE"
        img="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png"
        btn="see resume"
        btnkLink="/resume"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using.
      </Hero>
      <PortfolioBlocks />
    </Layout>
  );
};

export default Home;
