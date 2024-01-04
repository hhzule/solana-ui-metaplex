import React from 'react'
import {MenuOutlined  } from '@ant-design/icons';

const Header = () => {
  return (
        
        <div className=' flex justify-around w-100 md:flex md:justify-evenly bg-bgdark py-4  border-b border-gray-600 '>
        <div className='flex justify-between items-center  md:flex md:items-center'>
            <div className=''>
              <img src='assets/gamefi.org.png' width="140" height="24"/>
            </div>
            <div>
                <ul className='hidden md:flex text-white text-sm  uppercase  font-semibold pl-6 pr-6'>
                <li className='mr-4 ml-4'>launchpad</li>
                <li className='mr-4 ml-4'>Game World</li>
                <li className='mr-4 ml-4'>Others</li>
                </ul>
                </div>
                
        </div>
        <div className=' hidden md:flex items-center gap-4'>
         <button className='w-[140px] h-12 rounded-sm 	border border-gray-600 text-sm  uppercase  font-semibold  text-white' > OASYS NAVI</button>
         <button className='w-[140px] h-12 rounded-sm	border border-gray-600  text-sm  uppercase  font-semibold  text-white'>BUY MORE GAFI</button>
         <button className='w-40 h-12 bg-bggreen text-center text-sm  uppercase  font-semibold rounded-sm  '><span className='bg-bgdark w-[12px] h-auto px-[3px] text-center align-middle rounded-sm font-semibold text-white'>+</span> Login</button>
         
        </div>
        <div>
                <MenuOutlined  className='text-white text-xl cursor-pointer md:hidden' />
                </div>
    </div>
  )
}

export default Header