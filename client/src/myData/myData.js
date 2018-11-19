import React, {Component} from 'react';
import './myData.css';
import profilePic from './oriProfilePic.jpg';


// Services
import {
  NavLink,
} from "react-router-dom";


class myData extends Component {

	

	render() {
              return (
		<div className="card wishList">
			<div className="card-body infoCardMarg">
                      <img alt="" className="profilePicture" src={profilePic}></img>
                      <div className="titles">
                        <h1 className="card-title nameTitle">Ori Sayda</h1>
                          <h2 className="nameTitle">Software engineer</h2>
                      </div>
                          <NavLink to="/" >
                             <button type="submit" className="btn btnBio buttonDisplay">My bio</button>
                          </NavLink> 
                      <div>
                      <ul className="list-group">
                          <li className="eMailLink"><a >orisayda@gmail.com</a></li>
                      </ul>
                    </div>
			</div>
		</div>
		);
          }
	}
export default myData;