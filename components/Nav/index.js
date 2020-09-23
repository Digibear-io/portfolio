import { motion } from "framer-motion";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <motion.ul
      key="menu"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 0.8 }}
      className={styles.nav}
      style={{ position: "relative", zIndex: 10 }}
    >
      <li>
        <motion.div key="home" whileHover={{ scale: 1.3 }}>
          <a href="#" className={styles.active}>
            HOME
          </a>
        </motion.div>
      </li>
      <li>
        <motion.div key="work" whileHover={{ scale: 1.3 }}>
          <a href="#">WORK</a>
        </motion.div>
      </li>
      <li>
        <motion.div key="about" whileHover={{ scale: 1.3 }}>
          <a href="#">ABOUT</a>
        </motion.div>
      </li>
      <li>
        <motion.div hey="contact" whileHover={{ scale: 1.3 }}>
          <a href="#">CONTACT</a>
        </motion.div>
      </li>
    </motion.ul>
  );
};

export default Nav;
