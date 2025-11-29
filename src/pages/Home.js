import React from 'react'
import ProductsCarousel from '../components/ProductsCarousel'
import WhyChooseUs from '../components/WhyChooseUs'
import IndustriesWeServe from '../components/IndustriesWeServe';
import { Link } from 'react-router-dom';

const Home = () => {
    const galleryImages = [
    "/images/products/master controller.jpeg",
    "/images/products/anti collission device.jpeg",
    "/images/products/thruster brake.jpeg",
    "/images/products/wireless radio remote 1.jpeg",
  ];

  return (<>
    <section className="relative bg-white">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/10 to-brandOrange/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20 relativee z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: Heading + Text */}
        <div>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-brand font-bold text-brandBlue leading-tight">
            Industrial Crane Components &  
            <span className="text-brandOrange"> Automation Solutions</span>
          </h1>

          <p className="text-brandGrey mt-4 text-lg leading-relaxed">
            Premium quality crane remotes, limit switches, thruster brakes, busbar systems, and safety devices engineered for reliable industrial performance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-5">
            <Link to="/products"
               className="bg-brandBlue text-white px-3 sm:px-6 py-3 rounded-md font-medium hover:bg-brandOrange transition">
              Explore Products
            </Link>

            <Link to="/contact"
               className="border border-brandBlue text-brandBlue px-6 py-3 rounded-md font-medium hover:bg-brandBlue hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="flex justify-center">
          <img
            src="/images/home/hero-home.png"
            alt="Akhilam Industries Products"
            className="w-full max-w-md rounded-xl shadow-lg border border-brandLight"
          />
        </div>

      </div>

    </section>


     <section className="bg-white pt-10 pb-14 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row gap-12 items-center">

        {/* LEFT : Image */}
        <div className="flex justify-center">
          <img
            src="/images/home/about-sec.png"
            alt="Akhilam Industries"
            className="rounded-xl shadow-lg border border-brandLight"
          />
        </div>

        {/* RIGHT : About Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-brandBlue mb-4">
            About <span className="text-brandOrange">Akhilam Industries</span>
          </h2>

          <p className="text-brandGrey text-lg leading-relaxed mb-6">
            Akhilam Industries is a trusted manufacturer of high-quality crane components and
            industrial automation equipment. With a focus on durability, precision, and safety, we deliver
            superior engineering solutions for a wide range of industries.
          </p>

          <p className="text-brandGrey leading-relaxed mb-6">
            From wireless radio remotes and limit switches to thruster brakes, DSL busbar systems,
            festoon systems, and anti-collision devices — our products are designed to meet
            heavy-duty industrial demands with maximum reliability.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 text-brandGrey">
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange"></i>
              Premium Industrial Crane Components
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange"></i>
              Fully Tested & Quality Assured Products
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange"></i>
              Expert Support & Long-Term Reliability
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-brandBlue text-white px-6 py-3 rounded-md font-medium hover:bg-brandOrange transition"
            >
             Get Quote
            </a>
          </div>
        </div>

      </div>
    </section>


<ProductsCarousel />

<WhyChooseUs />


{/* gallery section */}
 <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-brand font-bold text-center text-brandBlue mb-10">
          Product <span className="text-brandOrange">Gallery</span>
        </h2>

        {/* Grid Gallery */}
        <div className="grid  sm:grid-cols-2  md:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group border border-brandLight rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={img}
                alt="Akhilam Product"
                className="w-full h-40 md:h-48 object-contain p-3 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>



    <IndustriesWeServe />

     <section className="relative py-20 bg-brandBlue">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-brand font-bold mb-6">
          Need Industrial Crane Components & Automation Solutions?
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-brandLight">
          Get high-quality remotes, limit switches, brakes, busbars, and safety systems designed for maximum reliability.
        </p>

        <a
          href="/contact"
          className="bg-brandOrange text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brandBlue transition shadow-lg"
        >
          Contact Us Today
        </a>
      </div>
    </section>



    </>
  )
}

export default Home