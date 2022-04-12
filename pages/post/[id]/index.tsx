import { useRouter } from "next/router";
import Link from "next/link";
import portfolioData from "../../../data/portfolioData.json";
import Layout from "../../../components/wrappers/Layout";
import ProjectHero from "../../../components/ProjectHero";
import ContentBlock from "../../../components/ContentBlock";
import PortfolioLink from "../../../components/PortfolioLink";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return (
    <>
      <Layout title="Project Description">
        {portfolioData.map((item, index) => {
          return (
            <>
              <>
                {item.LINK === `/${id}` ? (
                  <>
                    {item.SUBNAV ? (
                      <>
                        {item.SUBNAV.map((item, index) => {
                          return (
                            <>
                              {item.NAME}
                              <ProjectHero />
                              <ContentBlock />
                              <PortfolioLink />
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            </>
          );
        })}
      </Layout>
    </>
  );
};

export default Post;
