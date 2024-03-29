import React from 'react'

const Product_Card = () => {
  return (
    <div className=' mt-16 flex '>
     
  

<div className='w-[310px] bg-white pb-20 relative '>
            <img src='assets/Banner/card_image.png' className='relative'/>
            <img src='assets/Banner/yellow-tag.png' className='absolute top-0 mt-[1175px] ml-[18px] bottom-0'/>
            <div className='flex justify-center items-center absolute top-0 mt-[1200px] ml-[200px] bottom-0  bg-yellow-500 rounded  text-sm font-semibold w-[100px] h-[25px] text-center'>UPCOMING</div>
            <div className='flex items-center ml-4'>
              <div className='w-16 h-16 rounded-[4px] border-4 relative border-white bg-black z-[1]'>
              <img src='assets/Banner/small_box_image.png'/>
              </div>
              <p className='font-bold ml-2'>Exverse</p>
              
            </div>
            <div className='flex flex-col ml-4'>
              <p className='text-sm text-gray-700 mt-2 font-semibold'>Exverse is a new AI-powered free-to-play universe that provides players with an unmatched and immersive 
                gaming...</p>
                <div className='flex gap-2 mt-2'>
                  <p className='font-extrabold text-gray-400'>Network:</p>
                  <img src='assets/Banner/bsc.51821800.svg'/>
                </div>
                <div className='bg-black mr-4  rounded-md mt-4 py-4 flex justify-end items-center'>
                  <p className='text-white mr-4 text-sm font-bold'>Total Rised</p>
                  <p className='text-2xl text-white mr-4 font-extrabold'>$250,000</p>
                </div>
            </div>
          </div>
  
        
  
  

        </div>
       
  )
}

export default Product_Card