import React from 'react'
import img from "./assets/kid-cake.avif";
import "./containerone.css";
export default function ContainerOne (){
  return (
    <div className="containerone">
    <h2 className='mt-5 text-center must'>Must Have</h2>
    <div className='images'>
      <img src={img}></img>
    </div>
    </div>
  )
}
