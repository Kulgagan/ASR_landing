//The main place where we add all of the components together

import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Overview from "./components/overview";
//import Pricing from "./components/pricing";
import Process from "./components/process";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollBackground from "./components/scroll-background";
import truckingImage from "./assets/overview-banner.png";


const App = () => {
  return ( 
    <Router>
      <div className="relative isolate overflow-hidden">
        <ScrollBackground imageUrl={truckingImage} />
        <Header/>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Overview />
                <Process />
                <About />
              </>
            } />
            {/*<Route path="/pricing" element={<Pricing />} />*/}
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;