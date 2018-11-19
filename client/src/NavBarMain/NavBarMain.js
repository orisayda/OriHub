import React, { Component } from 'react';
import logo from './OriHubBlack.png';
import DropDownGit from './dropDownGit.png';
import './NavBarMain.css';
import {
  NavLink,
} from "react-router-dom";

// Services
//import HttpService from '../services/http-service';
//
//const http = new HttpService();

class NavBarMain extends Component {
render() {
	  return (
           <nav className="navbar NavBarMain navbar-expand-lg navbar-dark bg-dark" id="navbar">
              <button className="navbar-toggler myNavBarToggler" type="button" data-toggle="collapse" data-target="#navbarTogglerOriHub" aria-controls="navbarTogglerOriHub" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
              </button>
                <div className="divNavBar">
                    <NavLink to="/" className="navBarLinks">
                        <img src={logo} alt=""></img>
                    </NavLink>
                </div>
                
                <div className="container listNavBar">
                    <div className="collapse navbar-collapse" id="navbarTogglerOriHub">
                <ul className="navbar-nav ">
                  
                  <li className="nav-item navBarItems">
                     <NavLink to="/repositories" className="navBarLinks">
                        repositories
                    </NavLink>
                  </li>
                  <li className="nav-item navBarItems">
                    <NavLink to="/MyResume" className="navBarLinks">
                        Resume
                    </NavLink>
                  </li>
                  <li className="nav-item navBarItems">
                       <NavLink to="/" className="navBarLinks">
                        
                    </NavLink> 
                  </li>
                    
                    </ul>
                    </div>
                    <div className="MyDropDown navBarItemRight">
                        <ul className="navbar-nav">
                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img alt="@orisayda" className="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/24990727?s=40&amp;v=4" height="20" width="20" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">My repositories</a>
                              <a className="dropdown-item" href="#">My resume</a>
                             
                              
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
	    
	  );
	}

}

export default NavBarMain;