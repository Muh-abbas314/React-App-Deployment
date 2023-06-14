// import  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//**************HOME */ 
import Home from "./router/Home";
import About from "./router/About";
import VansComp from "./router/VansComp";
import VanDetail from "./router/VanDetail";
import Layout from "./Layout Comp/Layout";
// *************HOST
// import Dashboard from "./Host Comp/Dashboard";
// import Dashboard from "../Host Comp/Dashboard";
import Dashboard from "./Host Comp/Dashboard";
import Income from "./Host Comp/Income";
import Review from "./Host Comp/Review";
import Host from "./Layout Comp/HostLayout";
import ListedVans from "./Host Comp/ListedVans";
import ListedVanDetail from "./Host Comp/VanListedDetail";
// **************Vans/id/ Routes
import HostVanDetail from "./Host Comp/HostVanDetail";
import HostVanPhoto from "./Host Comp/HostVanPhoto";
import HostVanPrice from "./Host Comp/HostVanPrice";
// *****************END
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './server';

function App() {
  return (
    <BrowserRouter>
      <div className="router-container">
       
      <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="vans" element={<VansComp/>}/>
        <Route path='vans/:id' element={<VanDetail/>}/>
        <Route path='host' element={<Host/>}>
          {/* <Route path="/host" element={<Dashboard/>}/> */}
          <Route index element={<Dashboard/>}/>
          <Route path="income" element={<Income/>}/>
          <Route path='reviews' element={<Review/>}/>
          <Route path='vans' element={<ListedVans/>}/>
          <Route path="vans/:id" element={<ListedVanDetail/>}>
          <Route index element={<HostVanDetail/>}/>
          <Route path="pricing" element={<HostVanPrice/>} />
              <Route path="photos" element={<HostVanPhoto/>} />
          </Route>
        </Route>
       </Route>
       
      </Routes>
      <footer>
      Ⓒ 2023 #VANLIFE
      </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
