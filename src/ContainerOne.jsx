import React from 'react'
import img from "./assets/kid-cake.avif";
import img1 from "./assets/deal-desktop.avif";
import img2 from "./assets/rose.avif";
import "./Containerone.css";
export default function ContainerOne (){
  return (
    <div className="containerone">
    <h2 className='mt-5 text-center must'>Must Have</h2>
    <div className='container'>
    <div className='images'>
      <img src={img}></img>
    </div>
    <div className='discount'>
      <img src={img1}></img>
    </div>
    <div className='rose'>
      <img src={img2}></img>
    </div>
    </div>
    </div>
  )
}
