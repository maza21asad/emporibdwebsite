import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import FashionAndJewellery from "./pages/services/Fashion&Jewellery/FashionAndJewellery";
import PropertiesLtd from "./pages/services/PropertiesLtd/PropertiesLtd";
import Events from "./pages/services/Events/Events";
import Digitals from "./pages/services/Digitals/Digitals";
import ToursAndTravels from "./pages/services/Tours&Travels/ToursAndTravels";
import Architects from "./pages/services/Architects/Architects";
import Agro from "./pages/services/Agro/Agro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fashion&jewellery" element={<FashionAndJewellery />} />
          <Route path="/propertiesLtd" element={<PropertiesLtd />} />
          <Route path="/events" element={<Events />} />
          <Route path="/digitals" element={<Digitals />} />
          <Route path="/tours&travels" element={<ToursAndTravels />} />
          <Route path="/architects" element={<Architects />} />
          <Route path="/agro" element={<Agro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
