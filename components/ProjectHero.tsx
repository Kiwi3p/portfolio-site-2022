import Link from "next/link";

const ProjectHero = () => {
  return (
    <section className="font-mono bg-white container mx-auto px-5">
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col w-full mb-12 text-left">
          <div className="w-full mx-auto lg:w-1/2">
            <h1 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
              Run fast towards your goals
            </h1>
            <img
              className="rounded-sm"
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
            <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Are you ready for a new experience and challenge ?
            </h2>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Make challenges
            </h3>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>

          <div className="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
            <div className="flex py-2 mb-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                className="object-cover w-12 h-12 mr-2 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold tracking-tight text-black">
                  Ali
                </p>
                <p className="text-sm font-normal tracking-tight text-gray-600">
                  Content Creator
                </p>
              </div>
            </div>
            <Link href="/">
              <div className="w-full inline-block px-4 py-2 mt-4 text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700">
                {" "}
                Follow On Facebook
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
