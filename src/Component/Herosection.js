import React from 'react'
import ImageSection from './imageSection'

const Herosection = () => {
  return (
    <div className='w-100 h-auto md:flex relative'>
        <div className=' h-auto'>
         <div className='hidden md:flex'>
        <img src='assets/background.9782d62b.svg' className='md:relative md:items-start'/>
        </div>
         <div className='flex justify-center'>
          <img src='assets/background_mobile.webp' className='relative md:hidden'/>
         </div>
        <div className='hidden md:flex md:gap-4 absolute  top-0 md:mt-[200px] lg:mt-[300px]  md:ml-[110px] lg:ml-[160px]' >
        <div className='w-[9.609375vw]   w-2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
        <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524]  md:h-[100px]  md:gap-1 md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>

    
         <p className='text-xl text-white font-extrabold'>80+</p>
         <p className='text-sm text-gray-400 text-center'>Project Launched</p>
         </div> 
            </div>
            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
        <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:gap-1 md:h-[100px]  md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>42.51X</p>
         <p className=' text-sm text-gray-400 text-center'>ATH Avg Roi</p>
         </div>
            </div>
            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
            <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:gap-1  md:h-[100px]   md:rounded-[8px] md:py-[10px] xl:gap-2  xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>$12.8M</p>
         <p className=' text-sm text-gray-400 text-center'>Total raised</p>
            </div>
            </div>

            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
            <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:h-[100px] md:gap-1 md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>200K</p>
         <p className=' text-sm text-gray-400 text-center'>KYC-ed Users</p>
            </div>
            </div>
        </div>
        
         
       <div className=' flex xs:justify-center sm:justify-center md:justify-start absolute bottom-0 top-0    xs:mt-[600px] sm:mt-[600px]  left-0  right-0 gap-3 md:flex md:absolute md:top-0  md:mt-[350px] lg:mt-[450px]  md:ml-[110px] lg:ml-[180px] md:gap-4'>
    
       <a href='http://brdigitech.com/' target='_blank'> <button className=' xs:w-[140px]  xs:h-12 sm:w-[170px] h-12 bg-bggreen hover:bg-hoverBg text-center font-semibold rounded-sm '>Luanchpad </button></a> 
       <a href='http://brdigitech.com/' target='_blank'> <button className='  xs:w-[140px]   xs:h-12 sm:w-[170px] h-12 rounded-sm	border border-gray-600 text-white hover:bg-white hover:text-black hover:font-semibold'>Find The Gems</button> </a>
             
       </div>
       <ImageSection/>
        </div>
     
 
    </div>
  )
}

export default Herosection