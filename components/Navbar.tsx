import Link from "next/link";
import React from "react";
import navData from "../data/navData.json";
import { CurtainMenuPage } from "./CurtainMenu";

export const NavbarPage = () => {
  return (
    <Navbar className="bg-white text-gray-600">
      <NavbarBrand href="/">JACK TRANSUE</NavbarBrand>
      <NavbarToggler navData={navData} />
      <NavbarCollapse>
        <NavbarNav orientation="start"></NavbarNav>
        <NavbarNav orientation="end">
          {navData.map((item, index) => {
            return (
              <>
                {item.isLinkOut ? (
                  <NavbarItem>
                    <a rel="noreferrer" target="_blank" href={item.link}>{item.name}</a>
                  </NavbarItem>
                ) : (
                  <NavbarItem>
                    <NavbarLink href={item.link}>{item.name}</NavbarLink>
                  </NavbarItem>
                )}
              </>
            );
          })}
          <span className="md:flex hidden items-center">
          <a
            className=" h-8 w-8 rounded-full outline-none focus:outline-none"
            href="mailto:johnktransue@gmail.com"
            target="_blank"
            rel="noreferrer"
            type="button"
          >
            <svg
              width="24"
              height="24"
              className="transition duration-700 ease-in-out fill-current cursor-pointer text-gray-700 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z
                            			"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330
                            			c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75
                            			c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75
                            			c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135
                            			s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789
                            			C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180
                            			C422,303.091,395.091,330,362,330z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>

          <a
            className="h-8 w-8 rounded-full outline-none focus:outline-none"
            type="button"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jack-transue/"
          >
            <svg
              className="fill-current transition duration-700 ease-in-out text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            className="h-8 w-8 rounded-full outline-none focus:outline-none"
            type="button"
            target="_blank"
            rel="noreferrer"
            href="http://www.github.com/kiwi3p"
          >
            <svg
              className="fill-current transition duration-700 ease-in-out text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-black"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Github</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </span>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style: any = {
  navbar: `fixed z-50 px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `list-none cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext({});

const Navbar = ({ children, className }: any) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef: any = React.useRef(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }: any) => (
  <Link href={href}>
    <strong className={style.brand}>{children}</strong>
  </Link>
);

const NavbarToggler = ({ navData }: any) => {
  const { toggle }: any = useToggle();
  return (
    // <button
    //   type="button"
    //   aria-expanded="false"
    //   aria-label="Toggle navigation"
    //   className={style.toggler}
    //   onClick={toggle}
    // >
    //   &#8801;
    // </button>
    <CurtainMenuPage navData={navData} />
  );
};

const NavbarCollapse = ({ children }: any) => {
  const { open }: any = useToggle();
  return (
    <div
      style={{ backgroundColor: "inherit" }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }: any) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children }: any) => (
  <li className={style.item}>{children}</li>
);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({ children, href, active, activeClass }: any) => (
  <Link href={href}>
    <span className={active ? activeClass : ""}>{children}</span>
  </Link>
);
