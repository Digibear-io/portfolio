import { motion } from "framer-motion";
import SocialLink from "./SocialLink";
import styles from "./SocialLinks.module.css";

const SocialLinks = () => (
  <motion.div
    className={styles.links}
    initial="hidden"
    animate="show"
    variants={{
      hidden: {
        opacity: 0,
        y: 0,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          when: "beforeChildren",
        },
      },
    }}
  >
    <SocialLink
      href="https://dribbble.com/lcanady/"
      image="/img/dribbble.png"
      alt="Dribbble"
      delay={0.7}
    />
    <SocialLink
      image="img/github.png"
      href="https://github.com/lcanady"
      alt="Github"
      delay={0.8}
    />
    <SocialLink
      image="/img/linkedIn.png"
      href="https://linkedin.com/in/lcanady"
      alt="LinkedIn"
      delay={0.9}
    />
  </motion.div>
);

export default SocialLinks;
