import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Tracking from './pages/Tracking';
import GetStarted from './pages/GetStarted';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Closure from './components/Closure';
import About from './pages/About';

const App = () => {
   return (
      <Router>
         <div className="text-[#1e2939] w-full h-full flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/get-started" element={<GetStarted />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
               </Routes>
            </main>
            <Closure />
            <Footer />
         </div>
      </Router>
   );
};

export default App;