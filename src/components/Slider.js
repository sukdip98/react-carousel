import React, { useState } from 'react'
import {FaArrowCircleRight,FaArrowCircleLeft} from 'react-icons/fa'
import { data } from './SliderData';
const Slider = () => {
    const [current,setCurrent]=useState(0);
    const prevSlide=()=>{
     if(current===0){
        setCurrent(data.length-1);
     }
     else{
        setCurrent(current-1)
     }
     

    }
    const nextSlide=()=>{
        if(current===data.length-1){
            setCurrent(0);
        }
        else{
            setCurrent(current+1);
        }
    }
    console.log(current);

  return (
    <section className='slider'>
   <FaArrowCircleLeft className='prev' onClick={prevSlide}/>

  <FaArrowCircleRight className='next' onClick={nextSlide}/>
  {
    data.map((slide,index)=>{
        return (
            <div className={index===current?"slide active":"slide"}>
                {index===current && (<img src={slide.image} className="image"/>)}
            

            </div>
        )
    })
  }
    </section>
  )
}

export default Slider