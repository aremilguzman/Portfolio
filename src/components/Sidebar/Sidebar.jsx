import { Links } from "./Links/Links";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import "./sidebar.scss";
import { motion } from "framer-motion";
import { useState } from "react";

//Variantes para lograr animacion del menu Hamburguesa segun su estado
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(25px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [open, setopen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setopen={setopen} />
    </motion.div>
  );
};
