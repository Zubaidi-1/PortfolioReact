import { motion } from "framer-motion";

export default function Button({ text, name, ...props }) {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className={name}
        {...props}
      >
        {text}
      </motion.button>
    </>
  );
}
