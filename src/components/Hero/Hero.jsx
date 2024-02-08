import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion';


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    }
};

const sliderVariants = {
    initial: {
        x: 0,   
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants = {textVariants} initial= "initial" animate= "animate">
                <motion.h2 variants = {textVariants}>HECTOR GUZMAN</motion.h2>
                <motion.h1 variants = {textVariants}>Full Stack Software Developer</motion.h1>
                <motion.div variants = {textVariants} className="buttons">              
                    <motion.a href="#Portfolio"variants = {textVariants}>See the Latest Works</motion.a>
                    <motion.a href="#Contact"variants = {textVariants}>Contact Me</motion.a>
                </motion.div>
                <motion.img variants = {textVariants} animate="scrollButton" src="https://dl.dropboxusercontent.com/scl/fi/qb1zfoqlw6fa9i5tyvin9/scroll.png?rlkey=lmzrjb9riez9miqvy0fp95lot&dl=0" alt="Scroll icono" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Dream Builder
        </motion.div>
        <div className="imageContainer">
            <img src="https://dl.dropboxusercontent.com/scl/fi/vl5k944vqabs39j6waqix/veremos2.png?rlkey=oy5y8v5p0h7iy9bvmwxq8g2w3&dl=0" alt="Hero img" />
        </div>
    </div>
  )
}
