import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import Background from "../components/Background";
import { Context } from "../components/GlobalContextProvider";
import Nav from "../components/Nav";
import styles from "../styles/index.module.css";

const NotFound = () => {
  const { setNavCount } = useContext(Context);
  useEffect(() => {
    setNavCount(-1);
  });
  return (
    <div className={styles.wrapper}>
      <Background src="/img/pattern1.png" />
      <Nav />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <h1
          style={{
            padding: 0,
            margin: 0,
            color: "rgba(255,255,255,.6)",
            fontWeight: 900,
            fontSize: "3rem",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          404
        </h1>
        <h2
          style={{
            padding: 0,
            margin: 0,
            color: "white",
            fontWeight: "bolder",
            fontSize: "2.5rem",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Page Not Found
        </h2>
        <h3
          style={{
            padding: 0,
            margin: 0,
            marginTop: "2vh",
            color: "white",
            fontWeight: "normal",
            fontSize: "2rem",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          ...Or I completely ADHD'd it. :3
        </h3>
      </motion.div>
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 15, opacity: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
        style={{
          position: "relative",
          zIndex: 50,
          width: "80%",
          maxWidth: "800px",
          marginTop: "auto",
        }}
        src="/img/404-zombies.png"
      />
    </div>
  );
};

export default NotFound;
