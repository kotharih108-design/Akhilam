export default function IndustriesWeServe() {
  const items = [
    { icon: "fa-industry", title: "Manufacturing Plants" },
    { icon: "fa-building", title: "Warehouses" },
    { icon: "fa-truck-ramp-box", title: "Material Handling" },
    { icon: "fa-ship", title: "Ports & Logistics" },
    { icon: "fa-bolt", title: "Power Plants" },
    { icon: "fa-hammer", title: "Construction Sites" },
  ];

  return (
    <section className="bg-brandLight py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        <h2 className="text-3xl md:text-4xl font-brand font-bold text-brandBlue mb-10">
          Industries <span className="text-brandOrange">We Serve</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 border rounded-xl shadow hover:shadow-lg transition bg-white"
            >
              <i className={`fa-solid ${item.icon} text-4xl text-brandOrange mb-4`}></i>
              <h3 className="text-xl font-semibold text-brandBlue">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
