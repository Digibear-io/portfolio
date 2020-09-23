import { motion } from "framer-motion";
import GlobalContextProvider from "../components/GlobalContextProvider";
import "../styles/globals.css";
function MyApp({ Component, pageProps, router }) {
  return (
    <GlobalContextProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </GlobalContextProvider>
  );
}

export default MyApp;
