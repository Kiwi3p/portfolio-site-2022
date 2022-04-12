import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NavbarPage } from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `localhost:3000/${router.route}`;
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <NavbarPage />
      <Component {...pageProps} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
