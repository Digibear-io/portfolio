import Head from "next/head";
import styles from "../styles/index.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Background from "../components/Background";
import { useRef, useState } from "react";
import Nav from "../components/Nav";
export default function Home() {
  const pandaRef = useRef();
  return (
    <div className={styles.wrapper}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Background src="/img/pattern1.png" key={"background"} />
      <Nav key="nav" />
      <motion.img
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        src="/img/mobile-menu.png"
        className={styles.mobileMenu}
      />
      <div className={styles.intro}>
        <motion.img
          key={"image"}
          ref={pandaRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          exit={{ x: 100, opacity: 0 }}
          src={"/img/logo.png"}
          className={styles.logo}
          alt="logo"
        />

        <motion.div
          key="cta"
          className={styles.cta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className={styles.text}>
            <span style={{ color: "white" }}>Hello</span>, My name is
            <br />
            <span
              key="author"
              style={{ color: "white" }}
              whileHover={{ color: "#E37332" }}
            >
              Lem Canady
            </span>
            . I am an
            <br />
            <span style={{ color: "white", borderBottom: "2px solid #DE4F3C" }}>
              Interactive Designer
            </span>
            <br />
            <span
              key="illustration"
              style={{ color: "white", borderBottom: "2px solid #DE4F3C" }}
              whileHover={{ color: "#F0CA4D" }}
            >
              Illustrator
            </span>
            , and
            <br />
            <span style={{ color: "white", borderBottom: "2px solid #DE4F3C" }}>
              Web Developer.
            </span>
          </p>
          <div className={styles.links}>
            <motion.a
              key="dribbble"
              target="_NEW"
              href="https://www.dribbble.com/lcanady"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
            >
              <img src="/img/dribbble.png" alt="dribbble" />
            </motion.a>
            <motion.a
              key="github"
              target="_NEW"
              href="https://github.com/lcanady"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1.2 }}
            >
              <img src="/img/github.png" alt="github" />
            </motion.a>
            <motion.a
              key="linkedin"
              target="_NEW"
              href="https://linkedin.com/in/lcanady"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 1.3 }}
            >
              <img src="/img/linkedIn.png" alt="linkedin" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
