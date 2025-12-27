import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

import WhyChooseUs from '../components/WhyChooseUs'
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';
import ClientsSection from '../components/ClientsSection';
import IndustriesWeServe from '../components/IndustriesWeServe';

const About = () => {
  return (<>
    <Breadcrumb />

    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

      

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-brand font-bold text-brandBlue mb-4">
            About <span className="text-brandOrange">Akhilam Industries Ahmedabad</span>
          </h2>

          <p className="text-brandGrey text-lg leading-relaxed mb-6">
            Akhilam Industries is a trusted manufacturer of high-quality crane components
            and industrial automation equipment. Located in Vatva, Ahmedabad, we are the best industrial company in Ahmedabad, delivering durable, precision-engineered
            solutions that meet the demands of heavy-duty industrial operations.
          </p>

          <p className="text-brandGrey leading-relaxed mb-6">
            Our expertise includes wireless radio remotes, rotary limit switches,
            thruster brakes, DSL busbars, festoon systems, and anti-collision devices —
            all designed to improve performance, safety, and efficiency. As an industrial supplier in Vatva Ahmedabad, we provide industrial fabrication services Ahmedabad.
          </p>

          <h3 className="text-xl font-semibold text-brandBlue mb-3">Our Key Features</h3>
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

          <div className="mt-8">

            <Link to="/products"
              className="bg-brandBlue text-white px-3 sm:px-6 py-3 rounded-md font-medium hover:bg-brandOrange transition">
              Explore Products
            </Link>
          </div>

         

        </div>
          {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/home/about-sec.png"
            alt="Akhilam Industries Ahmedabad - Industrial Manufacturer in Vatva"
            className="rounded-xl shadow-lg border border-brandLight md:h-[500px] lg:h-full"
          />
        </div>

      </div>

       <div className="mt-6 px-6 md:px-12 text-brandGrey font-body">
            <p>Akhilam Industries delivers reliable, high-quality crane components and automation solutions designed for demanding industrial environments. Our products ensure safety, performance, and durability, supporting seamless operations across manufacturing, infrastructure, logistics, and material-handling sectors.</p> 

            <br />

            <p>We specialize in wireless remotes, limit switches, thruster brakes, busbar systems, festoon systems, and anti-collision devices. With strong technical expertise and customer commitment, we provide trusted engineering solutions tailored to modern industrial requirements.</p>
          </div>
    </section>


    {/* mission & Vission */}
    <section className="bg-brandLight py-16">
        <h2 className="text-4xl font-bold font-brand text-start md:text-center pb-14 px-6">Our <span className="text-brandBlue">Mission &</span>  <span className="text-brandOrange">Vission</span></h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">


        {/* Mission */}
        <div className="bg-white p-8 shadow rounded-xl border-l-4 border-brandBlue">
          <h3 className="text-2xl font-brand font-bold text-brandBlue mb-3">
            Our Mission
          </h3>
          <p className="text-brandGrey leading-relaxed">
            To deliver durable, safe, and innovative crane components that
            support industrial growth and ensure seamless operations for our clients.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 shadow rounded-xl border-l-4 border-brandOrange">
          <h3 className="text-2xl font-brand font-bold text-brandOrange mb-3">
            Our Vision
          </h3>
          <p className="text-brandGrey leading-relaxed">
            To become a globally recognized leader in industrial automation,
            known for quality, reliability, and engineering excellence.
          </p>
        </div>

      </div>
    </section>

    <WhyChooseUs />

    <StatsCounter />

    <ClientsSection />

    <IndustriesWeServe />


    {/* big CTA */}
     <section className="relative py-20 bg-brandBlue">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-brand font-bold mb-6">
          Need Industrial Manufacturing Services Ahmedabad?
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-brandLight">
          Get high-quality remotes, limit switches, brakes, busbars, and safety systems designed for maximum reliability. Contact the reliable industrial services in Ahmedabad.
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

export default About