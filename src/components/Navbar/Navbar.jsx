import { Sidebar } from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar: aqui traemos el componente que le da forma a las barras del menu hamburguesa */}
      <Sidebar />
      {/* Configuracion del navbar con efecto de animacion del logo*/}
      <div className="wrapper">
        <div className="personal-logo">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://dl.dropboxusercontent.com/scl/fi/bvo0s8orm5kynjai3nlsd/new-logo.png?rlkey=u9d1tfr3wapnar2o0agf1t319&dl=0"
            alt="logo"
          />
        </div>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/h%C3%A9ctor-guzm%C3%A1n-9b5359227/"
            target="_blank"
          >
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/2wxbn8bvzd5nh4oxsqvdx/logo-Linked.png?rlkey=64jekz88u1a1iftypddikmky4&dl=0"
              alt="Linkedin logo"
            />
          </a>
          <a href="https://github.com/aremilguzman" target="_blank">
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/2j1uam7v7ajid4hzg2m89/github-p.png?rlkey=i87yffc486d7ffkvi0paqry1u&dl=0"
              alt="github logo"
            />
          </a>
          <a href="https://www.instagram.com/aremilguzman/" target="_blank">
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/qn2reu5tujb85pdt0nsr4/instagram.png?rlkey=ytqxerxdbsomxmo10q8bmixxv&dl=0"
              alt="IG logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
