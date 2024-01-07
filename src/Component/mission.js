import React from 'react'

const mission = ({image}) => {
  return (
    
        <div className='col-span-1 my-4 ml-4 flex h-[226px] w-[200px] flex-col gap-[16px] rounded-xl border-[1px] border-[#5B5B5B] bg-black p-[16px] hover:drop-shadow-[0px_0px_10px_rgba(255,255,255)] md:my-0 md:ml-0 md:h-auto md:w-[13.02vw] md:gap-[8px] mds:p-[8px] lg:gap-[12px] lg:p-[10px] xl:gap-[18px] xl:p-[12px] 2xl:gap-[18px] 2xl:p-[12px] 2xxl:gap-[24px] 2xxl:p-[16px] 2xxl:w-[250px]'>
         <img src={image} className="w-full object-cover h-[100px] rounded-sm md:h-[60px] lg:h-[70px] xl:h-[84px] 2xl:h-[104px] 2xxl:h-[120px]"/>
         <p className='font-inter text-[12px] font-medium text-white line-clamp-2 hover:underline md:text-[10px] lg:text-[12px] xl:text-sm 2xxl:text-sm '>
         Chances to secure guaranteed Bitcoin Cats NFTs
         </p>
         <div className='flex flex-row items-center justify-between gap-2'>
          <div className='aspect-square relative block flex-none h-7 w-7 rounded-lg ring-2 ring-white md:h-5 md:w-5 lg:h-7 lg:w-7 xl:h-7 xl:w-7 2xl:w-[34px] 2xl:h-[34px] 2xxl:h-9 2xxl:w-9'>
           <img src='assets/misson/eee811e4-ab99-4601-aa2b-d2bd95375af3.jpeg' className='h-full w-full object-cover rounded-lg bg-[#0B122C]'/>
          </div>
          <div className='flex items-center justify-center truncate whitespace-nowrap font-alumni text-[20px] font-bold uppercase text-white md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[17.5px] 2xxl:text-[22px]'>
           10 slots
          </div>
         </div>
        </div>
  
  )
}

export default mission