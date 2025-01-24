import { CardPromo } from "./CardPromo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

import promo6 from "../assets/promos/promo-nov-2.jpg";
import promo7 from "../assets/promos/pago-1.jpg";
import promo8 from "../assets/promos/pago-2.jpg";
import promo9 from "../assets/promos/pago-3.jpg";
import promo10 from "../assets/promos/horizontal.jpg";

const optionsSliderReviews = {
  rewind: true,
  width: "100%",
  perPage: 2,
  perMove: 1,
  padding: "1rem",
  gap: "2rem",
  pagination: false,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoplay: true,
  role: "complementary",
  classes: {
    prev: "splide__arrow--prev class-prev",
    next: "splide__arrow--next class-next",
  },
  breakpoints: {
    767: { perPage: 1 },
    1023: { perPage: 2 },
  },
};

// eslint-disable-next-line react/prop-types
export const Promotions = ({ divRef }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = 768;

  const fotosChanges = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", fotosChanges);

    return () => {
      window.removeEventListener("resize", fotosChanges);
    };
  });
  const infoPromotions = [
    {
      imgSrc: promo7,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo8,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo9,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo7,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo8,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo9,
      alt: "Promoción Buen Fin",
    },
  ];

  return (
    <section
      className="w-full flex justify-center items-center flex-col mt-14 mb-10 md:mt-24 md:mb-20"
      id="promotion"
      ref={divRef}
    >
      <div className="w-full flex justify-center items-center flex-col max-w-7xl px-4">
        <div className="w-full flex justify-center items-center gap-4 lg:gap-8">
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
          <h2 className="text-wrap text-3xl text-center font-bold text-primary uppercase md:text-nowrap lg:text-5xl">
            Promociones de Brackets
          </h2>
          <hr className="w-full border-2 border-primary rounded-lg max-w-96" />
        </div>
        <h3 className="text-base text-justify md:text-xl py-2">
          En la sonrisa ideal tenemos 3 opciones de pago, escoge el que más te
          convenga, aprovecha y transforma tu sonrisa.
        </h3>
        <div className="w-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 ">
          <Splide
            aria-label="My Favorite Images"
            options={optionsSliderReviews}
          >
            {infoPromotions.map((el, i) => (
              <SplideSlide key={i} className="">
                <img
                  src={el.imgSrc}
                  className="w-full max-w-full h-full object-cover"
                  alt={el.alt}
                />
              </SplideSlide>
            ))}
          </Splide>
          <h3 className="text-base text-center md:text-xl py-2">
            ¡Tambien aprovecha nuestra promoción de blanqueamiento!
          </h3>
          <CardPromo
            imgSrc={width < mobile ? promo6 : promo10}
            className="w-full max-w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
