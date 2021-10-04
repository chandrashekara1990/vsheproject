import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

class Home extends Component{

    render(){
     return(
         <div>
             <h1>This is a Home Page</h1>
             <NavLink to= "/about-us">About Page</NavLink>
             <br/>
             <NavLink to ="/login">Login Page</NavLink>
             <br/>
             <NavLink to="/contact">Contact </NavLink>
             <br/>
             <NavLink to="/product">Product</NavLink>
             <br/>
             <NavLink to="/mail"> Go To Mail Page</NavLink>
         </div>
     )
    }
}

export default  Home;