import Header from "./Component/Header";
import Footer from "./Component/Footer"
import { Routes, Route} from "react-router-dom"
import Home from "./Home";
import Presale from "./Presale";
import Team from "./Team";
function App() {
  return (
    <div className="bg-bgdark">

     <Header/>
     <Routes>
     <Route path="/" element={ <Home/>}/>
     <Route path="/Presale" element={ <Presale/>}/>
     <Route path="/Team" element={ <Team/>}/>
     </Routes>
    
     
     <Footer/>
    </div>
  );
}

export default App;
