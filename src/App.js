import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar'

import{
  Routes as Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

// This is Master Branch

function App() {
  return (
    <Router>
    <Navbar />

    <div className='container'>
    <Switch>
      <Route path="/" element={<Form />} />
    </Switch>
    </div>


    <Footer />
    </Router>
  );
}

export default App;
