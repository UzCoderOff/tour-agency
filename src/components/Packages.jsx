import React from "react";
import { useLanguage } from "../LanguageContext";
import { MapPin } from "lucide-react";

const Packages = () => {
  const { translations } = useLanguage();

 

  return (
    <div id="packages" className="py-14 bg-gray-50 px-[8%]">
      <h1 className="text-center font-bold text-4xl py-9">
        {translations.bestPackages}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {translations.Cities.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform"
          >
            <img
              src={i.image}
              alt={i.city}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">{i.day}</h2>
                <p className="text-lg font-semibold">{i.price}</p>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {i.desc}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">{i.country}</p>
                </div>
                <a
                  href="#contacts"
                  className="text-blue-500 text-sm underline hover:text-blue-600"
                >
                  {translations.km}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
