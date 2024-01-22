import React,{useState} from 'react'

const Staking = () => {

    const [showTab, setShowtab] = useState(1)
  return (
    <div className="stacking padding-top padding-bottom">
    <div className=" sm:m-auto sm:w-[80%]  md:w-[100%]">
        <div className=" ">
            <div className="flex items-center w-[100%]">
                <div className="lg:flex  xs:w-[100%] sx:m-auto xs:py-2 sm:py-2 sm:mx-20 sm:w-[100%] lg:w-[80%] lg:gap-6 lg:m-auto   lg:mt-20">
                    <div className=" xs:mt-6 lg:w-[33%]  xs:w-[80%]  xs:m-auto md:flex-1 bg-gray-900  py-6 justify-center">
                        
                            <div className="flex flex-col items-center">
                                <h3 className='text-white text-3xl font-semibold'>$ <span className="text-white" data-purecounter-start="639499"
                                        data-purecounter-end="63939379">6,368,143.24</span> </h3>
                                <p className='text-gray-400 text-bold'>Total Value Locked</p>
                            </div>
                     
                    </div>
                    <div className=" xs:mt-6 lg:w-[33%]  xs:w-[80%]  xs:m-auto  bg-gray-900 py-6 justify-center">
                        
                            <div className="flex flex-col items-center">
                                <h3 className='text-white text-3xl font-semibold'><span className="text-white" data-purecounter-start="0"
                                        data-purecounter-end="136.99">136</span>.99 %</h3>
                                <p className='text-gray-400 text-bold'>Apy</p>
                            </div>
                        
                    </div>
                    <div className=" xs:mt-6  xs:w-[80%]  xs:m-auto lg:w-[33%] bg-gray-900 py-6 justify-center">
                       
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
                    <div className="lg:flex lg:justify-between">
                        <div className="col-lg-7">
                            <div className="stacking__ammount">
                                <p className='text-gray-400'>Total Stack</p>
                                <h4 className='text-white text-2xl font-semibold'>350.70 BRDFI</h4>
                            </div>
                            <div className="flex flex-col w-[100%]">
                                <ul className=" mt-4 xs:flex xs:flex-wrap xs:gap-2 sm:flex sm:flex-wrap ms:gap-2 md:flex  md:gap-2" id="stackingPeriod" role="tablist">
                                    <li className="" role="presentation">
                                        <button className= {showTab === 1?"bg-bggreen w-[100px] h-[50px]  font-semibold rounded border":"w-[100px] h-[50px] rounded border border-bggreen text-white font-semibold"}
                                         onClick={() => setShowtab(1)}
                                        >7 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className={showTab === 2?"bg-bggreen w-[100px] h-[50px]  font-semibold rounded border":"w-[100px] h-[50px] rounded border border-bggreen text-white font-semibold"}
                                        onClick={() => setShowtab(2)}
                                        >14 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className={showTab === 3?"bg-bggreen w-[100px] h-[50px]  font-semibold rounded border":"w-[100px] h-[50px] rounded border border-bggreen text-white font-semibold"}
                                        onClick={() => setShowtab(3)}
                                        >30 Days</button>
                                    </li>
                                    <li className="" role="presentation">
                                        <button  className={showTab === 4?"bg-bggreen w-[100px] h-[50px]  font-semibold rounded border":"w-[100px] h-[50px] rounded border border-bggreen text-white font-semibold"}
                                        onClick={() => setShowtab(4)}
                                        > 60 Days</button>
                                    </li>
                                </ul>
                                <div className="mt-6" id="myTabContent">
                                    <div className={showTab === 1? "block":"hidden"}>
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
                                                                <span className="text-white font-bold">10%</span>
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
                                    <div className={showTab ===2?"block":"hidden"}id="period-tab2-pane" role="tabpanel"
                                        aria-labelledby="period-tab2" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="flex justify-between">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Lock Period:
                                                                <span className="text-white font-bold">14 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Re-locks on registration:
                                                                <span className="text-white font-bold">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Early unstake fee:
                                                                <span className="text-white font-bold">20%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Status:
                                                                <span className=" text-white font-bold">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p className='text-gray-400'>APY Rate </p>
                                                        <h3 className='text-white text-2xl font-bold'>20%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showTab ===3?"block":"hidden"}  id="period-tab3-pane" role="tabpanel"
                                        aria-labelledby="period-tab3" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="flex justify-between">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Lock Period:
                                                                <span className="text-white font-bold">30 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Re-locks on registration:
                                                                <span className="text-white font-bold">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Early unstake fee:
                                                                <span className="text-white font-bold">90%</span>
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
                                                        <h3 className='text-white text-2xl font-bold'>90%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showTab ===4?"block":"hidden"} id="period-tab4-pane" role="tabpanel"
                                        aria-labelledby="period-tab4" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="flex justify-between">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Lock Period:
                                                                <span className="text-white font-bold">160 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Re-locks on registration:
                                                                <span className="text-white font-bold">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="text-gray-400">Early unstake fee:
                                                                <span className="text-white font-bold">180%</span>
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
                                                        <h3 className='text-white text-2xl font-bold'>180%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col px-6 py-6 ms:mt-4  bg-gray-800 xs:mt-6 rounded-md">
                            <div className="stacking__approve">
                                <div className="stacking__approve-field mb-5">
                                    <label for="approve-stack" className="text-white font-semibold">Balance: <span className='text-gray-400'>3529.00 BUSD</span>
                                    </label>
                                    <div className=" flex flex-nowrap mt-3">
                                        <input type="text" className="w-[100px] h-[50px] text-white bg-bgdark pl-6" aria-label="Approve Stack"
                                            id="approve-stack" placeholder="0.00"/>
                                        <span className=" py-[13px] px-8 xs:px-2 text-gray-500 bg-bgdark">Max</span>
                                        <button className="w-[100px] bg-bggreen font-semibold text-center xs:text-sm h-[50px]">Approve</button>
                                    </div>
                                </div>
                                <div className="stacking__approve-withdraw">
                                    <label for="withdraw-stack" className="text-white font-semibold">Staked: <span className='text-gray-400'>350.70 BUSD</span>
                                    </label>
                                    <div className=" flex flex-nowrap mt-3">
                                        <input type="text" className="w-[100px]  h-[50px] text-white bg-bgdark pl-6" aria-label="Withdraw Stack"
                                            id="withdraw-stack" placeholder="0.00"/>
                                        <span className=" py-[13px] px-8 xs:px-2 text-gray-500 bg-bgdark">Max</span>
                                        <button className="w-[100px] bg-bggreen font-semibold text-center h-[50px] xs:text-sm">Withdraw</button>
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

export default Staking