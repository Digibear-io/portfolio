import SocialLinks from "../SocialLinks";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";

const CTA = () => (
  <motion.div
    key="cta"
    className={styles.cta}
    initial="hidden"
    animate="show"
    variants={{
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          delay: 0.3,
          staggerChildren: 0.3,
        },
      },
    }}
  >
    <motion.p
      className={styles.text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span style={{ color: "white" }}>Hello</span>, My name is
      <br />
      <span key="author" style={{ color: "white" }}>
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
      >
        Illustrator
      </span>
      , and
      <br />
      <span style={{ color: "white", borderBottom: "2px solid #DE4F3C" }}>
        Web Developer.
      </span>
    </motion.p>
    <SocialLinks />
  </motion.div>
);

export default CTA;
