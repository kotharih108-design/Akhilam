export default function ContactWhyChoose() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-brandLight">
          <h2 className="text-2xl font-brand font-bold text-brandBlue mb-4">
            Get In Touch
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            ></textarea>

            <button
              type="submit"
              className="bg-brandBlue text-white px-6 py-2 rounded-md hover:bg-brandOrange transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - WHY CHOOSE US */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-brandLight">
          <h2 className="text-2xl font-brand font-bold text-brandBlue mb-6">
            Why Choose Akhilam Industries
          </h2>

          <ul className="space-y-5">
            <li className="flex gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange text-xl"></i>
              <p className="text-brandGrey">
                High-quality industrial products built for long-term performance.
              </p>
            </li>

            <li className="flex gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange text-xl"></i>
              <p className="text-brandGrey">
                Trusted by clients across multiple industries.
              </p>
            </li>

            <li className="flex gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange text-xl"></i>
              <p className="text-brandGrey">
                Advanced technology with safety-focused design.
              </p>
            </li>

            <li className="flex gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange text-xl"></i>
              <p className="text-brandGrey">
                Custom solutions tailored to your requirements.
              </p>
            </li>

            <li className="flex gap-3">
              <i className="fa-solid fa-circle-check text-brandOrange text-xl"></i>
              <p className="text-brandGrey">
                Dedicated support and fast response service.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
