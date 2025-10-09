import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
  Header, 
  Hero, 
  Features, 
  Overview, 
  Process, 
  About, 
  Contact, 
  Footer, 
  ScrollBackground 
} from "./components";
import { truck1 } from "@/assets";

const App = () => {
  return ( 
    <Router>
      <div className="relative isolate overflow-hidden">
        <ScrollBackground imageUrl={truck1} />
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