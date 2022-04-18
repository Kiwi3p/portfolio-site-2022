import Link from "next/link";

const ProjectDescription = ({
  header,
  img,
  subhead,
  icons,
  url,
  children,
}: any) => {
  return (
    <div className="flex lg:flex-row flex-col items-center">
      <section className="font-mono bg-white container mx-auto px-5">
        <div className="flex flex-col items-center py-8">
          <div className="flex flex-col w-full mb-12 text-left">
            <div className="w-full mx-auto lg:w-1/2">
              <h1 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
                {header}
              </h1>
              <img className="rounded-sm" src={img} />
              <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
                {subhead}
              </h2>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">
                {children}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="self-end mr-8 p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
        <div className="flex py-2 mb-4 w-full">
          <img src={img} className="object-cover w-12 h-12 mr-2 rounded-full" />
          <div>
            <p className="text-sm font-semibold tracking-tight text-black">
              {header}
            </p>
            <p className="text-sm font-normal tracking-tight text-gray-600">
              Tech Stack:
            </p>
            {icons.map((data: any) => {
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
        <Link href={url}>
          <button className="w-full inline-block px-4 py-2 mt-4 text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700">
            {" "}
            View Site
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ProjectDescription;
