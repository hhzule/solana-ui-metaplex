import { ArrowDownOutlined } from '@ant-design/icons'
import React from 'react'

const swap = () => {
  return (
    <div className=' flex justify-center  bg-no-repeat h-[500px] m-auto items-center'>
    <div className='w-[400px] xs:mx-4  pt-4 pb-6 h-auto mt-14 rounded-2xl bg-gray-900 drop-shadow-xl  '>
        <p className='text-1xl ml-3 pb-2 text-white'>swap</p>
        <div className='relative bg-gray-800 pt-2 mx-3'>
        <div className='flex justify-between  mt-2 mx-3'>
            <input placeholder="1.0"className='bg-gray-900 pl-2 text-[22spx] outline-none text-white font-bold' />
            <button className=' flex justify-around text-white w-[80px] items-center  rounded-2xl py-[4px] bg-gray-900'> 
            
            <img src='assets/misson/pngwing.com.png' className='w-[25%] '/>BRDFI</button>
        </div>
        <div className='flex justify-between mx-3 mt-10'>
         <p className='text-[#9298b3] pb-2 '> 52,74562 <span className='text-[#27765e] font-semibold'>0.05%</span> </p>
         <p className='text-[#9298b3] pb-2'>Balance: 0.0</p>
        </div>
        </div>
        <div className='flex justify-center items-center fixed  left-0 right-0'>
            <button className='bg-bggreen  items-center text-center rounded-full w-[25px]  h-[25px]'>
                <ArrowDownOutlined className='text-black  text-sm'/>
            </button>
        </div>
        <div className='bg-gray-800 pt-2 mt-4 mx-3'>
        <div className='flex justify-between  mt-2 mx-3'>
            <input placeholder="1.0"className='bg-gray-900 pl-2 text-[22spx] outline-none text-white font-bold' />
            <button className=' flex justify-around text-white w-[80px] items-center  rounded-2xl py-[4px] bg-gray-900'> 
            
            <img src='assets/misson/usd-coin-usdc-logo.png' className='w-[25%]'/>SOL</button>
        </div>
        <div className='flex justify-between mx-3 mt-10'>
         <p className='text-[#9298b3] pb-2 '> 52,74562 <span className='text-[#27765e] font-semibold'>0.05%</span> </p>
         <p className='text-[#9298b3] pb-2'>Balance: 0.0</p>
        </div>
        </div>
        <div className='flex justify-between mx-3 mt-3 bg-slate-800 items-center'>
            <div className='flex gap-2 mx-2 py-3'>
            <icon></icon>
            <p className='text-white' >SOL = 0.000364 BRDFI</p>
            <p className='text-[#7f92e6] '>($1)</p>
            </div>
            <div className='text-[#9298b3]  text-[20px] font-bold  mr-2'>
                ^
            </div>
        </div>

        <div className='bg-gray-800 mt-2 mx-3'>
            <div className='flex justify-between pt-2  mx-3'>
             <p className='text-[#9298b3]'>Expected Output</p>
             <p className='text-[#9298b3]'>2747.02 SOL</p>
            </div>
            <div className='flex justify-between  mt-2 mx-3'>
            <p className='text-[#9298b3]'>Price</p>
            <p className='text-[#9298b3]'>0.00%</p>
            </div>
            <div className=' mt-4 border-[1px] rounded border-slate-700'>
                <div className='flex justify-between  mx-3'>
             <p className='text-[#9298b3]'>Recieved after 0.5% slippage </p>
             <p className='text-[#9298b3]'>2747.02 SOL</p>
            </div>
            <div className='flex justify-between mx-3'>
            <p className='text-[#9298b3]'>Network Fee</p>
            <p className='text-[#9298b3]'>$8</p>
            </div>
            
            </div>
            <div className='w-[100%] flex  bg-gradient-to-r from-bggreen mt-4  to-hoverBg rounded h-[35px] justify-center'>
                <button className='text-black font-semibold'>Swap SOL</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default swap