import { useRouter } from "next/router";
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
                        {item.SUBNAV.map((item: any, index) => {
                          return (
                            <>
                              <ProjectHero
                                header={item.NAME}
                                img={item.IMAGE}
                                subhead={item.SUBHEAD}
                                description={item.DESCRIPTION}
                                icons={item.ICONS}
                                url={item.SITELINK}
                              />
                              <ContentBlock
                                img={item.TECHIMG}
                                header={item.TECHHEADER}
                                description={item.TECHDESCRIPTION}
                              />
                              <PortfolioLink
                                header={item.GITHUBHEADER}
                                github={item.GITHUBLINK}
                                url={item.SITELINK}
                              />
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
