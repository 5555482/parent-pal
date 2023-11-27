import React from "react";
import Place from "../components/Place";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Place /> */}
      <Popular />
    </motion.div>
  );
}
