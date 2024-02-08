import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -200,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            straggerChildren: 0.1,
        },
    },
};

export const About = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin: "-100px"});

    const cvUrl = 'https://dl.dropboxusercontent.com/scl/fi/kmjgpluowj6v63n0gvcxw/CV-Aremil-actualizado.pdf?rlkey=qnd4k6bo9aql0f4ckbkfc7di6&raw=1';

    const handleButtonClick = () => {
        window.open(cvUrl, '_blank');
      };

  return (
    <motion.div className="about" variants={variants} initial= "initial" ref={ref} animate= {isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I'm dedicated to boosting the success 
                <br /> of your projects</p>
                <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="https://dl.dropboxusercontent.com/scl/fi/hrvqk48tk5wfhfdic8sgw/people.webp?rlkey=2vuevcunep1hep3qims590aaw&dl=0" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Building</motion.b> Solutions
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}> With Code.</motion.b> 
                </h1>
                <button onClick={handleButtonClick}>DOWNLOAD CV</button>
            </div>
        </motion.div>
        <motion.div className="descriptionContainer" variants={variants}>
            <p>Full Stack Software Developer situated in Dominican Republic.
                <br/>
                Passionate about crafting elegant, high-performing applications for the web and mobile.
                <br/>
                Committed to ensuring scalability and delivering exceptional user experiences.
            </p>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor: "lightgray", color: "black"}}>
                <h2>Technologies and Tools</h2>
                
                <ul className="techList">
                    <li className="listItem">JavaScript</li>
                    <li className="listItem">TypeScript</li>
                    <li className="listItem">React</li>
                    <li className="listItem">NodeJS</li>
                    <li className="listItem">Express</li>
                    <li className="listItem">React Native</li>
                    <li className="listItem">MongoDB</li>
                    <li className="listItem">SQL Databases</li>
                    <li className="listItem">Bootstrap</li>
                </ul>  
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
