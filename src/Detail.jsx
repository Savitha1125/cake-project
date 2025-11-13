import React, { useState, useEffect } from "react";
import "./detailpage.css";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [visible, setVisible] = useState(true); // visible by default
  const [lastScrollY, setLastScrollY] = useState(0);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`container-fluid detailpage ${visible ? "show" : "hide"}`}>
      <div className="row text-center align-items-center justify-content-between menu-row">
        <div className="menu-left">
          <div className="menu-items active">EXPRESS</div>

          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("cakes")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            CAKES
            {activeMenu === "cakes" && (
              <div className="mega-menu">
                <div className="menu-column">
                  <h4>Cakes By Type</h4>
                  <p>Eggless Cakes</p>
                  <p>Midnight Cakes</p>
                </div>
                <div className="menu-column">
                  <h4>Cakes By Flavour</h4>
                  <p>Chocolate Cakes</p>
                  <p>Truffle Cakes</p>
                </div>
              </div>
            )}
          </div>

          <div className="menu-item">FLOWERS</div>
          <div className="menu-item">PLANTS</div>
        </div>

        <div className="delivery-container">
          <i className="fi fi-rr-motorcycle scooty"></i>
          <span className="delivery-text">2 Hour Delivery Gifts</span>
        </div>
      </div>
    </div>
  );
}
