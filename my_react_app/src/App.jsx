import Navbar from "./Navbar.jsx";
import './Navbar.css';
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./Footer.jsx";
import ColorPickerContainer from "./Pages/ColorPickerContainer.jsx";
import StopwatchContainer from "./Pages/StopwatchContainer.jsx";
import UpdaterSpreadContainer from "./Pages/UpdaterSpreadContainer.jsx";
import UpdateStateArrayContainer from "./Pages/UpdateStateArrayContainer.jsx";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />
      <main className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/colorpickercontainer" element={<ColorPickerContainer />} />
          <Route path="/Stopwatchcontainer" element={<StopwatchContainer />} />
          <Route path="/UpdaterSpreadContainer" element={<UpdaterSpreadContainer />} />
          <Route path="/UpdateStateArrayContainer" element={<UpdateStateArrayContainer />} />
          

        </Routes>
      </main>
      <Footer />
    </>
  )

}

export default App
