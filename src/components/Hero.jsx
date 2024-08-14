import { forwardRef } from "react";
import AnimatedTyping from "./AnimatedTyping";
import classes from "./Hero.module.css";
import { motion } from "framer-motion";
const Hero = forwardRef(function ({ scrollTo }, ref) {
  const text = " Hey, I'm Abdalla Zubaidi!";
  const textArr = text.split("");
  const aboutArr =
    "I'm a computer science student, passionate about the web!".split("");
  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.textContainer}>
        <p className={classes.name}>
          <AnimatedTyping arr={textArr} delay={0.5} />
        </p>
        <p className={classes.about}>
          <AnimatedTyping arr={aboutArr} delay={1.8} />
        </p>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollTo}
        >
          Learn more!
        </motion.button>
      </div>
    </div>
  );
});

export default Hero;
