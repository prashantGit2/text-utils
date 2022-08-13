import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import TextUtil from './components/TextUtil';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (<Router>
    <div className='body'>
      <Navbar Link={Link} title="TextUtils" dark={darkMode} setDarkMode={setDarkMode} />
      <div className={`${darkMode?"bg-light":"bg-white"}  body`}>
      <Routes>
          
          <Route path="/" element={<Container><TextUtil heading="Enter text"/></Container>}>
            
          </Route>
          <Route path="/about" element={<Container><About /></Container>}>
            </Route>
          
          
      </Routes>
        
        
      </div>
    </div>
    </Router>
  );
}

export default App;
