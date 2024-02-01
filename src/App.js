import './App.css';
import Navbar from './components/navbar';
import home from './pages/Home';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={home} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
