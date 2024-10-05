import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-2xl font-bold">Travel Goo</h1>
            <p className="text-gray-500">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>
        </div>
        <div className="mt-8  pt-4 text-center text-gray-400">
          <p>All rights reserved @travelgoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
