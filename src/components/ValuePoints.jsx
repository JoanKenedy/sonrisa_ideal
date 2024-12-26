import { useEffect, useState } from "react";
import Foto from "../assets/promos/woman-dentist.webp";

import { IoIosArrowDown } from "react-icons/io";
export const ValuePoints = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const PREGUNTAS = [
    {
      id: 1,
      pregunta: "Servicios Especializados:",
      respuesta:
        "Nos especializamos en ortodoncia (brackets) y ortopedia maxilar, ofreciendo tratamientos personalizados para corregir irregularidades dentales y mejorar la función y apariencia de la sonrisa.",
    },
    {
      id: 2,
      pregunta: "Equipo Calificado y Tecnología Avanzada:",
      respuesta:
        "Contamos con un equipo de profesionales altamente calificados y utilizamos tecnología de vanguardia para garantizar tratamientos de calidad y resultados óptimos para nuestros pacientes.",
    },
    {
      id: 3,
      pregunta: "Atención Integral para Todas las Edades:",
      respuesta:
        "Ofrecemos atención dental integral para pacientes de todas las edades, asegurando que cada miembro de la familia reciba el cuidado adecuado según sus necesidades.",
    },
    {
      id: 4,
      pregunta: "Presencia en Redes Sociales:",
      respuesta:
        "Mantenemos una presencia activa en plataformas como Facebook e Instagram, donde compartimos información sobre nuestros servicios, promociones y consejos de salud dental, facilitando la comunicación y el acceso a información relevante para nuestros pacientes.",
    },
  ];
  return (
    <section
      className="w-full flex justify-center items-center flex-col mt-14 mb-10 md:mt-24 md:mb-20"
      id="puntosValor"
    >
      <div className="w-full flex justify-center items-center flex-col max-w-7xl px-4">
        <div className="w-full flex justify-center items-center gap-4 lg:gap-8">
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
          <h2 className="text-wrap text-3xl text-center font-bold text-primary uppercase md:text-nowrap lg:text-5xl">
            Puntos de valor
          </h2>
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
        </div>
        <h3 className="text-base text-justify md:text-xl pt-8 pb-4">
          La Sonrisa Ideal somos una clínica dental que ofrece una variedad de
          servicios especializados para mejorar la salud y la estética dental de
          nuestros pacientes. Consideramos que los siguientes puntos de valor,
          nos hacen destacar como clínica.
        </h3>
        <div className="container-values-point md:grid md:grid-cols-2 max-w-6xl">
          <div className="item-values-point hidden  md:flex md:justify-center md:items-center md:flex-co">
            <img src={Foto} alt="" className="max-[100%] md:h-[370px]" />
          </div>
          <div className="item-values-point md:flex md:justify-center md:items-center md:flex-col">
            {PREGUNTAS.map((item, i) => (
              <div className="w-full ">
                <div
                  className="flex w-full question bg-gradient-to-r from-primaryBlue to-blue-600 justify-between items-center text-sm md:text-base cursor-pointer  p-4 rounded-lg"
                  onClick={() => toogle(i)}
                >
                  <p className="text-white text-base">{item.pregunta}</p>
                  <IoIosArrowDown
                    className={`${
                      selected == i ? "rotate-180" : "rotate-0"
                    } duration-500 text-lg text-white `}
                  />
                </div>
                <p
                  className={`${
                    selected == i ? "efecto " : "respuesta  "
                  } w-full text-base   mt-2  text-justify px-2`}
                >
                  {item.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-base text-justify md:text-xl pt-3">
          Estos puntos nos hacen una opción destacada para quienes buscan
          mejorar su salud bucal y lograr una sonrisa estética y funcional.
        </h3>
      </div>
    </section>
  );
};
