import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import VendorForm from "./Vendor";
import Franchise from "./Franchise";
import Carosual from "./Carosual"; 
import Product from "./Product";
import Cakes from "./Cakes"
export default function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* Show Carosual only on home page */}
      {location.pathname === "/" &&
      <>
       <Carosual />
       <Product/>
       </>
       }

      <Routes>
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/carousel" element={<Carosual />} /> 
        <Route path="/product" element={<Product/>}/>
        <Route path="/cakes" element={<Cakes/>}/>
      </Routes>
    </>
  );
}
