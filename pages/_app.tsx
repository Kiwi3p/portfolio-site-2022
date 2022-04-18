import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import "../styles/game.css"

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `localhost:3000/${router.route}`;

  useEffect(() => {
    AOS.init();
  });
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  );
}

export default MyApp;
