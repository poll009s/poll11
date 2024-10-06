import react from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
      
     <Router>
      <Routes>
        <Route exact path='/' element={<> <Home/> <About/> <Projects/></>} / >
        <Route path='About'  element={<About/>}/>
      </Routes>
     </Router>
      
    </div>
    </>
  );
}

export default App;
