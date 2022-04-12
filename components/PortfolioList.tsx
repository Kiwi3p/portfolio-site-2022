import Link from "next/link";
import portfolioData from "../data/portfolioData.json";

const PortfolioList = () => {
  return (
    <>
      <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.map((item: any, index: any) => {
          return (
            <>
              <div className="mx-10">
                <img
                  src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png"
                  alt="A lounge sofa"
                  role="img"
                  className="w-full h-full relative hidden lg:block"
                />
              </div>
              <div className="bg-white rounded-lg p-6" data-aos="fade-up">
                <div
                  className="flex items-center space-x-6 mb-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="500"
                >
                  <div>
                    <Link href={`/post/${item.LINK}`}>
                      <p className="text-5xl text-gray-700 font-normal mb-1">
                        {item.NAME}
                      </p>
                    </Link>
                    <p className="text-4xl my-2 text-blue-600 font-normal">
                      {item.SUBHEAD}
                    </p>
                    {item.ICONS.map((data: any) => {
                      return (
                        <>
                          {data.javaScript ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-javascript-plain"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.vue ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-vuejs-plain"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.isReact ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-react-original"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.next ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-nextjs-original"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.python ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-python-plain"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.django ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-django-plain"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                          {data.nest ? (
                            <a
                              href="https://www.linkedin.com/feed/"
                              className="hover:cursor-pointer hover:text-blue-500"
                            >
                              <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <i className="devicon-nestjs-plain"></i>
                              </button>
                            </a>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p
                    className="text-gray-400 leading-normal font-normal text-2xl"
                    data-aos="zoom-in-up"
                    data-aos-duration="500"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioList;
