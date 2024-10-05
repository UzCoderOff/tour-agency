import React from "react";
import { useLanguage } from "../LanguageContext";

const Face = () => {
  const { translations } = useLanguage();

  return (
    <div
      className="w-full h-[70vh] md:h-[90vh] flex align-middle justify-center items-center relative"
      style={{
        backgroundImage: `url('https://zamontour.uz/assets/images/japan.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div className="text-white text-center">
        <h1 className=" font-bold text-4xl md:text-5xl">{translations.banner.title}</h1>
        <p className=" max-w-[568px] font-thin text-xs md:text-base pt-4 pb-7">
        {translations.banner.description}
        </p>
        <a href="#" className="bg-[#00A651] rounded-[10px] px-4 py-2 ">
          {translations.banner.explore}
        </a>
      </div>
      <div
        className="absolute bottom-0 w-full h-[5vh]"
        style={{
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      ></div>
    </div>
  );
};

export default Face;
