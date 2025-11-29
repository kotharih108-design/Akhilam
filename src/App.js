import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

import AdminDashboard from './admin/AdminDashboard';
import ProductList from './admin/products/ProductList';
import EditProduct from './admin/products/EditProduct';
import AddProduct from './admin/products/AddProduct';
import AdminLayout from './admin/AdminLayout';
import GalleryList from './admin/gallery/GalleryList';
import AddGallery from './admin/gallery/AddGallery';
import EditGallery from './admin/gallery/EditGallery';
import Login from './admin/Login';


function App() {
  return (
    <div>


      <ScrollToTop />
      <Navbar />
      <div className='mt-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>

            {/* DEFAULT ADMIN PAGE */}
            <Route index element={<AdminDashboard />} />


            {/* PRODUCT ROUTES */}
            <Route path="productlist" element={<ProductList />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

            <Route path="gallerylist" element={<GalleryList />} />
            <Route path="add-gallery" element={<AddGallery />} />
            <Route path="edit-gallery/:id" element={<EditGallery />} />

          </Route>

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
