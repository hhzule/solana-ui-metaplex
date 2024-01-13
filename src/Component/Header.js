import React,{useState} from 'react'
import {MenuOutlined  } from '@ant-design/icons';
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOPen] =useState(false)
  return (
        <div className=' flex justify-around w-100 sm:flex sm:justify-around md:flex md:justify-evenly lg:justify-evenly bg-bgdark py-4  border-b border-gray-600 '>
        <div className='flex justify-between items-center  md:flex md:items-center'>
            <div className=''>
              <img src='assets/gamefi.org.png' width="140" height="24"/>
            </div>
            <div className=''>
                <ul className={isOpen?" xs:bg-white xs:w-[180px] z-50 xs:absolute  xs:mr-[90px]  sm:w-[180px] xs:px-2  xs:mt-4 xs:py-6 xs:right-0  sm:fixed sm:bg-white sm:py-4   sm:mt-4  sm:right-0  sm:mr-[140px] sm:ml-[350px] md:ml-[100px] rounded md:bg-bgdark md:mt-[0px] md:items-center md:py-0 sm:text-left md:flex lg:flex md:text-white text-sm  uppercase  font-semibold pl-6 pr-6":'hidden sm:ml-[85px] md:ml-[200px] rounded  sm:text-left md:flex lg:flex lg:ml-0  md:text-white text-sm  uppercase  font-semibold pl-6 pr-6' }
                >
                <li className='mr-4 ml-4 xs:pt-[2px] xs:hover:text-bggreen xs:cursor-pointer cursor-pointer'><Link to="/">Home</Link></li>
                <li className='mr-4 ml-4 xs:py-[2px]  xs:hover:text-bggreen cursor-pointer'><Link to="/Presale">Presale</Link></li>
                <li className='mr-4 ml-4 xs:py-[2px]  xs:hover:text-bggreen cursor-pointer'><Link to="/Team">Team</Link></li>
                <li className='mr-4 ml-4 xs:py-[2px] xs:hover:text-bggreen cursor-pointer'><Link to="/about">About</Link></li>
                <li className='mr-4 ml-4 xs:py-[2px]  xs:hover:text-bggreen cursor-pointer'><Link to="contact-us">Contact</Link></li>
                </ul>
                </div>
                
        </div>
        <div className=' hidden sm:hidden md:hidden lg:flex items-center gap-4'>
         <button className='w-[140px] h-12 rounded-sm 	border border-gray-600 text-sm  uppercase  font-semibold  text-white' > OASYS NAVI</button>
         <button className='w-[140px] h-12 rounded-sm	border border-gray-600  text-sm  uppercase  font-semibold  text-white'>BUY MORE GAFI</button>
         <button className='w-40 h-12 bg-bggreen text-center text-sm  uppercase  font-semibold rounded-sm  '><span className='bg-bgdark w-[12px] h-auto px-[3px] text-center align-middle rounded-sm font-semibold text-white'>+</span> Login</button>
         
        </div>
        <div className='relative'>
                <MenuOutlined  className='text-white text-xl cursor-pointer md:hidden'  onClick={() => setIsOPen(!isOpen)} />
                </div>
    </div>
  )
}

export default Header