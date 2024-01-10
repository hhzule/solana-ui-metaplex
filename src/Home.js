import React from 'react'
import Herosection from "./Component/Herosection";
import BannerSection from "./Component/bannerSection";
import UpCommingPool from "./Component/upCommingPool";
import Join from "./Component/join";
import WebGaming from "./Component/webGaming";
import GamingWorld from "./Component/GamingWorld";
import MissionSection from "./Component/MissionSection"

const Home = () => {
  return (
    <div>
         <Herosection/>
     <BannerSection/>
     <UpCommingPool/>
     <Join/>
     <WebGaming/>
     <GamingWorld/>
     <MissionSection/>
    </div>
  )
}

export default Home