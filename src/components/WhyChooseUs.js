export default function WhyChooseUs() {
  return (
    <section className="relative bg-brandLight pt-20 py-16">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="/mnt/data/A_high-resolution_digital_photograph_and_graphic_c.png"
          alt="Akhilam Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-brand font-bold text-center text-brandBlue mb-12">
          Why <span className="text-brandOrange">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-brandLight hover:shadow-2xl transition">
            <div className="text-brandOrange text-4xl mb-4">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="text-xl font-semibold text-brandBlue mb-3">
              High Quality Products
            </h3>
            <p className="text-brandGrey">
              Every product is tested for durability and reliability to meet heavy industrial demands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-brandLight hover:shadow-2xl transition">
            <div className="text-brandOrange text-4xl mb-4">
              <i className="fa-solid fa-gears"></i>
            </div>
            <h3 className="text-xl font-semibold text-brandBlue mb-3">
              Advanced Engineering
            </h3>
            <p className="text-brandGrey">
              Designed with precision and innovation for maximum performance and safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-brandLight hover:shadow-2xl transition">
            <div className="text-brandOrange text-4xl mb-4">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className="text-xl font-semibold text-brandBlue mb-3">
              Reliable Support
            </h3>
            <p className="text-brandGrey">
              Dedicated team providing guidance, technical support, and after-sales service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
