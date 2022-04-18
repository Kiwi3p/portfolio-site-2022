const LinkOut = ({ children, header, url }: any) => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className="m-10 flex items-center justify-center px-4 bg-white">
      <div className="max-w-lg w-full rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-lg tracking-wide">{header}</h3>
        <p className="text-gray-500 my-1">{children}</p>
        <div className="mt-2">
          <a
            href={url}
            className="text-blue-700  inline-flex items-center font-semibold tracking-wide"
          >
            <span className="hover:underline">Continue to {header}</span>
            <span className="text-xl ml-2">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkOut;
