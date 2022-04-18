import type { NextPage } from "next";
import ContentBlock from "../components/ContentBlock";
import LinkOut from "../components/LinkOut";
import Layout from "../components/wrappers/Layout";

const Contact: NextPage = () => {
  return (
    <Layout title="contact">
      <div>
        <div className="flex justify-center items-center bg-gray-500">
          <h1 className="lg:text-9xl text-6xl mt-20 lg:mt-auto uppercase font-black">Contact Me</h1>
        </div>
        <div className="flex lg:flex-row flex-col">
          <img
            className="w-96 lg:m-24 lg:p-10 m-auto my-10 lg:my-auto"
            src="/assets/img/JT_PROF_PIC.jpg"
            alt="pic of me"
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap">
            <LinkOut header="Find me on Github" url="https://github.com/kiwi3p">
              Interested in seeing my code or how many of those lil square
              thigns are filled in on my timeline? Click the link below!
            </LinkOut>
            <LinkOut
              header="Find me on LinkedIn"
              url="https://www.linkedin.com/in/jack-transue/"
            >
              Tired of reading posts by those LinkedIn influencers? Take a look
              at my LinkedIn! Nothing but a good ol&apos; expanded resume there!
            </LinkOut>
            <LinkOut header="Email Me" url="@mailto:johnktransue@gmail.com">
              Do the old school thing. Emailing me is the quickest way to
              contact me. Try it out, I&apos;ll definitely respond.
              <br />
              <a
                className="text-blue underline"
                href="mailto:johnktransue@gmail.com"
              >
                JohnKTransue@gmail.com
              </a>
            </LinkOut>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
