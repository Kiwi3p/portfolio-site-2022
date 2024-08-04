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
        url="/assets/uploads/JackTransueResume-010924.pdf"
      >
        Hi! I&apos;m a full stack engineer with extensive background in B2B and B2C SaaS development, particularly in web and mobile applications. 
        <br/>
        <br/>
        My expertise includes
        Javascript, Vue (Nuxt.js), React(Next.js), AWS Lambda, Serverless, SQL, NodeJS, Python, Django, and NestJS.
      </Hero>
      <PortfolioBlocks />
    </Layout>
  );
};

export default Home;
