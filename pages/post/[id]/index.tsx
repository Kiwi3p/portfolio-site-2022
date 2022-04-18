import { useRouter } from "next/router";
import portfolioData from "../../../data/portfolioData.json";
import Layout from "../../../components/wrappers/Layout";
import ProjectDescription from "../../../components/ProjectDescription";
import ContentBlock from "../../../components/ContentBlock";
import PortfolioLink from "../../../components/PortfolioLink";
import ContentHero from "../../../components/ContentHero";
import ReactHtmlParser from "react-html-parser";

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
                              <ContentHero header={item.NAME} img={item.IMAGE}>
                                {item.HERO}
                              </ContentHero>
                              <div id="description">
                                <ProjectDescription
                                  header={item.NAME}
                                  img={item.IMAGE}
                                  subhead={item.SUBHEAD}
                                  icons={item.ICONS}
                                  url={item.SITELINK}
                                >
                                  {ReactHtmlParser(item.DESCRIPTION)}
                                </ProjectDescription>
                              </div>
                              <ContentBlock
                                img={item.TECHIMG}
                                header={item.TECHHEADER}
                              >
                                {ReactHtmlParser(item.TECHDESCRIPTION)}
                              </ContentBlock>
                              <PortfolioLink
                                data={item}
                                img={item.FOOTERIMG}
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
