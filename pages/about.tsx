import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Game from "../components/Game";
import Hero from "../components/Hero";
import LinkOut from "../components/LinkOut";
import PortfolioLink from "../components/PortfolioLink";
import Layout from "../components/wrappers/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="about">
      <div className=" flex justify-center items-center bg-gray-500">
        <h1 className="lg:text-9xl text-6xl mt-20 lg:mt-auto uppercase font-black">About Me</h1>
      </div>
      <div className="h-full mt-20 lg:m-auto m-10 flex flex-col justify-center items-center ">
        <Game />
      </div>
      <div className="flex flex-col lg:flex-row">
        <LinkOut header="Find me on Github" url="https://github.com/kiwi3p">
          Interested in seeing my code or how many of those lil square thigns
          are filled in on my timeline? Click the link below!
        </LinkOut>
        <LinkOut
          header="Find me on LinkedIn"
          url="https://www.linkedin.com/in/jack-transue/"
        >
          Tired of reading posts by those LinkedIn influencers? Take a look at
          my LinkedIn! Nothing but a good ol&apos; expanded resume there!
        </LinkOut>
        <LinkOut header="Email Me" url="@mailto:johnktransue@gmail.com">
          Do the old school thing. Emailing me is the quickest way to contact
          me. Try it out, I&apos;ll definitely respond.
          <br />
          <a
            className="text-blue underline"
            href="mailto:johnktransue@gmail.com"
          >
            JohnKTransue@gmail.com
          </a>
        </LinkOut>
      </div>
    </Layout>
  );
};

export default Home;
