import { CardPromo } from "./CardPromo";

import promo6 from "../assets/promos/promo-nov-2.jpg";

import { TitleSection } from "./TitleSection";

// eslint-disable-next-line react/prop-types
export const Promotions = ({ divRef }) => {
  const infoPromotions = [
    {
      imgSrc: promo6,
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
        <TitleSection title="Promociones" />
        <div className="w-full mt-4 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 ">
          {infoPromotions.map((item, i) => (
            <CardPromo key={i} imgSrc={item.imgSrc} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
