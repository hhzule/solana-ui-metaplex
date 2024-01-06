import React from 'react'
import Mission_card from "./mission"

const MissionSection = () => {
  return (
    <div className='w-[80%] m-auto flex flex-col md:flex  lg:flex gap-10'>
        <div className=' grid-cols-3 gap-[16px] md:grid md:gap-[8px] lg:gap-[12px] xl:gap-[20px] 2xl:gap-[24px] 2xxl:gap-[30px]'>
            <Mission_card/>
            <Mission_card/>
            <Mission_card/>
            <Mission_card/> 
            <Mission_card/>
            <Mission_card/>
        </div>
        <div>
            <div>
                <p className='font-alumni font-extrabold text-white md:text-[36px] xl:text-[48px] 2xl:text-[56px]'>DMission</p>
                <p className='font-inter font-thin tracking-wide text-white md:text-[12px] lg:text-[14px] xl:text-[16px] xl:leading-5 2xl:text-base'>
                An engage-to-earn platform, where you immerse yourself in <br/>
                captivating missions and earn appealing rewards. Let's discover!
                </p>
            </div>
            <div className='mt-4'>
                <button className='flex h-[42px] w-[163px] items-center justify-center rounded bg-[#7FF252]  text-base font-semibold text-black hover:bg-[#46CF10] md:h-[40px] md:w-[140px] xl:w-[160px] xl:text-[18px] 2xl:w-[180px] 2xl:text-[20px] 2xl:h-[50px] 2xxl:h-[60px] 2xxl:w-[200px] 2xxl:text-[24px]'>
                Discovery Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default MissionSection