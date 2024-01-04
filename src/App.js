import Header from "./Component/Header";
import Herosection from "./Component/Herosection";
import BannerSection from "./Component/bannerSection";
import UpCommingPool from "./Component/upCommingPool";
function App() {
  return (
    <div className="bg-bgdark">
     <Header/>
     <Herosection/>
     <BannerSection/>
     <UpCommingPool/>
    </div>
  );
}

export default App;
