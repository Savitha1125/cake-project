import React, { useState } from "react";
import "./detailpage.css";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="container-fluid detailpage">
      <div className="row text-center align-items-center justify-content-between menu-row">
        {/* 🔹 Left Menu Items */}
        <div className="menu-left">
          <div className="menu-items active">EXPRESS</div>

          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("cakes")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            CAKES
            {activeMenu === "cakes" && (
              <div
                className="mega-menu"
                onMouseEnter={() => setActiveMenu("cakes")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="menu-column">
                  <h4>Cakes By Type</h4>
                  <p className="egg ms-0">
                    <span className="menu-separator"></span>Eggless Cakes
                  </p>
                  <p>Midnight Cakes</p>
                </div>

                <div className="menu-column">
                  <h4>Cakes By Flavour</h4>
                  <p className="me-3 choco">
                    <span className="menu-separator"></span>Chocolate Cakes
                  </p>
                  <p className="me-5 truf">Truffle Cakes</p>
                </div>

                <div className="menu-column">
                  <h4>Cakes By Theme</h4>
                  <p className="me-5 kids">
                    <span className="menu-separator"></span>Kids Cakes
                  </p>
                  <p className="me-4">Unicorn Cakes</p>
                </div>

                {/* 🔹 Cakes By Occasion + Weight (same column) */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="me-5 birth">
                    <span className="menu-separator"></span>Birthday Cakes
                  </p>
                  <p className="me-3">Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4 className="me-4">Cake Combos</h4>
                    <p className="me-4">Cake Combos</p>
                    <p className="ms-2">Cakes And Flowers</p>
                  </div>
                  </div>
                  <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p><span className="menu-separator"></span> Pinata Cakes</p>
                  <p>Pull Me Up Cakes</p>
                </div>
              </div>
            )}
          </div>

          <div className="menu-item">FLOWERS</div>
          <div className="menu-item">PLANTS</div>
          <div className="menu-item">GIFTS</div>
          <div className="menu-item">PERSONALIZED GIFTS</div>
          <div className="menu-item">CHOCOLATES</div>
          <div className="menu-item">COMBOS</div>
          <div className="menu-item">BIRTHDAY</div>
          <div className="menu-item">ANNIVERSARY</div>
          <div className="menu-item">OCCASIONS</div>
        </div>

        {/* 🔹 Right Side Delivery Box */}
        <div className="delivery-container">
          <i className="fi fi-rr-motorcycle scooty"></i>
          <span className="delivery-text">2 Hour Delivery Gifts</span>
        </div>
      </div>
    </div>
  );
}
