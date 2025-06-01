//The main place where we add all of the components together

import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Overview from "./components/overview";
import Pricing from "./components/pricing";
import Process from "./components/process";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
      <div className="relative isolate overflow-hidden">
        <Header/>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Overview />
              </>
            } />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;