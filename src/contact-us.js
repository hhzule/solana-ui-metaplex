import React from 'react'

const contact = () => {
  return (
    <div>
        
        <div className='xs:px-10 sm:px-10 md:px-10  mt-20 lg:px-16 mx-auto lg:block max-w-4xl my-8 md:my-12 lg:my-12'>
            <div className='max-w-[782px] mt-32 bg-[#1B1D26] border border-[#303342] px-5 py-8'>
             <h2 className='text-[32px] font-bold text-center text-white mb-2.5'>
             CONTACT BRDGame
             </h2>
             <p className='max-w-[630px] font-casual text-center text-white mx-auto text-base leading-6'>
             Use this contact form to submit your messages to
              Please be as descriptive as possible.
             </p>

             <form>
                
                <div className='mb-6 mt-8'>
                <p className='mb-2 font-casual text-white text-gamefiDark-350 text-sm'> 
                Full Name
                </p>
                <input className='bg-[#303035] text-white border border-[#3C3C42] placeholder-white placeholder-opacity-30 font-casual text-sm rounded-sm px-4 py-2 w-full focus-visible:border-gamefiDark-350' 
                placeholder='Enter as your full name'
                name='FullName'
                
                />

                </div>

            
                <div className='mb-6 mt-8'>
                <p className='mb-2 font-casual  text-white text-gamefiDark-350 text-sm'> 
                Email
                </p>
                <input className='bg-[#303035] border text-white border-[#3C3C42] placeholder-white placeholder-opacity-30 font-casual text-sm rounded-sm px-4 py-2 w-full focus-visible:border-gamefiDark-350' 
                placeholder='Enter as your email'
                name='email'
                
                />

                </div>

                <div className='mb-6 mt-8'>
                <p className='mb-2 font-casual  text-white text-gamefiDark-350 text-sm'> 
             Subject
                </p>
                <input className='bg-[#303035] border text-white border-[#3C3C42] placeholder-white placeholder-opacity-30 font-casual text-sm rounded-sm px-4 py-2 w-full focus-visible:border-gamefiDark-350' 
                placeholder='Enter subject'
                name='Subject'
                
                />

                </div>

                
                <div className='mb-6'>
                <p className='mb-2 font-casual text-white text-gamefiDark-350 text-sm'> 
                Message
                </p>
                <textarea className='bg-[#303035] border border-[#3C3C42] text-white placeholder-white placeholder-opacity-30 font-casual text-sm rounded-sm px-4 py-2 w-full focus-visible:border-gamefiDark-350' 
                placeholder='Enter Your message'
                name='message'
                rows="12" cols="10"
                >
                </textarea>
                </div>
            
             </form>
             <div className='text-center'>
                <button type='button' className='uppercase py-2 px-8 bg-bggreen text-gamefiDark-900 font-bold text-[13px] hover:opacity-95 w-full md:w-[150px] rounded-sm clipped-t-r'>
                Submit
                </button>

             </div>
            </div>

        </div>
        
    </div>
  )
}

export default contact