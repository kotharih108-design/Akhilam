export default function Footer() {
  return (
    <footer className="bg-brandBlue pt-10 pb-4 text-white font-body">

      {/* ROW 1 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-3 md:px-6">

        {/* COLUMN 1: Logo + Description */}
        <div>
          <img
            src="/images/logo/akhilam-logo.png"
            alt="Akhilam Industries"
            className="h-[150px] mb-3 bg-white"
          />
          <p className="text-sm leading-relaxed font-brand mb-3">
            Trusted industrial partner providing reliable crane components, safety systems, and innovative automation solutions.
          </p>
          <h3 className="text-white font-semibold mb-3 text-lg border-b-2">Socialise with us</h3>

            {/* Social Icons */}
            <div className="flex gap-2">



              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa-brands fa-instagram social "></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa-brands fa-facebook social "></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa-brands fa-linkedin social "></i>
              </a>
              <a
                href="https://wa.me/message/4B42WKA3CWKKE1"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <i className="fa-brands fa-whatsapp social "></i>
              </a>

            </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="flex flex-col items-start  font-brand font-semibold">
          <h3 className="text-white border-b-2 w-full text-left font-semibold mb-3 text-lg">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-brandOrange transition"><i class="fa-solid fa-chevron-right mr-3"></i> Home</a></li>
            <li><a href="/about" className="hover:text-brandOrange transition"><i class="fa-solid fa-chevron-right mr-3"></i>About Us</a></li>
            <li><a href="/products" className="hover:text-brandOrange transition"><i class="fa-solid fa-chevron-right mr-3"></i>Products</a></li>
            <li><a href="/gallery" className="hover:text-brandOrange transition"><i class="fa-solid fa-chevron-right mr-3"></i>Gallery</a></li>
            <li><a href="/contact" className="hover:text-brandOrange transition"><i class="fa-solid fa-chevron-right mr-3"></i>Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 2: working */}
        <div className="flex flex-col items-start  font-brand font-semibold">
          <h3 className="text-white border-b-2 w-full text-left font-semibold mb-3 text-lg">Working Hours</h3>
          <ul className="space-y-2">
            <li className="text-sm">Visit us at our factory for a mean cup of Coffee and a fantastic consulting team.</li>
            <li><p className="hover:text-brandOrange transition">Monday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Tuesday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Wednesday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Thursday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Friday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Saturday 9 am > 6 pm</p></li>
            <li><p className="hover:text-brandOrange transition">Sunday Closed</p></li>
          </ul>
        </div>

        {/* COLUMN 3: Contact + Social Media */}
        <div >
          <h3 className="text-white font-semibold mb-3 text-lg border-b-2">Reach Us</h3>

          <div className="flex flex-col gap-4">
            <a href="https://maps.app.goo.gl/xR2eveC552a7iwzU7" target="_blank"
              rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-brandOrange transition durati">
              <i className="fa-solid fa-location-dot border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>
53, Shankheshwar Industrial Park, nr. Vatva Railway Over Bridge Road, Vinoba Bhave Nagar, Dibiyapur, Phase I, Vatva, Ahmedabad, Gujarat 382445</span>
            </a>
            <a href="tel:+91 97129 77761" target="_blank"
              rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-brandOrange transition duration ">
              <i className="fa-solid fa-phone border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>+91 97129 77761</span>
            </a>
            <a href="mailto:akhilamindustries@gmail.com" target="_blank"
              rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-brandOrange transition durati">
              <i className="fa-solid fa-envelope border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>akhilamindustries<br />@gmail.com</span>
            </a>




          </div>

        </div>

      </div>


      {/* ROW 3 — Copyright */}
      <div className="flex flex-col md:flex-row items-center px-8 md:px-14 justify-between text-center text-sm text-white mt-10 border-t border-gray-300 pt-4">
        <div> © {new Date().getFullYear()} <span className="font-brand font-bold hover:text-white text-brandOrange transition duration cursor-pointer"> Akhilam Industries</span> . All rights reserved.</div>
        <div>Developed By <a href="www.apnawebx.com" className="font-brand font-bold hover:text-white text-brandOrange transition duration" target="_blank"
          rel="noopener noreferrer" >APNAWEBX</a></div>
      </div>
    </footer>
  );
}
