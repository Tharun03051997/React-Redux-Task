import React from "react";
import BasicCta from "../Elements/Button/index.style";
import AddService from "../Forms/AddService";
import { Route, Routes, NavLink} from 'react-router-dom';
import Cart from "./Cart";


function Services()
{
    return (
        <div className="page Services-page">
            <div className="row">
              
            <li>
          <NavLink to="/Addservices">AddServices</NavLink>
          </li>
                
            </div>
            
        </div>
    )
}

export default Services;