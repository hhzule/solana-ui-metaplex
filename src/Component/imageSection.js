import React from 'react'

const ImageSection = () => {
  return (
    <div>
        <div className='flex justify-center md:flex-wrap absolute     xs:mt-0  md:mx-20 lg:ml-[180px] gap-[20px] flex-wrap items-center md:gap-[40px]'>
            <div className='w-[100px]'>
            <img src='assets/animocabrands.png' className=''/>
            </div>
          <div className='w-[120px]'>
            <img src='assets/daomaker_white.png'/>
            </div>
            
            <div className='w-[120px]'>
            <img src='assets/icetealabs_full_white.png'/>
            </div>
            <div className='w-[120px]'>
            <img src='assets/polygon_full.png'/>
            </div>
            <div className='w-[120px]'>
            <img src='assets/morningstarventures_full_color.png'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default ImageSection