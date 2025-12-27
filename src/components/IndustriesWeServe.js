export default function IndustriesWeServe() {
  const industries = [
    { title: "Heavy Industries", img: "/images/industries/heavy.jpg" },
    { title: "Steel & Rolling Mills", img: "/images/industries/steel.jpg" },
    { title: "Crane Manufacturer", img: "/images/industries/crane.jpg" },
    { title: "Paper & Pulp Industry", img: "/images/industries/paper.jpg" },
    { title: "Mining Industry", img: "/images/industries/mining.jpg" },
    { title: "Power Plants", img: "/images/industries/power.jpg" },
    { title: "Port & Shipyard", img: "/images/industries/port.jpg" },
    { title: "Foundry & Forging", img: "/images/industries/foundry.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlue mb-12">
          Industries We Cater To
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group text-center transition"
            >
              {/* Image Card */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm md:text-base font-semibold text-brandBlue">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
