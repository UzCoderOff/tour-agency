import React from "react";
import { useLanguage } from "../LanguageContext";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { translations } = useLanguage();

  return (
    <div className="relative py-16 bg-gray-50" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
          {translations.reserve.book}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {translations.reserve.choose}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Phone className="text-primary w-12 h-12 p-2 bg-gray-100 rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {translations.reserve.phone_number}
            </h2>
            <a
              href="tel:+998992999996"
              className="text-primary hover:underline"
            >
              +998 99 299 99 96
            </a>
          </div>

          {/* Email Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <Mail className="text-primary w-12 h-12 p-2 bg-gray-100 rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {translations.reserve.email_us}
            </h2>
            <a
              href="mailto:zamonbiznestour@mail.ru"
              className="text-primary hover:underline"
            >
              zamonbiznestour@mail.ru
            </a>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <MapPin className="text-primary w-12 h-12 p-2 bg-gray-100 rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {translations.reserve.visit_us}
            </h2>
            <p className="text-primary">{translations.reserve.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
