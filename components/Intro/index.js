import { motion } from "framer-motion";
import CTA from "../CTA";
import styles from "./Intro.module.css";

const Intro = () => (
  <motion.div className={styles.intro}>
    <motion.img
      key={"image"}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      src={"/img/logo.png"}
      className={styles.logo}
      alt="logo"
    />
    <CTA />
  </motion.div>
);

export default Intro;
