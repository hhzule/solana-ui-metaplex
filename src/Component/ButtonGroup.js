import React from 'react'
import {ArrowLeftOutlined, ArrowRightOutlined  } from '@ant-design/icons';
import Carousel from "react-multi-carousel";
const customButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;

  return (
    <div className='flex gap-2'>
    <div className='bg-bggreen w-[40px] h-[40px] rounded-full text-center cursor-pointer' onClick={() => previous()}>
    <ArrowLeftOutlined className='mt-[12px]'/>
    </div>
    <div className='bg-bggreen w-[40px] h-[40px] rounded-full text-center cursor-pointer'onClick={() => next()}>
    <ArrowRightOutlined  className='mt-[12px]'/>
    </div>
    
</div>
  )
}

export default customButtonGroup