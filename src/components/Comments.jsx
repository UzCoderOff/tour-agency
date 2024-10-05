import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Avatar } from "primereact/avatar";
import { useLanguage } from "../LanguageContext";

const Comments = () => {
  const { translations } = useLanguage();

  return (
    <div className="px-[8%] py-5">
      <h1 className="text-center font-bold text-3xl py-10">
        {translations.commentsHeader}
      </h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {translations.comments.map((comment, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="relative w-full md:w-[70%] h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${comment.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-5">
                <Avatar
                  image={comment.image}
                  size="xlarge"
                  shape="circle"
                  className="mb-5 border-2 border-white h-28 w-28"
                />
                <p className="text-white text-base md:text-lg text-center max-w-xl">
                  {comment.comment}
                </p>
                <p className="text-white font-semibold mt-2 text-sm md:text-base">
                  ~ {comment.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
