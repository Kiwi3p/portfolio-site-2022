const Hero = ({ children, title, img, btnLink, btn }: any) => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto py-9 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
          <div className="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">
                {title}
              </h1>
              <p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">
                {children}
              </p>
            </div>
          </div>
          <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
            <div className="relative w-full h-full">
              <img
                src={img}
                alt="A lounge sofa"
                role="img"
                className="w-full h-full relative hidden lg:block"
              />
              <img
                src={img}
                alt="A lounge sofa"
                role="img"
                className="w-full h-full lg:hidden"
              />
              <div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={btnLink}
                  className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
                >
                  {btn}
                  <div>
                    <svg
                      className="fill-stroke dark:hover:text-gray-600"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66663 16H25.3333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 10.667L25.3333 16.0003"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:hidden">
              <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
