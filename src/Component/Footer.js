import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[75%] m-auto mt-32'>
       <div>
        <img src='assets/misson/logo_footer.d8c65063.svg'className='lg:w-[25%]'/>
       </div>

        <div className=' mt-20 grid w-full grid-cols-2 justify-between gap-6 md:grid-cols-6 md:gap-0'>
        <div className='col-span-1'>
            <h6 className='font-alumni text-[18px] font-normal tracking-wider text-[#9296A2]'>
              Home 
            </h6>
            <ul className='mt-4 flex flex-col gap-3 xl:mt-5 xl:gap-4'>
                <li className='font-inter text-base cursor-pointer leading-5 text-white hover:text-[#7FF252] hover:underline'>
               <Link to="/">Home</Link>
                </li>
               
                

            </ul>
        </div>


        <div className='col-span-1'>
            <h6 className='font-alumni text-[18px] font-normal tracking-wider text-[#9296A2]'>
            Presale
            </h6>
            <ul className='mt-4 flex flex-col gap-3 xl:mt-5 xl:gap-4'>

            <li className='font-inter text-base cursor-pointer leading-5 text-white hover:text-[#7FF252] hover:underline'>
               <Link to="Presale">Presale</Link>
                </li>

            </ul>
        </div>
        <div className='col-span-1'>
            <h6 className='font-alumni text-[18px] font-normal tracking-wider text-[#9296A2]'>
            Team
            </h6>
            <ul className='mt-4 flex flex-col gap-3 xl:mt-5 xl:gap-4'>
            <li className='font-inter text-base cursor-pointer leading-5 text-white hover:text-[#7FF252] hover:underline'>
               <Link to="/Team">Team</Link>
                </li>

            </ul>
        </div>
        
        
        <div className='col-span-1'>
            <h6 className='font-alumni text-[18px] font-normal  cursor-pointer tracking-wider text-[#9296A2]'>
            About Us
            </h6>
            <ul className='mt-4 flex flex-col gap-3 xl:mt-5 xl:gap-4'>
             
            <li className='font-inter text-base cursor-pointer leading-5 text-white hover:text-[#7FF252] hover:underline'>
               <Link to="/about">AboutUs</Link>
                </li>
            </ul>
        </div>

        <div className='col-span-1'>
            <h6 className='font-alumni text-[18px] font-normal tracking-wider text-[#9296A2]'>
            Contact
            </h6>
            <ul className='mt-4 flex flex-col gap-3 xl:mt-5 xl:gap-4'>

            <li className='font-inter text-base cursor-pointer leading-5 text-white hover:text-[#7FF252] hover:underline'>
               <Link to="/contact-us">Contact</Link>
                </li>

            </ul>
        </div>

        

      
        </div>
        <div className='flex w-full flex-col items-start  mt-14 justify-between gap-3 border-t-[0.5px] border-t-[#B9B9B9] pb-[90px] pt-5 md:flex-row md:items-center md:py-7 lg:py-9 2xl:py-11'>
            <p className='font-inter text-[14px] text-[#B9B9B9] md:text-base'>
            © Icetea Labs, 2021
            </p>
            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" className='' height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="30" viewBox="0 0 640 512"><path fill="#ffffff" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="23.25" viewBox="0 0 496 512"><path fill="#fafafa" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
            </div>

        </div>
    </div>
  )
}

export default Footer