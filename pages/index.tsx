import type { NextPage } from "next";
import Hero from "../components/Hero";
// import PortfolioBlocks from "../components/PortfolioBlocks";
import Layout from "../components/wrappers/Layout";
import dynamic from 'next/dynamic';

const PortfolioBlocks = dynamic(() => import("../components/PortfolioBlocks"))


const Home: NextPage = () => {
  return (
    <Layout title="homepage">
      <Hero
        title="JACK TRANSUE"
        img="/assets/img/JT_PROF_PIC.jpg"
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
