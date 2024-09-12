import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Details from './Details';
import Adopt from './Adopt';
import About from './About';
import Tiger from './tiger';
import Leopard from './leopard';
import Hyena from './hyena';
import Crocodile from './crocodile';
import Bear from './bear';
import { BrowserRouter as Router, Route, Routes, useNavigate }  from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/About" element={<About />} />
            <Route path="/details/tiger" element={<Tiger />} />
            <Route path="/details/leopard" element={<Leopard />} />
            <Route path="/details/hyena" element={<Hyena />} />
            <Route path="/details/crocodile" element={<Crocodile />} />
            <Route path="/details/bear" element={<Bear />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
