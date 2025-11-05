// 
import React, { useState } from "react";
import "./detailpage.css";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null); // ✅ define state

  return (
    <div className="container-fluid detailpage">
      <div className="row text-center justify-content-start align-items-center">

        {/* 🔹 EXPRESS always active */}
        <div
          className="col-auto menu-items active"
          onMouseEnter={() => setActiveMenu(true)}
          onMouseLeave={() => setActiveMenu(false)}
        >
          EXPRESS
          {activeMenu === "express" && (
            <div className="dropdown-box">
              <div className="dropdown-item">Same Day Delivery</div>
              <p className="dropdown-item1">Cakes</p>
              <p className="dropdown">Flowers</p>
              <p className="dropdown">Plants</p>
              <p className="dropdown">Combos</p>
              <p className="dropdown">Gifts same day</p>
            </div>
          )}
        </div>

        {/* 🔹 CAKES */}
        <div
          className="col-auto menu-item"
          onMouseEnter={() => setActiveMenu(true)}
      onMouseLeave={() => setActiveMenu(false)}
        >
          CAKES
          {activeMenu === "cakes" && (
            <div className="dropdown-box">
              <div className="dropdown">Chocolate Cake</div>
              <div className="dropdown">Red Velvet Cake</div>
              <div className="dropdown-item">Photo Cake</div>
              <div className="dropdown-item">Designer Cake</div>
            </div>
          )}
        </div>

        {/* 🔹 Other Menus */}
        <div className="col-auto menu-item">FLOWERS</div>
        <div className="col-auto menu-item">PLANTS</div>
        <div className="col-auto menu-item">GIFTS</div>
        <div className="col-auto menu-item">PERSONALIZED GIFTS</div>
      </div>

      {/* 🔹 Delivery Section */}
      <div className="delivery-container">
        <i className="fi fi-rr-motorcycle scooty"></i>
        <span className="delivery-text">2 Hour Delivery Gifts</span>
      </div>
    </div>
  );
}
