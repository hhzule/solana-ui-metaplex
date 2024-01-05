import Header from "./Component/Header";
import Herosection from "./Component/Herosection";
import BannerSection from "./Component/bannerSection";
import UpCommingPool from "./Component/upCommingPool";
import Join from "./Component/join";
import WebGaming from "./Component/webGaming";
function App() {
  return (
    <div className="bg-bgdark">
     <Header/>
     <Herosection/>
     <BannerSection/>
     <UpCommingPool/>
     <Join/>
     <WebGaming/>
    </div>
  );
}

export default App;
