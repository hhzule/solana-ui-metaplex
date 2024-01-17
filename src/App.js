import Header from "./Component/Header";
import Footer from "./Component/Footer"
import { Routes, Route} from "react-router-dom"
import Home from "./Home";
import Presale from "./Presale";
import Team from "./Team";
import Contact from "./contact-us"
import AboutUs from "./about";
import ScrollToTop from "./Component/ScrollToTop";
import Staking from "./staking"
function App() {
  return (
    <div className="bg-bgdark">

<ScrollToTop/>
<Header/>
     <Routes>
    
    
     <Route path="/" element={ <Home/>}/>
     <Route path="/Presale" element={ <Presale/>}/>
     <Route path="/Team" element={ <Team/>}/>
     <Route path="/contact-us" element={ <Contact/>}/>
     <Route path="/about" element={ <AboutUs/>}/>
     <Route path="/staking" element={ <Staking/>}/>
     
     </Routes>
    
     
     <Footer/>
    </div>
  );
}

export default App;
