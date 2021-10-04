import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

class AboutUs extends Component{

    render(){
     return(
         <div>
             <h1>This is a About-Us Page</h1>
             <NavLink to= "/">Home Page</NavLink>
             <br/>
             <NavLink to ="login">Login Page</NavLink>
             <br/>
             <NavLink to="contact">Contact </NavLink>
             <br/>
             <NavLink to="product">Product</NavLink>
         </div>
     )
    }
}

export default  AboutUs;