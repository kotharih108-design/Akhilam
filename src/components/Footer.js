export default function Footer() {
  return (
    <footer className="bg-brandLight pt-10 pb-4 text-brandGrey font-body">

      {/* ROW 1 */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-3 md:px-6">

        {/* COLUMN 1: Logo + Description */}
        <div>
          <img
            src="/images/logo/akhilam-logo.png"
            alt="Akhilam Industries"
            className="h-[150px] mb-3"
          />
          <p className="text-sm leading-relaxed font-brand">
            Trusted industrial partner providing reliable crane components, safety systems, and innovative automation solutions.
          </p>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="flex flex-col items-start md:items-center font-brand font-semibold">
          <h3 className="text-brandBlue font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-brandOrange transition">Home</a></li>
            <li><a href="/about" className="hover:text-brandOrange transition">About Us</a></li>
            <li><a href="/products" className="hover:text-brandOrange transition">Products</a></li>
            <li><a href="/gallery" className="hover:text-brandOrange transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-brandOrange transition">Contact</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Contact + Social Media */}
        <div >
          <h3 className="text-brandBlue font-semibold mb-3 text-lg">Contact Us</h3>

          <div className="flex flex-col gap-4">
            
          <a href="tel:+91 99984 88480" target="_blank"
              rel="noopener noreferrer" className="text-brandGrey flex items-center gap-2 hover:text-brandOrange transition duration ">
              <i className="fa-solid fa-phone border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>+91 99984 88480</span>
            </a>
            <a href="mailto:support@apnawebx.com" target="_blank"
              rel="noopener noreferrer" className="text-brandGrey flex items-center gap-2 hover:text-brandOrange transition durati">
              <i className="fa-solid fa-envelope border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>support@apnawebx.com</span>
            </a>
            <a href="https://maps.app.goo.gl/xR2eveC552a7iwzU7" target="_blank"
              rel="noopener noreferrer" className="text-brandGrey flex items-center gap-2 hover:text-brandOrange transition durati">
              <i className="fa-solid fa-location-dot border rounded-full border-brandGrey hover:border-brandOrange py-[10px] p-2 w-10"></i>
              <span>Ahmedabad, Gujarat</span>
            </a>

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
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <i className="fa-brands fa-twitter social "></i>
            </a>
            
            </div>
            
          </div>

        </div>

      </div>

      {/* ROW 2 — Image Strip */}
      <div className="max-w-7xl mx-auto mt-10 md:px-6 px-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/images/products/wireless radio remote 2.jpeg" className="h-[150px] md:h-[250px] w-full object-cover rounded" />
          <img src="/images/products/thruster brake.jpeg" className="h-[150px] md:h-[250px] w-full object-cover rounded" />
          <img src="/images/products/master controller.jpeg" className="h-[150px] md:h-[250px] w-full object-cover rounded" />
          <img src="/images/products/anti collission device.jpeg" className="h-[150px] md:h-[250px] w-full object-cover rounded" />
        </div>
      </div>

      {/* ROW 3 — Copyright */}
      <div className="flex flex-col md:flex-row items-center px-8 md:px-14 justify-between text-center text-sm text-brandGrey mt-10 border-t border-gray-300 pt-4">
       <div> © {new Date().getFullYear()} <span className="font-brand font-bold text-brandBlue hover:text-brandOrange transition duration cursor-pointer"> Akhilam Industries</span> . All rights reserved.</div>
       <div>Developed By <a href="www.apnawebx.com" className="font-brand font-bold text-brandBlue hover:text-brandOrange transition duration" target="_blank"
              rel="noopener noreferrer" >APNAWEBX</a></div>
      </div>
    </footer>
  );
}
