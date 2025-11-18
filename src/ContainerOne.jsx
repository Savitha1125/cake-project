import React from 'react';
import img from "./assets/kid-cake.avif";
import img1 from "./assets/deal-desktop.avif";
import img2 from "./assets/rose.avif";
import img3 from "./assets/plant.avif";
import img4 from "./assets/bottle.avif";
import img5 from "./assets/frame.avif";
import img6 from "./assets/chocolate.avif";
import img7 from "./assets/accessories-d.avif";
import "./Containerone.css";

export default function ContainerOne() {
  return (
    <>
    <div className="containerone">
  <h1 className='mt-5 text-center'>Must Have</h1>

  {/* First row */}
  <div className='container'>
    <div className='image-block'><img src={img} alt="Kid Cake"/></div>
    <div className='image-block discount'><img src={img1} alt="Deal"/></div>
    <div className='image-block'><img src={img2} alt="Rose"/></div>
  </div>
    <div className='container bottle-row'>
  <div className='image-block plant'><img src={img3} alt="Plant"/></div>
  <div className='image-block bottle'><img src={img4} alt="Bottle"/></div>
  <div className='image-block frame'><img src={img5} alt="Frame"/></div>
  <div className='image-block choco'><img src={img6} alt="Chocolate"/></div>
  <div className='image-block small'><img src={img7} alt="Accessories"/></div>
</div>
</div>
<div className='container'></div>
</>
  );
}
