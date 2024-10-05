import { Bed, Navigation, Ticket } from "lucide-react";
import React from "react";
import { useLanguage } from "../LanguageContext";

const OurService = () => {
  const { translations } = useLanguage();

  const services = [
    {
      title: translations.os.f.t,
      description: translations.os.f.d,
      icon: <Ticket color="#32df8f" size={40} />,
    },
    {
      title: translations.os.s.t,
      description: translations.os.s.d,
      icon: <Bed color="#00b8e0" size={40} />,
    },
    {
      title: translations.os.t.t,
      description: translations.os.t.d,
      icon: <Navigation color="#e48b78" size={40} />,
    },
  ];

  return (
    <div id="about-us" className="py-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-8">{translations.os.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-[8%]">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
