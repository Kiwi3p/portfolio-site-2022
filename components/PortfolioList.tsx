import Link from "next/link";
import portfolioData from "../data/portfolioData.json";

const PortfolioList = () => {
  return (
    <>
      <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.map((item: any, index: any) => {
          return (
            <>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="lg:mx-10 mx-auto cursor-pointer"
              >
                <Link href={`/post${item.LINK}`}>
                  <img
                    src={item.IMAGE}
                    alt={item.ALT}
                    role="img"
                    className="w-full h-full relative"
                  />
                </Link>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="bg-white rounded-lg p-6"
              >
                <div className="flex items-center space-x-6 mb-4">
                  <div className="cursor-pointer">
                    <Link href={`/post${item.LINK}`}>
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
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-javascript-plain"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.vue ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-vuejs-plain"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.isReact ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-react-original"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.next ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-nextjs-original"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.python ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-python-plain"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.django ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-django-plain"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                          {data.nest ? (
                            <button className="bg-blue-600 mx-1 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                              <i className="devicon-nestjs-plain"></i>
                            </button>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 leading-normal font-normal text-2xl">
                    {item.DESCRIPTION}
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
