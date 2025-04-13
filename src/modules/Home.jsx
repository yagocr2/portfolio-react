import React from 'react';
import Carousel from '../components/carousel';
import yo from '../assets/yo.jpg';

const Home = () => {
  const projects = [
    {
      image: <img src={yo} alt="Proyecto 1" />,
      title: "Portfolio React",
      description: "Desarrollo de un portfolio moderno con efectos glassmorphism"
    },
    {
      image: <img src={yo} alt="Proyecto 2" />,
      title: "E-commerce",
      description: "Plataforma de ventas con carrito dinámico"
    },
    // Añade más proyectos...
  ];

  return (
    <section className="home">
      <h1>Mis Proyectos</h1>
      <Carousel items={projects} />
    </section>
  );
};

export default Home;

