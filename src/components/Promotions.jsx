import { CardPromo } from "./CardPromo";

import promo5 from "../assets/promos/promo-nov-1.jpg";
import promo6 from "../assets/promos/promo-nov-2.jpg";
import promo7 from "../assets/promos/promo-nov-3.jpg";
import promo8 from "../assets/promos/promo-nov-4.jpg";

import { TitleSection } from "./TitleSection";

// eslint-disable-next-line react/prop-types
export const Promotions = ({ divRef }) => {
  const infoPromotions = [
    {
      imgSrc: promo5,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo6,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo7,
      alt: "Promoción Buen Fin",
    },
    {
      imgSrc: promo8,
      alt: "Promoción diagnostico de continuidad de ortodoncia",
    },
  ];

  return (
    <section
      className="w-full flex justify-center items-center flex-col mt-14 mb-10 md:mt-24 md:mb-20"
      id="promotion"
      ref={divRef}
    >
      <div className="w-full flex justify-center items-center flex-col max-w-7xl px-4">
        <TitleSection title="Promociones" />
        <div className="w-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {infoPromotions.map((item, i) => (
            <CardPromo key={i} imgSrc={item.imgSrc} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
