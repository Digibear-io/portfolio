import styles from "../styles/index.module.css";
import { motion } from "framer-motion";
import Background from "../components/Background";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Nav />

      <Background src="/img/pattern1.png" key={"background"} />
      <motion.img
        key={"mobileNav"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        src="/img/mobile-menu.png"
        className={styles.mobileMenu}
      />
      <Intro />
    </div>
  );
}
