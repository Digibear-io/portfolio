import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import styles from "./Nav.module.css";
import { Context } from "../GlobalContextProvider";
const Nav = ({ index }) => {
  const { navCount, setNavCount } = useContext(Context);
  useEffect(() => setNavCount(0), []);
  return (
    <motion.ul
      key="menu"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 0.6 }}
      className={styles.nav}
      style={{ position: "relative", zIndex: 10 }}
    >
      <li>
        <NavLink href="/" index={0}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink href="/work" index={1}>
          WORK
        </NavLink>
      </li>
      <li>
        <NavLink href="/about" index={2}>
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink href="/contact" index={3}>
          CONTACT
        </NavLink>
      </li>
    </motion.ul>
  );
};

const NavLink = ({ key, href, index, children, ...rest }) => {
  const { navCount, setNavCount } = useContext(Context);

  return (
    <motion.div key={key} whileHover={{ scale: 1.3 }}>
      <a
        href={href}
        className={navCount === index ? styles.active : ""}
        onClick={() => setNavCount(index)}
        {...rest}
      >
        {children}
      </a>
    </motion.div>
  );
};

export default Nav;
