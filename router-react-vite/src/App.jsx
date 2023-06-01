// import  from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import logo1 from '../src/assets/logog.svg'
import Home from "./router/Home";
import About from "./router/About";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <div className="router-container">
      <header>
        <Link className="site-logo" to="/">
          <img src={logo1} width={"144px"}/>
        </Link>
        <nav>
          <Link className="about" to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
      Ⓒ 2023 #VANLIFE
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
