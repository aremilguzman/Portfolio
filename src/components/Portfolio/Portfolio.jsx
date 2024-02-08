import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Cigars Store Web",
        img: "https://dl.dropboxusercontent.com/scl/fi/zlahz04btuqk32mzgv07q/cigars-collage2.jpg?rlkey=vf7dol8qzhvuz6rykk4blwi7v&dl=0",
        desc: "Una tienda de tabaco en línea desarrollada con Node.js, Express y Handlebars. Ofrece a los clientes una experiencia intuitiva para explorar productos, realizar pedidos por correo y conocer la empresa. Destaca por su sección de eventos que permite al administrador compartir imágenes de manera sencilla.",
        code: "https://github.com/aremilguzman/WebAppFullStack"
    },
    {
        id: 2,
        title: "FullPos Logic ",
        img: "https://dl.dropboxusercontent.com/scl/fi/pop6clvfbul28mz2bml6z/sssssss.jpg?rlkey=lpszmc80fv18xemtrn7k1itrh&dl=0",
        desc: "FullPos Logic, una página estática, destaca servicios de software contable y de inventario. La web incluye un menú intuitivo, secciones informativas sobre servicios y la empresa, un formulario de contacto eficiente y un atractivo diseño de footer con efectos visuales.",
        code: "https://github.com/aremilguzman/React-Website"
    },
    {
        id: 3,
        title: "TS-React CRUD",
        img: "https://dl.dropboxusercontent.com/scl/fi/n8au7fymnbc795amx6ps0/crud-collage2.jpg?rlkey=ma0wusk6rjfaljh79higm6tkq&dl=0",
        desc: "Implementación de un sistema CRUD potente y eficiente. Desarrollado con Node, Express, TypeORM, PostgreSQL y React utilizando Bootstrap. Permite gestionar datos de clientes, productos y perfiles con operaciones de agregar, editar, y eliminar. Una solución full-stack que destaca por su facilidad de uso y capacidad de manejo de datos.",
        code: "https://github.com/aremilguzman/React-Mock"
        
    },
    {
        id: 4,
        title: "The Cabra Store ",
        img: "https://dl.dropboxusercontent.com/scl/fi/xkoiqlrw07jc3kzd5ug6k/cabra-collage2.jpg?rlkey=vq6b2x11f54hj9y36sgmf4tix&dl=0",
        desc: "E-commerce emocionante en desarrollo. The Cabra Store promete ser una plataforma única para compras en línea. Estamos trabajando para crear una experiencia de usuario excepcional. ¡Más actualizaciones pronto!",
        code: ""
    }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.code} target="_blank">See Code</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

