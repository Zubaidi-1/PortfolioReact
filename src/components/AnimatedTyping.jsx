import { motion } from "framer-motion";

export default function AnimatedTyping({ arr, delay }) {
  return (
    <>
      {arr.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
