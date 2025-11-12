import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import VendorForm from "./Vendor";
import Franchise from "./Franchise";
import DeliveryLocation from "./Location";
import Wishlist from "./Wishlist";
import SearchBar from "./SearchBar";
import DetailPage from "./Detail";
import Product from "./Product";
import CakePage from "./CakePage";
import Cakes from "./Cakes";
import FlowersPage from "./Flowerspage";
import Carosual from "./Carosual"; // import carousel

export default function Router() {
  const location = useLocation();
  const hideHeaderRoutes = ["/vendor", "/franchise"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {/* Header + delivery location only for routes that need them */}
      {!shouldHideHeader && (
        <>
          <Header />
          <DeliveryLocation />
          {location.pathname === "/" && <SearchBar />}
        </>
      )}

      {/* Carousel only on home page */}
      {location.pathname === "/" && <Carosual />}

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cakepage" element={<CakePage />} />
        <Route path="/flowers" element={<FlowersPage />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/combos" element={<div>Combos Page</div>} />
        <Route path="/plants" element={<div>Plants Page</div>} />
        <Route path="/chocolates" element={<div>Chocolate Page</div>} />
        <Route path="/gifts" element={<div>Gifts Page</div>} />
        <Route path="/personalised" element={<div>Personalised</div>} />
        <Route path="/global" element={<div>Global page</div>} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/children" element={<div>Children Page</div>} />
        <Route path="/special" element={<div>Special Page</div>} />
      </Routes>
    </>
  );
}
