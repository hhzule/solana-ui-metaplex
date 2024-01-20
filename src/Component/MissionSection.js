import React from 'react'
import Mission_card from "./mission"

const MissionSection = () => {
  return (
    <div className='w-[75%] m-auto  mt-20 md:flex  lg:flex gap-10'>
        
        <div className=' sm:flex sm:flex-wrap sm:grid-flow-cols-2 md:grid-cols-3 h-auto gap-[16px] md:grid md:gap-[8px] lg:gap-[12px] xl:gap-[20px] 2xl:gap-[24px] 2xxl:gap-[30px]'>
          
          <Mission_card 
          image="assets/misson/b820a9b6-6270-4a8b-b212-2692aef4a345.png"
          text="Chances to secure guaranteed Bitcoin Cats NFTs"
          />
          <Mission_card
           image="assets/misson/2498c301-d001-44c7-8ea2-3768f271ee43.png"
           text="Anichess $260 USDT Puzzle Challenge: Play, Solve, Win!"
          />
          <Mission_card
           image="assets/misson/98e60271-28d4-42b1-866f-2d64cdf32007.png"
           text="GameFi IDO Celebration | $500  Giveaway"
          />
         
          
      </div>

        <div className=' sm:w-[100%] xs:w-[100%] md:w-[40%] flex flex-col'>
            <div className='w-full'>
                <p className=' font-extrabold text-white md:text-[36px] xl:text-[48px] 2xl:text-[56px]'>DMission</p>
                <p className='font-inter font-thin tracking-wide text-white md:text-[12px] lg:text-[14px] xl:text-[16px] xl:leading-5 2xl:text-base'>
                An engage-to-earn platform, where you immerse yourself in 
                captivating missions and earn appealing rewards. Let's discover!
                </p>
            </div>
            <div className='mt-4'>
                <button className='flex h-[42px] w-[163px] items-center justify-center rounded bg-[#7FF252]  text-base font-semibold text-black hover:bg-[#46CF10] md:h-[40px] md:w-[140px] xl:w-[160px] xl:text-[18px] 2xl:w-[180px] 2xl:text-[20px] 2xl:h-[50px] 2xxl:h-[60px] 2xxl:w-[200px] 2xxl:text-[24px]'>
                Discovery Now
                </button>
            </div>
            <div className='w-[70%]'>
                <img src='assets/misson/background.445bc341.png' className='w-[100%]'/>
            </div>
        </div>

      
    </div>
  )
}

export default MissionSection