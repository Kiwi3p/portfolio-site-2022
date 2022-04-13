const PortfolioLink = (props: any) => {
  return (
    <section className="text-blueGray-700 bg-white mt-20">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            {" "}
            Find out more{" "}
          </h2>
          <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
            {" "}
            {props.header}{" "}
          </h1>
          <div className="flex flex-col justify-center lg:flex-row">
            <a href={props.github} className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              See Github{" "}
            </a>
            <a href={props.url} className="flex items-center ml-6 px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              See Site{" "}
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
          <img
            className="object-cover object-center rounded-lg "
            alt="hero"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioLink;
