import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar'

import{
  Routes as Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

<<<<<<< HEAD
// This is Master Branch
=======
// This is Version 2 
>>>>>>> version-2

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
