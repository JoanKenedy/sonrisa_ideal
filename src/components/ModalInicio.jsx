import { CardPromo } from "./CardPromo";
import promoBuenFin from "../assets/promos/promo-nov-2.jpg";

export function ModalInicio({ closeModal }) {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      id="modal-inicio"
      className="fixed z-50 w-full h-full flex items-center justify-center"
    >
      <div className="flex flex-col relative  h-[90%] bg-white rounded-lg     w-[90%] md:w-[40%]">
        <button
          className="absolute top-2 right-4 text-2xl"
          onClick={closeModal}
        >
          X
        </button>
        <CardPromo imgSrc={promoBuenFin} alt={"Promo buen fin"} />
      </div>
    </div>
  );
}
