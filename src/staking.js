import React from 'react'

const staking = () => {
  return (
    <div className="stacking padding-top padding-bottom">
    <div className=" sm:m-auto sm:w-[80%]  md:w-[100%]">
        <div className=" ">
            <div className="flex items-center w-[100%]">
                <div className="lg:flex  xs:w-[100%] sx:m-auto xs:py-2 sm:py-2 sm:mx-20 sm:w-[100%] lg:w-[80%] lg:gap-6 lg:m-auto   lg:mt-20">
                    <div className=" mt-8 lg:w-[33%]  sx:w-[100%] sx:m-auto md:flex-1 bg-gray-900  py-6 justify-center">
                        
                            <div className="flex flex-col items-center">
                                <h3 className='text-white text-3xl font-semibold'>$ <span className="text-white" data-purecounter-start="639499"
                                        data-purecounter-end="63939379">6,368,143.24</span> </h3>
                                <p className='text-gray-400 text-bold'>Total Value Locked</p>
                            </div>
                     
                    </div>
                    <div className=" mt-6 lg:w-[33%]  bg-gray-900 py-6 justify-center">
                        
                            <div className="flex flex-col items-center">
                                <h3 className='text-white text-3xl font-semibold'><span className="text-white" data-purecounter-start="0"
                                        data-purecounter-end="136.99">136</span>.99 %</h3>
                                <p className='text-gray-400 text-bold'>Apy</p>
                            </div>
                        
                    </div>
                    <div className=" mt-6  lg:w-[33%] bg-gray-900 py-6 justify-center">
                       
                            <div className="flex flex-col items-center">
                                <h3 className='text-white text-3xl font-semibold'><span className="text-white" data-purecounter-start="0"
                                        data-purecounter-end="69899">69899</span> </h3>
                                <p className='text-gray-400 text-bold'>Number of Stakers</p>
                            </div>
                    
                    </div>
                </div>
            </div>
            <div className="md:w-[80%] sx:w-[100%]  sx:m-auto m-auto mt-10 bg-gray-900">
                <div className="flex w-[100%]  m-auto py-6 border-b border-gray-600 ">
                    <h3 className='text-white  pl-10 text-3xl font-extrabold'>Participate IDO Stack</h3>
                </div>

                <div className="mx-10 pb-20 mt-10">
                    <div className="md:flex md:justify-between">
                        <div className="col-lg-7">
                            <div className="stacking__ammount">
                                <p className='text-gray-400'>Total Stack</p>
                                <h4 className='text-white text-2xl font-semibold'>350.70 BUSD</h4>
                            </div>
                            <div className="flex flex-col w-[100%]">
                                <ul className=" mt-4 xs:flex xs:flex-wrap xs:gap-2 md:flex md:gap-2" id="stackingPeriod" role="tablist">
                                    <li className="" role="presentation">
                                        <button className="w-[100px] h-[50px] rounded bg-bggreen font-semibold">7 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className="w-[100px] h-[50px] rounded bg-bggreen font-semibold">14 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className="w-[100px] h-[50px] rounded bg-bggreen font-semibold">30 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className="w-[100px] h-[50px] rounded bg-bggreen font-semibold"> 60 Days</button>
                                    </li>
                                </ul>
                                <div className="mt-6" id="myTabContent">
                                    <div className="tab-pane fade show active" id="period-tab1-pane" role="tabpanel"
                                        aria-labelledby="period-tab1" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="flex justify-between">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Lock Period:
                                                                <span className="text-white font-bold">7 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400 ">Re-locks on registration:
                                                                <span className="text-white font-bold">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Early unstake fee:
                                                                <span className="text-white font-bold">23%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Status:
                                                                <span className="text-white font-bold">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p className='text-gray-400'>APY Rate </p>
                                                        <h3 className='text-white text-2xl font-bold'>10%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden" id="period-tab2-pane" role="tabpanel"
                                        aria-labelledby="period-tab2" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">14 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">23%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>20%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden"  id="period-tab3-pane" role="tabpanel"
                                        aria-labelledby="period-tab3" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">30 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">23%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>30%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden" id="period-tab4-pane" role="tabpanel"
                                        aria-labelledby="period-tab4" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">60 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">23%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>45%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col px-6 py-6 bg-[#303941] xs:mt-6 rounded-md">
                            <div className="stacking__approve">
                                <div className="stacking__approve-field mb-5">
                                    <label for="approve-stack" className="text-white font-semibold">Balance: <span className='text-gray-400'>3529.00 BUSD</span>
                                    </label>
                                    <div className=" flex flex-nowrap mt-3">
                                        <input type="text" className="w-[100px] h-[50px] text-white bg-bgdark pl-6" aria-label="Approve Stack"
                                            id="approve-stack" placeholder="0.00"/>
                                        <span className=" py-[13px] px-8 text-gray-500 bg-bgdark">Max</span>
                                        <button className="w-[100px] bg-bggreen font-semibold text-center h-[50px]">Approve</button>
                                    </div>
                                </div>
                                <div className="stacking__approve-withdraw">
                                    <label for="withdraw-stack" className="text-white font-semibold">Staked: <span className='text-gray-400'>350.70 BUSD</span>
                                    </label>
                                    <div className=" flex flex-nowrap mt-3">
                                        <input type="text" className="w-[100px] h-[50px] text-white bg-bgdark pl-6" aria-label="Withdraw Stack"
                                            id="withdraw-stack" placeholder="0.00"/>
                                        <span className=" py-[13px] px-8 text-gray-500 bg-bgdark">Max</span>
                                        <button className="w-[100px] bg-bggreen font-semibold text-center h-[50px]">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default staking