import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import VendorForm from './Vendor';
import Franchise from './Franchise';
import DeliveryLocation from './Location';
import Wishlist from './Wishlist';
import DetailPage from './Detail';
import Product from './Product';
import CakePage from './CakePage';
import FlowersPage from './Flowerspage';
import ContainerOne from './ContainerOne';

export default function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/vendor', '/franchise'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && (
        <>
          <Header />
          <DeliveryLocation />
        </>
      )}

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cakepage" element={<CakePage />} />
        <Route path="/flowers" element={<FlowersPage />} />
        <Route path="/combos" element={<div>Combos Page</div>} />
        <Route path="/plants" element={<div>Plants Page</div>} />
        <Route path="/chocolates" element={<div>Chocolate Page</div>} />
        <Route path="/gifts" element={<div>Gifts Page</div>} />
        <Route path="/personalised" element={<div>Personalised</div>} />
        <Route path="/global" element={<div>Global page</div>} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/children" element={<div>Children Page</div>} />
        <Route path="/special" element={<div>Special Page</div>} />

        <Route path="/containerone" element={<ContainerOne/>}/>
      </Routes> 
    </>
  );
}
