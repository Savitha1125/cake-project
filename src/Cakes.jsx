import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./cakes.css";

export default function Cakes() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowPopup(false);
  };

  return (
    <>
      <div className="container">
        <h5>Online Cake Delivery</h5>

        <div
          className="mt-4 home"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <span>Home</span>
          <i
            className="fi fi-br-angle-right icon"
            style={{ margin: "0 8px" }}
          ></i>
          <span className="cakes">Cakes</span>
        </div>

        <div className="content">
          <div className="box">
            <h5 style={{ marginBottom: "10px" }}>Cakes</h5>

            {/* Calendar + Delivery Date text */}
            <div
              className="cakes-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
              onClick={() => setShowPopup(true)} // whole section clickable
            >
              <i className="fi fi-tr-calendar-clock"
                 style={{ fontSize: "16px", color: "black", cursor: "pointer" }}></i>
            <span className="delivery-text">Delivery Date</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup placed OUTSIDE container for full-page blur */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* ❌ Close button */}
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <h3>Select Delivery Date</h3>

            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              calendarClassName="custom-calendar"
            />

            <div className="popup-actions">
              <button
                className="reset-btn"
                onClick={() => setSelectedDate(null)}
              >
                Reset
              </button>
              <button className="ok-btn" onClick={() => setShowPopup(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
