import type { NextPage } from "next";
import Hero from "../components/Hero";
// import PortfolioBlocks from "../components/PortfolioBlocks";
import Layout from "../components/wrappers/Layout";
import dynamic from "next/dynamic";

const PortfolioBlocks = dynamic(() => import("../components/PortfolioBlocks"));

const Home: NextPage = () => {
  return (
    <Layout title="homepage">
      <Hero
        title="JACK TRANSUE"
        img="/assets/img/JT_PROF_PIC.jpg"
        btn="see resume"
        url="/assets/uploads/JackTransueResume042622v2.pdf"
      >
        Hi! I&apos;m full stack engineer with a creative background After
        establishing automation technologies that connect designer animations to
        large scale ad deliveries, I transitioned to full stack engineering,
        working on projects for some of my favorite festivals and brands,
        helping capture hundreds of thousands of users.
        <br />
        <br />
        Feel free to message me here on LinkedIn to discuss opportunities! My
        expertise includes Javascript, React, MongoDB, AXIOS, NodeJs, ExpressJs,
        ES6, HTML & CSS, and NestJS.
      </Hero>
      <PortfolioBlocks />
    </Layout>
  );
};

export default Home;
