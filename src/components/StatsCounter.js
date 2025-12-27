import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Total Products", value: 120, icon: "fa-box" },
  { label: "Certifications", value: 15, icon: "fa-certificate" },
  { label: "Awards Won", value: 25, icon: "fa-trophy" },
  { label: "Happy Clients", value: 500, icon: "fa-smile" },
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(
    statsData.map(() => 0)
  );

  useEffect(() => {
    const intervals = statsData.map((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 20);

      return setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });

        if (start >= end) clearInterval(intervals[index]);
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-brandBlue py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {statsData.map((item, index) => (
            <div key={index} className="space-y-3 border border-brandOrange py-8 rounded-xl
             bg-brandBlue/80 hover:bg-brandOrange transition durationcursor-pointer">
              <i className={`fa-solid ${item.icon} text-4xl text-brandOrange`}></i>
              <h2 className="text-4xl font-bold">{counts[index]}+</h2>
              <p className="uppercase tracking-wide text-sm text-gray-200">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
