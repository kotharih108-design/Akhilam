import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactWhyChoose() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        "service_ee2hugz",
        "template_30ul3wm",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        "MmO--L7IF2RZe3SHg"
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-brandLight">
          <h2 className="text-2xl font-brand font-bold text-brandBlue mb-4">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-brandBlue"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-brandBlue text-white px-6 py-2 rounded-md hover:bg-brandOrange transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Submit Enquiry'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">
                Sorry, there was an error sending your message. Please try again.
              </p>
            )}
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
