import React from 'react'
import ImageSection from './imageSection'

const Herosection = () => {
  return (
    <div className='w-100 h-auto md:flex'>
        <div className=' h-auto'>
         <div className='hidden md:flex'>
        <img src='assets/background.9782d62b.svg' className='md:relative md:items-start'/>
        </div>
         <div className='flex justify-center'>
          <img src='assets/background_mobile.webp' className='relative md:hidden'/>
         </div>
        <div className='hidden md:flex md:gap-4 md:absolute md:top-0 md:mt-[250px] lg:mt-[380px]  md:ml-[130px] lg:ml-[180px]' >
        <div className='w-[9.609375vw]   w-2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
        <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524]  md:h-[100px]  md:gap-1 md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>

    
         <p className='text-xl text-white font-extrabold'>80+</p>
         <p className='text-sm text-gray-400 text-center'>Project Launched</p>
         </div> 
            </div>
            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] mds:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
        <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:gap-1 md:h-[100px]  md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>42.51X</p>
         <p className=' text-sm text-gray-400'>ATH Avg Roi</p>
         </div>
            </div>
            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
            <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:gap-1  md:h-[100px]   md:rounded-[8px] md:py-[10px] xl:gap-2  xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>$12.8M</p>
         <p className=' text-sm text-gray-400'>Total raised</p>
            </div>
            </div>

            <div className='w-[9.609375vw] 2xxl:w-[185px] overflow-hidden bg-gradient-to-b from-[#616D85] to-[#1E294200] md:rounded-[8px] md:p-[2px] xl:rounded-[10px] xl:p-[2px] 2xxl:rounded-xl 2xxl:p-[3px]'>
            <div className='flex flex-1 flex-col items-center justify-center bg-[#0E1524] md:h-[100px] md:gap-1 md:rounded-[8px] md:py-[10px] xl:gap-2 xl:rounded-[10px] xl:py-[12px] 2xl:gap-3 2xl:py-[14px] 2xxl:gap-3 2xxl:rounded-xl 2xxl:py-[16px]'>
         <p className='text-xl text-white font-extrabold '>200K</p>
         <p className=' text-sm text-gray-400'>KYC-ed Users</p>
            </div>
            </div>
        </div>
        
         
       <div className=' flex absolute top-0 mt-[670px] ml-[20px] left-0 mr-[20px] right-0 gap-3 md:flex md:absolute md:top-0  md:mt-[380px] lg:mt-[540px] sm:ml-[150px]  md:ml-[130px] lg:ml-[180px] md:gap-4'>
    
         <button className='w-[170px] h-12 bg-bggreen hover:bg-hoverBg text-center font-semibold rounded-sm '>Luanchpad</button>
         <button className='w-[170px] h-12 rounded-sm	border border-gray-600 text-white hover:bg-white hover:text-black hover:font-semibold'>Find The Gems</button>
             
       </div>
       <ImageSection/>
        </div>
     

    </div>
  )
}

export default Herosection