import React from 'react'

const GamingCard = ({image}) => {
  return (
    <div className='group relative mr-[16px] flex cursor-pointer h-[242px] w-[178px] items-center justify-center rounded-[10px] border-[1px] border-[#8C8C8C] md:mr-[12px] md:h-[188px] md:w-[14.27vw] lg:mr-[12px] lg:h-[238px] xl:mr-[20px] xl:h-[288px] 2xl:w-[214px] 2xl:mr-[24px] 2xl:h-[328px] 2xxl:mr-[30px] 2xxl:h-[418px] 2xxl:w-[274px]'>
    <div className='absolute z-20 my-auto h-full w-full self-center overflow-hidden rounded-[10px]'>
        <img src={image}className="h-full w-full object-cover transition-all group-hover:scale-110"/>
    </div>
    <div className='absolute bottom-0 z-30 flex h-[16%] w-full flex-col justify-center rounded-b-[10px] px-[5%] backdrop-blur-[5px]'> </div>
 </div>
  )
}

export default GamingCard