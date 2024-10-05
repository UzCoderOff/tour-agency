import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Menu } from "lucide-react";
import { Sidebar } from "primereact/sidebar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(window.screenY < 10);
  const { translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 20) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const href = (id) => {
    setOpen(false);
    window.location.href = id;
  };

  return (
    <div
      className={`w-full fixed top-0 z-50 flex align-middle flex-row  items-center text-center text-white ${
        isTop ? "h-20" : "bg-[#00A651]  h-14"
      } ${isMobile ? "justify-between px-7" : "justify-evenly"}`}
      style={{
        background: isTop && "linear-gradient(to bottom, black, transparent)",
      }}
    >
      <h1 className="font-extrabold text-3xl">Logo</h1>
      {!isMobile ? (
        <>
          <div className="flex flex-row align-middle justify-between gap-5">
            <a href="#">{translations.home}</a>
            <a href="#about-us">{translations.about}</a>
            <a href="#packages">{translations.tour}</a>
            <a href="#contacts">{translations.contacts}</a>
          </div>
          <div className="flex flex-row align-middle justify-between gap-5">
            <a
              href="/en"
              className="flex items-center align-middle justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="En"
                className="w-8 h-8 object-contain "
                title="Change Language: English"
              />
            </a>
            <a
              href="/ru"
              className="flex items-center align-middle justify-center"
            >
              <img
                src="https://img.freepik.com/free-vector/illustration-russia-flag_53876-27016.jpg?t=st=1727954731~exp=1727958331~hmac=846eed384977f9dc8d349956726ba544b24426ee24296372c12458af40fb047e&w=1480"
                alt="Ru"
                className="w-8 h-8 object-contain "
                title="Change Language: Russian"
              />
            </a>
            <a
              href="/uz"
              className="flex items-center align-middle justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                alt="Uz"
                className="w-8 h-8 object-contain "
                title="Change Language: Uzbek"
              />
            </a>
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>
          <Sidebar
            visible={open}
            onHide={() => setOpen(!open)}
            position="right"
            className="bg-[#42ac75] flex flex-col align-middle justify-center p-4 text-white"
          >
            <div className="flex flex-col align-middle justify-between items-center gap-5">
              <a onClick={() => href("#")}>{translations.home}</a>
              <a onClick={() => href("#about-us")}>{translations.about}</a>
              <a onClick={() => href("#packages")}>{translations.tour}</a>
              <a onClick={() => href("#contacts")}>{translations.contacts}</a>
            </div>
            <div className="p-2 divider"></div>
            <div className="flex flex-col align-middle justify-between items-center gap-5">
              <a
                href="/en"
                className={`flex items-center align-middle justify-center ${
                  translations.lang == "en" && "text-[#e1ffbe]"
                }`}
              >
                <span>En</span>
              </a>
              <a
                href="/ru"
                className={`flex items-center align-middle justify-center ${
                  translations.lang == "ru" && "text-[#e1ffbe]"
                }`}
              >
                <span>Ru</span>
              </a>
              <a
                href="/uz"
                className={`flex items-center align-middle justify-center ${
                  translations.lang == "uz" && "text-[#e1ffbe]"
                }`}
              >
                <span>Uz</span>
              </a>
            </div>
          </Sidebar>
        </div>
      )}
    </div>
  );
};

export default Navbar;
