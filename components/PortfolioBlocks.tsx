import Link from "next/link";
import portfolioData from "../data/portfolioData.json";
import ContentBlock from "./ContentBlock";

const PortfolioBlocks = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <button className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                {portfolioData.map((item: any, index: any) => {
                  return (
                    <>
                      {index < 2 ? (
                        <>
                          <div className="relative w-full sm:mt-0 mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div>
                              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                                {index <= 1 ? (
                                  item.ICONS.map((data: any) => {
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
                                          null
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
                                          null
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
                                          null
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
                                          null
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
                                          null
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
                                          null
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
                                          null
                                        )}
                                      </>
                                    );
                                  })
                                ) : (
                                  null
                                )}
                              </p>

                              <div className="absolute bottom-0 left-0 p-6">
                                <h2 className="text-xl font-semibold 5 text-white">
                                  {item.NAME}
                                </h2>
                                <p className="text-base leading-4 text-white mt-2">
                                  {item.SUBHEAD}
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                                >
                                  <p className="pr-2 text-sm font-medium leading-none">
                                    Read More
                                  </p>
                                  <svg
                                    className="fill-stroke"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.75 12.5L10.25 8L5.75 3.5"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <img
                              src="https://i.ibb.co/gDdnJb5/img-6.png"
                              className="w-full"
                              alt="wall design"
                            />
                          </div>
                        </>
                      ) : (
                        null
                      )}
                    </>
                  );
                })}
              </button>
              {portfolioData.map((item: any, index: any) => {
                return (
                  <>
                    {index === 2 ? (
                      <button className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div>
                          <p className="p-6 pt-10 text-xs font-medium leading-3 text-white absolute top-0 right-0">
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
                                  )}
                                </>
                              );
                            })}
                          </p>
                          <div className="absolute bottom-0 left-0 md:p-10 p-6">
                            <h2 className="text-xl font-semibold 5 text-white">
                              {item.NAME}
                            </h2>
                            <p className="text-base leading-4 text-white mt-2">
                              {item.SUBHEAD}
                            </p>
                            <a
                              href="javascript:void(0)"
                              className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p className="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                className="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="https://i.ibb.co/Ms4qyXp/img-3.png"
                          alt="sitting place"
                          className="w-full mt-8 md:mt-6 hidden sm:block"
                        />
                        <img
                          className="w-full mt-4 sm:hidden"
                          src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                          alt="sitting place"
                        />
                      </button>
                    ) : (
                      null
                    )}
                  </>
                );
              })}
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              {portfolioData.map((item: any, index: any) => {
                return (
                  <>
                    {index === 3 ? (
                      <button className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <div>
                          <p className="p-6 pt-10 text-xs font-medium leading-3 text-white absolute top-0 right-0">
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
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
                                    null
                                  )}
                                </>
                              );
                            })}
                          </p>
                          <div className="absolute bottom-0 left-0 md:p-10 p-6">
                            <h2 className="text-xl font-semibold 5 text-white">
                              {item.NAME}
                            </h2>
                            <p className="text-base leading-4 text-white mt-2">
                              {item.SUBHEAD}
                            </p>
                            <a
                              href="javascript:void(0)"
                              className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                            >
                              <p className="pr-2 text-sm font-medium leading-none">
                                Read More
                              </p>
                              <svg
                                className="fill-stroke"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.75 12.5L10.25 8L5.75 3.5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <img
                          src="https://i.ibb.co/Ms4qyXp/img-3.png"
                          alt="sitting place"
                          className="w-full mt-8 md:mt-6 hidden sm:block"
                        />
                        <img
                          className="w-full mt-4 sm:hidden"
                          src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                          alt="sitting place"
                        />
                      </button>
                    ) : (
                      null
                    )}
                  </>
                );
              })}
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                {portfolioData.map((item: any, index: any) => {
                  return (
                    <>
                      {index > 3 ? (
                        <>
                          <button className="relative w-full sm:mt-0 mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div>
                              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
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
                                        null
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
                                        null
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
                                        null
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
                                        null
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
                                        null
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
                                        null
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
                                        null
                                      )}
                                    </>
                                  );
                                })}
                              </p>
                              <div className="absolute bottom-0 left-0 p-6">
                                <h2 className="text-xl font-semibold 5 text-white">
                                  {item.NAME}
                                </h2>
                                <p className="text-base leading-4 text-white mt-2">
                                  {item.SUBHEAD}
                                </p>
                                <a
                                  href="javascript:void(0)"
                                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                                >
                                  <p className="pr-2 text-sm font-medium leading-none">
                                    Read More
                                  </p>
                                  <svg
                                    className="fill-stroke"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.75 12.5L10.25 8L5.75 3.5"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <img
                              src="https://i.ibb.co/gDdnJb5/img-6.png"
                              className="w-full"
                              alt="wall design"
                            />
                          </button>
                        </>
                      ) : index < 5 ? (
                        null
                      ) : (
                        null
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row px-24 justify-center">
        {portfolioData.map((item: any, index: any) => {
          return (
            <>
              {index >= 5 ? (
                <>
                  {/* <ContentBlock /> */}
                  <div className="relative flex justify-center">
                    <div>
                      <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        12 April 2021
                      </p>
                      <div className="absolute bottom-0 left-0 md:p-10 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          The Decorated Ways
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Dive into minimalism
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/Ms4qyXp/img-3.png"
                      alt="sitting place"
                      className="w-full mt-8 md:mt-6 hidden sm:block"
                    />
                    <img
                      className="w-full mt-4 sm:hidden"
                      src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                      alt="sitting place"
                    />
                  </div>
                </>
              ) : (
                null
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioBlocks;
