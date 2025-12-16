
import Breadcrumb from '../components/Breadcrumb'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_ee2hugz",
      "template_30ul3wm",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      "MmO--L7IF2RZe3SHg"
    )
    .then((result) => {
      setMessage('Message sent successfully!')
      setMessageType('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setLoading(false)
    }, (error) => {
      setMessage('Failed to send message. Please try again.')
      setMessageType('error')
      setLoading(false)
    })
  }
  return (<>
  
      <Breadcrumb />
    <section className="bg-white py-16 px-6 md:px-10">
       {/* Title */}
        <h2 className="text-4xl md:text-5xl font-brand font-bold text-center text-brandBlue mb-14">
          Direct <span className="text-brandOrange">Contact Us</span>
        </h2>


      {/* ROW 1 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT COLUMN — CTA BUTTONS */}
        <div className="space-y-6">

          {/* Phone CTA */}
          <a
            href="tel:+91 97129 77761"
            className="flex items-center gap-4 bg-brandBlue text-white px-6 py-4 rounded-lg shadow hover:bg-brandOrange transition"
          >
            <i className="fa-solid fa-phone text-2xl"></i>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-sm opacity-80">+91 97129 77761</p>
            </div>
          </a>

          {/* Phone CTA */}
          <a
            href="tel:+91 90161 95212"
            className="flex items-center gap-4 bg-brandBlue text-white px-6 py-4 rounded-lg shadow hover:bg-brandOrange transition"
          >
            <i className="fa-solid fa-phone text-2xl"></i>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-sm opacity-80">+91 90161 95212</p>
            </div>
          </a>

          {/* Email CTA */}
          <a
            href="mailto:akhilamindustries@gmail.com"
             target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-brandBlue text-white px-6 py-4 rounded-lg shadow hover:bg-brandOrange transition"
          >
            <i className="fa-solid fa-envelope text-2xl"></i>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-sm opacity-80">akhilamindustries@gmail.com</p>
            </div>
          </a>

          {/* Address CTA */}
          <a
            href="https://maps.app.goo.gl/VvU6xaaetnm4utsm6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-brandBlue text-white px-6 py-4 rounded-lg shadow hover:bg-brandOrange transition"
          >
            <i className="fa-solid fa-location-dot text-2xl"></i>
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-sm opacity-80">53, Shankheshwar Industrial Park, nr. Vatva Railway Over Bridge Road, Vinoba Bhave Nagar, Dibiyapur, Phase I, Vatva, Ahmedabad, Gujarat 382445</p>
            </div>
          </a>

          <div>
            <img src='/images/contact/contact.png' alt='Industrial Services in Vatva Ahmedabad - Contact Akhilam Industries' ></img>
          </div>

        </div>

        {/* RIGHT COLUMN — FORM */}
        <div className="bg-brandLight p-5 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-brand text-brandBlue font-bold mb-1">
            Send us a Message
          </h3>
          
        <p className='mb-4 font-brand text-brandBlue'>We’re here to help. Connect with us for any product inquiry or support.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div>
              <label className="block text-brandOrange text-xl mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-brandOrange rounded-md focus:outline-none focus:ring-1 focus:border-brandBlue"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-brandOrange text-xl mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border  border-brandOrange rounded-md focus:outline-none focus:ring-2 focus:border-brandBlue"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-brandOrange text-xl mb-1 font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border  border-brandOrange rounded-md focus:outline-none focus:ring-2 focus:border-brandBlue"
                placeholder="Enter your phone"
                required
              />
            </div>

            <div>
              <label className="block text-brandOrange text-xl mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border  border-brandOrange rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:border-brandBlue"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-brandBlue text-white px-6 py-3 w-full rounded-md font-semibold hover:bg-brandOrange transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </div>

      </div>

      {/* ROW 2 — MAP */}
      <div className="max-w-7xl mx-auto mt-16 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Akhilam Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6714345223313!2d72.6332583!3d22.9623246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e89d10a5330d5%3A0x40a1359c5e830f3f!2sAkhilam%20Industries!5e0!3m2!1sen!2sin!4v1764063546456!5m2!1sen!2sin"
          className="w-full h-[350px] md:h-[450px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>

    {/* Modal */}
    {message && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
          <div className={`text-center ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            <i className={`fa-solid ${messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'} text-4xl mb-4`}></i>
            <p className="text-lg font-semibold mb-4">{message}</p>
            <button
              onClick={() => setMessage('')}
              className="bg-brandBlue text-white px-4 py-2 rounded-md hover:bg-brandOrange transition"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
