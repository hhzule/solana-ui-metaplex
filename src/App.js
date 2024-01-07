import Header from "./Component/Header";
import Herosection from "./Component/Herosection";
import BannerSection from "./Component/bannerSection";
import UpCommingPool from "./Component/upCommingPool";
import Join from "./Component/join";
import WebGaming from "./Component/webGaming";
import GamingWorld from "./Component/GamingWorld";
import MissionSection from "./Component/MissionSection"
import Footer from "./Component/Footer"
function App() {
  return (
    <div className="bg-bgdark">
     <Header/>
     <Herosection/>
     <BannerSection/>
     <UpCommingPool/>
     <Join/>
     <WebGaming/>
     <GamingWorld/>
     <MissionSection/>
     <Footer/>
    </div>
  );
}

export default App;
