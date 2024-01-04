import React from 'react'
import {ArrowLeftOutlined, ArrowRightOutlined  } from '@ant-design/icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product_Card from './Product_Card';
import ButtonGroup from './ButtonGroup';



const upCommingPool = () => {

  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 800  },
    items: 2
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className='flex gap-2 absolute bottom-0 right-0  top-0 mt-[1060px] mr-[40px] md:mr-[170px]'>
    <div className='bg-bggreen w-[40px] h-[40px] rounded-full text-center cursor-pointer' onClick={() => previous()}>
    <ArrowLeftOutlined className='mt-[12px]'/>
    </div>
    <div className='bg-bggreen w-[40px] h-[40px] rounded-full text-center cursor-pointer'onClick={() => next()}>
    <ArrowRightOutlined  className='mt-[12px]'/>
    </div>
    
</div>
  )
}
  return (
    <div className='w-[75%] m-auto'>
        <div className='w-[100%] flex justify-between mt-20 m-auto'>
            <div className='flex gap-10'>
            <p className='text-white md:text-3xl font-extrabold mt-2'>
            UPCOMING POOL  
            </p>
            <img src='assets/Banner/star.f728374a.svg'/>
            </div>
            
            
        </div>
      
        <Carousel
  swipeable={false}
  draggable={false}
  
  responsive={responsive}
  arrows={false} customButtonGroup={<ButtonGroup />}
  renderButtonGroupOutside={true}
  
  autoPlaySpeed={1000}

>
  <Product_Card/>
  <Product_Card/>
  <Product_Card/>
  <Product_Card/>
  
  <Product_Card/>
  <Product_Card/>

</Carousel>
       

    </div>
  )
}

export default upCommingPool