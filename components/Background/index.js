import { motion } from "framer-motion";
import styles from "./background.module.css";

const Background = ({ src, ...rest }) => {
  return (
    <motion.div
      className={styles.background}
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" }}
      style={{ backgroundImage: `url(${src})` }}
      {...rest}
    ></motion.div>
  );
};

export default Background;
