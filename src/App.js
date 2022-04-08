import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';

import{
  Routes as Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

// This is Version 3 Darkmode 

function App() {
  return (
    <Router>
    <Navbar />

    <div className='container'>
    <Switch>
      <Route path="/" element={<Form />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
    </Switch>
    </div>


    <Footer />
    </Router>
  );
}

export default App;
