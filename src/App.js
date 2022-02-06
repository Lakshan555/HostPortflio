import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import {Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import PotfoliosPage from "./pages/PotfoliosPage";
import TravelSite from "./pages/PortfolioSelection/TravelSite";
import ProcumentSystem from "./pages/PortfolioSelection/ProcumentSystem";
import HotelLoop from "./pages/PortfolioSelection/HotelLoop";
import BocApp from "./pages/PortfolioSelection/BocApp";
import HighGarden from "./pages/PortfolioSelection/HighGarden";
import FlutterUi from "./pages/PortfolioSelection/FlutterUi";
import SparePartSystem from "./pages/PortfolioSelection/SparePartSystem";
import ContactPage from "./pages/ContactPage";
import Iclass from "./pages/PortfolioSelection/Iclass";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolios" element={<PotfoliosPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/0001" element={<TravelSite />} />
            <Route path="/0002" element={<ProcumentSystem />} />
            <Route path="/0003" element={<HotelLoop />} />
            <Route path="/0004" element={<BocApp />} />
            <Route path="/0005" element={<HighGarden />} />
            <Route path="/0006" element={<FlutterUi />} />
            <Route path="/0007" element={<SparePartSystem />} />
            <Route path="/0008" element={<Iclass />} />

        </Routes>  
         
      
         
        </div>
      </div>
    </div>
  );
}

export default App;
