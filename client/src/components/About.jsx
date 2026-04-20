import { motion } from "framer-motion";
import Projects from "./components/Projects";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>I am learning full stack development.</p>
    </motion.section>
  );
}