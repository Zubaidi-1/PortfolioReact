import classes from "./Header.module.css";
import { easeIn, motion } from "framer-motion";
export default function Header({ skills, projects, Form, about }) {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeIn },
    },
  };
  return (
    <motion.div
      className={classes.contain}
      initial="hidden"
      animate="visible"
      variants={boxVariants}
    >
      <ul>
        <li>
          <a onClick={about}>About</a>
        </li>
        <li>
          <a onClick={skills}>Skills</a>
        </li>
        <li>
          <a onClick={projects}>Projects</a>
        </li>
        <li>
          <a onClick={Form}>Contact me</a>
        </li>
      </ul>
    </motion.div>
  );
}
