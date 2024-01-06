import React from 'react'

import "react-multi-carousel/lib/styles.css";
import GamingCard from './GamingCard';

const GamingWorld = () => {

    
  return (
    <>
        <div className='flex w-[75%] m-auto  flex-col justify-center items-center'>
        <div className='flex  items-center gap-6 mt-24'>
            <img src='assets/Banner/star.f728374a.svg' className='lg:w-[15%]'/>
            <p className='text-white text-3xl font-extrabold'>Game World</p>
        </div>
        <p className='text-white text-base mt-4 text-center lg:w-[70%]'>GameWorld's primitive 
        form was a huge database of everything that appeared in the web3
          gaming world. The most detailed live information is recorded,
           processed and provided to
          the market with the most useful perspective</p>
        </div>
  <div className='mainDiv'>
  <div className='image_slide'>    
  <GamingCard
  image="assets/Gaming/illuvium_ver_d986ee7d20.png"
  />
  <GamingCard
  image="assets/Gaming/gods_unchained_Vertical_2fb025dae4.png"
  />
  <GamingCard
  image="assets/Gaming/magiccraft_ver_25254000cb.png"
  />
  <GamingCard
  image="assets/Gaming/Gamefi_Image_3_dc330533ea.png"
  />
  <GamingCard
    image="assets/Gaming/revv_Ver_f5eb6696a5.png"
   
   />
  <GamingCard
   image="assets/Gaming/burgercities_ver_b7905f8ab9.jpg"
  />
  <GamingCard
   image="assets/Gaming/Group_42_f5eb32b71a.png"

  />   
    </div>
    <div className='image_slide'>    
  <GamingCard
  image="assets/Gaming/illuvium_ver_d986ee7d20.png"
  />
  <GamingCard
  image="assets/Gaming/gods_unchained_Vertical_2fb025dae4.png"
  />
  <GamingCard
  image="assets/Gaming/magiccraft_ver_25254000cb.png"
  />
  <GamingCard
  image="assets/Gaming/Gamefi_Image_3_dc330533ea.png"
  />
  <GamingCard
    image="assets/Gaming/revv_Ver_f5eb6696a5.png"
   
   />
  <GamingCard
   image="assets/Gaming/burgercities_ver_b7905f8ab9.jpg"
  />
  <GamingCard
   image="assets/Gaming/Group_42_f5eb32b71a.png"

  />  
    </div>
    </div> 
    <div className='mt-10 pb-10 flex justify-center items-center'>
      <p className='w-[150px] h-[40px] bg-bggreen rounded-sm text-center pt-2 font-semibold cursor-pointer' >Join Now</p>
    </div>
    </>
   
  )
}

export default GamingWorld