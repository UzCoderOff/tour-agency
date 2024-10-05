import { Calendar, BarChart, MapPin, History } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const ServiceStats = () => {
  const { translations } = useLanguage();

  const statsData = [
    {
      icon: <Calendar className="w-10 h-10 mx-auto text-green-600 mb-4" />,
      value: "15+",
      label: translations.ss.ys,
    },
    {
      icon: <BarChart className="w-10 h-10 mx-auto text-green-600 mb-4" />,
      value: "15k+",
      label: translations.ss.ht,
    },
    {
      icon: <MapPin className="w-10 h-10 mx-auto text-green-600 mb-4" />,
      value: "650+",
      label: translations.ss.pv,
    },
    {
      icon: <History className="w-10 h-10 mx-auto text-green-600 mb-4" />,
      value: "2k+",
      label: translations.ss.th,
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-[8%]">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          {translations.ss.title}
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg">
          {translations.ss.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-5 text-center"
          >
            {stat.icon}
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStats;
