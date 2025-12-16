import { useState, useEffect } from "react";
import Breadcrumb from '../components/Breadcrumb'
import BASE_URL from '../BASEURL.js';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/akhilam/public/gallery`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching gallery:', error));
  }, []);

  return (<>
    <Breadcrumb />
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-brand font-bold text-center text-brandBlue mb-10">
          Factory in Vatva GIDC - Our <span className="text-brandOrange">Gallery</span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(img)}
              
            >
              <div className="relative" style={{ backgroundImage: "url('/images/logo/akhilam-logo.png')", backgroundSize: "cover" }}>

              <div className="absolute inset-0 bg-white/95 group-hover:bg-black/80 transition group-hover:scale-105  rounded-lg"></div>

              <img
                src={img.image}
                alt={img.i_title}
                className="relative z-10 w-full h-40 object-contain border border-brandBlue hover:border-brandOrange rounded-lg p-3 shadow 
                transition-transform duration-300 group-hover:scale-105"
                />
                </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[10000]"
           onClick={() => setSelectedImage(null)} >

            {/* Modal Box */}
            <div className="bg-white rounded-lg p-5 m-2 max-w-lg w-full shadow-xl relative"
            onClick={(e) => e.stopPropagation()}>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-brandBlue text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Large Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.i_title}
                className="w-full object-contain rounded-lg"
              />

              {/* Image Title */}
              <h3 className="text-center font-brand p-2 mt-4 text-lg font-semibold text-brandBlue bg-brandOrange">
                {selectedImage.i_title}
              </h3>
            </div>

          </div>
        )}

      </div>
    </section>
    </>
  );
}
