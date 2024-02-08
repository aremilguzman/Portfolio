import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "aboutme"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "aboutme" ? "About Me" : "Projects I've Built"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "aboutme" ? "https://dl.dropboxusercontent.com/scl/fi/kcz9rxcxd7ygufvt4r3e7/planets.png?rlkey=py9bocf07hvn1rv16s02yadxa&dl=0" : "https://dl.dropboxusercontent.com/scl/fi/abu1mkfekjtlr43rmmu13/sun.png?rlkey=g1teesq2vo5yogvhx02hlou41&dl=0"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};
