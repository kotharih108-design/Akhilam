import React from 'react'

const Home = () => {
  return (<>
    <section className="relativee bg-white">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/10 to-brandOrange/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20 relativee z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: Heading + Text */}
        <div>
          <h1 className="text-4xl md:text-3xl lg:text-5xl font-brand font-bold text-brandBlue leading-tight">
            Industrial Crane Components &  
            <span className="text-brandOrange"> Automation Solutions</span>
          </h1>

          <p className="text-brandGrey mt-4 text-lg leading-relaxed">
            Premium quality crane remotes, limit switches, thruster brakes, busbar systems, and safety devices engineered for reliable industrial performance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-5">
            <a href="/products"
               className="bg-brandBlue text-white px-3 sm:px-6 py-3 rounded-md font-medium hover:bg-brandOrange transition">
              Explore Products
            </a>

            <a href="/contact"
               className="border border-brandBlue text-brandBlue px-6 py-3 rounded-md font-medium hover:bg-brandBlue hover:text-white transition">
              Contact Us
            </a>
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


     <section className="bg-white pt-6 pb-14 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row gap-12 items-center">

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


    </>
  )
}

export default Home