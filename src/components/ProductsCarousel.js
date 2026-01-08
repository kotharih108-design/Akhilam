import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../BASEURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ProductsCarouselPremium() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/akhilam/public/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-lg">Loading products...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center py-20">
            <div className="text-red-300 text-lg">Error: {error}</div>
          </div>
        )}

        {/* Swiper Carousel */}
        {!loading && !error && products.length > 0 && (
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
                    src={p.p_image}
                    alt={p.p_name}
                    className="w-full h-56 object-contain mb-4 "
                  />

                  <h3 className="text-center rounded-b-xl bg-brandOrange md:bg-brandGrey text-white font-semibold text-lg p-1 
                   transition duration-200 group-hover:bg-brandOrange">
                    {p.p_name}
                  </h3>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* No Products State */}
        {!loading && !error && products.length === 0 && (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-lg">No products available</div>
          </div>
        )}

        {/* Product Description Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10">
            <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-xl relative">

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-brandOrange text-2xl hover:text-brandBlue transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <h3 className="text-2xl py-2 font-brand font-bold text-brandBlue mb-2 text-center">
                {selectedProduct.p_name}
              </h3>

              <img
                src={selectedProduct.p_image}
                alt={selectedProduct.p_name}
                className="w-full h-52 object-contain mb-4"
              />

              {/* <p className="text-brandGrey leading-relaxed mb-4">
                {selectedProduct.p_description}
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
