import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsCarouselPremium() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Wireless Radio Remote",
      desc: "Industrial-grade wireless remote control with long-range, multi-channel communication and rugged enclosure.",
      image: "/images/products/wireless radio remote 1.jpeg ",
    },
    {
      name: "Master Controller",
      desc: "Reliable and durable master controller used in cranes for smooth operation and accurate control.",
      image: "/images/products/master controller.jpeg",
    },
    {
      name: "Rotary Gear Limit Switch",
      desc: "Heavy-duty limit switch for accurate position detection in hoisting mechanisms and cranes.",
      image: "/images/products/rotary gear limit switch.jpeg",
    },
    {
      name: "Thruster Brake",
      desc: "High performance thruster brake designed for industrial cranes, ensuring reliable stopping power.",
      image: "/images/products/thruster brake.jpeg",
    },
  ];

  return (
    <section className="bg-whitee pt-10">
      {/* <div className="max-w-7xl mx-auto px-6"> */}

      <div
        className=" group relative py-10 px-6 md:px-12 shadow cursor-pointer overflow-hidden bg-brandBlue"
      // style={{ backgroundImage: "url('/images/home/hero-home.png')", backgroundSize: "cover" }}
      >

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 group-hover:bg-black/60 transition"></div> */}

        {/* Heading */}
        <h2 className="relative z-10 text-3xl md:text-4xl font-brand font-bold text-center text-white mb-10">
          Our <span className="text-brandOrange">Products</span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            540: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div
                className="group bg-white border border-brandOrange rounded-xl shadow hover:shadow-xl cursor-pointer transition"
                onClick={() => setSelectedProduct(p)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-contain mb-4 "
                />

                <h3 className="text-center rounded-b-xl bg-brandOrange md:bg-brandGrey text-white font-semibold text-lg p-1 
                 transition duration-200 group-hover:bg-brandOrange">
                  {p.name}
                </h3>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Product Description Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10">
            <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl relative">

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-brandOrange text-2xl"
                onClick={() => setSelectedProduct(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <h3 className="text-2xl py-2 font-brand font-bold text-brandBlue mb-2 text-center">
                {selectedProduct.name}
              </h3>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-52 object-contain mb-4"
              />




              {/* <p className="text-brandGrey leading-relaxed mb-4">
                {selectedProduct.desc}
              </p> */}

              <Link
                to="/contact"
                className="flex justify-center bg-brandBlue text-white px-5 py-2 rounded-md hover:bg-brandOrange transition"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
