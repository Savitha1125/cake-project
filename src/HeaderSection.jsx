import Product from "./Product";

export default function HeaderSection() {
  return (
    <div className="header-content">
      <div className="search">
        <SearchBar />
      </div>
      <div className="location">
        <DeliveryLocation />
      </div>
    </div>
  );
}
