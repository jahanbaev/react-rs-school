import { Routes, Route } from 'react-router-dom';

import Nav from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav pages={["", "about"]}/>
      </header>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
