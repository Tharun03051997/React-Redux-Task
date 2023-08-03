import "./App.css";
 import { Route, Routes, NavLink} from 'react-router-dom';
 import Home from "./Pages/Home";
 import Services from "./Pages/Services";
 import Cart from "./Pages/Cart";
import AddService from "./Forms/AddService";

 function App()
 {
  return  (
     <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
          <NavLink to="/Services">Services</NavLink>
          </li>
          
      </ul>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/services" Component={Services}/>
       <Route path="/Addservices" Component={AddService}/>
           
        
      </Routes>
  </div>
  )
 }

 export default App;