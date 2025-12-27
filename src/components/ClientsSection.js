import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ClientsSection() {
  const clients = [
    "/images/clients/1.png",
    "/images/clients/2.png",
    "/images/clients/3.png",
    "/images/clients/4.png",
    "/images/clients/5.png",
    "/images/clients/6.jpg",
    "/images/clients/7.png",
    "/images/clients/8.jpg",
    "/images/clients/9.jpg",
    "/images/clients/10.png",
    "/images/clients/11.jpg",
    "/images/clients/12.jpg",
    "/images/clients/13.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-brandBlue mb-10">
          Our Trusted Clients
        </h2>

        {/* TOP SLIDER (LEFT TO RIGHT) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mb-10"
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-32 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM SLIDER (RIGHT TO LEFT) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-32 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
