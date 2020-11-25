import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SocialLink = ({ href, image, alt, delay, ...rest }) => {
  const variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", delay },
    },
  };

  const control = useAnimation();

  useEffect(() => {
    const loadingAnimation = async () => control.start("animate");
    loadingAnimation();
  }, []);

  return (
    <motion.a
      target="_blank"
      href={href}
      initial={"initial"}
      animate={control}
      variants={variants}
      whileHover={{ scale: 1.2 }}
      {...rest}
    >
      <img src={image} alt={alt} />
    </motion.a>
  );
};

export default SocialLink;
