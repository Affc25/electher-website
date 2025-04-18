import "swiper/css";
import "swiper/css/autoplay"; // Important to import if needed
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PrevIcon from "@/public/svg/arrow_left_icon.svg";
import NextIcon from "@/public/svg/arrow_right_icon.svg";

const GallerySection = () => {
  return (
    <section className="px-6 md:px-28 bg-[#f5f5f54d] flex flex-col items-center py-20 w-full">
      <div className="max-w-3xl flex flex-col items-center mb-12 text-center">
        <h3 className="uppercase font-inter font-bold text-affc-pink text-sm mb-4">
          Gallery
        </h3>
        <h4 className="text-3xl md:text-4xl font-semibold mb-6">
          AFFC in Action
        </h4>
        <p className="text-lg font-inter text-[#1b1c23cc]">
          Glimpses of our events, workshops, and the vibrant community of African female founders.
        </p>
      </div>

      {/* Gallery Slider */}
      <div className="relative w-full px-20 h-[500px]">
        {/* Custom Nav Buttons */}
        <div className="absolute bg-white p-[6px] rounded-full top-1/2 -translate-y-1/2 left-24 z-20 cursor-pointer swiper-button-prev-custom">
          <PrevIcon />
        </div>
        <div className="absolute bg-white p-[6px] rounded-full top-1/2 -translate-y-1/2 right-24 z-20 cursor-pointer swiper-button-next-custom">
          <NextIcon />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          speed={1200}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          className="h-full w-full rounded-xl overflow-hidden"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} className="relative h-[500px] flex items-center justify-center">
              {/* Background Image */}
              <Image
                src="/images/header_img.png"
                alt="gallery image"
                fill
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-affc-gray/60 to-transparent z-10" />
              
              {/* Text on top */}
              <span className="z-20 absolute bottom-6 left-4 font-inter text-white font-bold text-lg">
                AFFC Networking Event
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
