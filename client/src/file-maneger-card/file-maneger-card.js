import React, { Component } from 'react';
//import logo from './OriHubBlack.png';
import './file-maneger-card.css';

// Services
import HttpService from '../services/http-service';
import {
  NavLink,
} from "react-router-dom";


// Components
import DataService from '../services/data-service';


let ds = new DataService();

const http = new HttpService();

class fileManegerCard extends Component {
    
    constructor(props) {
        super(props);
        
        
        this.whichRepo = this.whichRepo.bind(this);
        
    }
    
    whichRepo = () => {
	    http.getProjects(this.props.repositorie.fileName).then(data => {
              sessionStorage.setItem('currnetFile',JSON.stringify(this.props.repositorie.fileName));
              ds.changedCurrnetFile(this.props.repositorie.fileName);
              ds.changedTAFMainFolder();
              ds.putNewFilesList(data);
	    }, err => {
		  
	    });
        
        
    }
    
render() {
	  return (
	   <div className="card">
          <div className="card-body">
              <NavLink to="/repositories/Repo" onClick={this.whichRepo} className="list-group-item list-group-item-action flex-column align-items-start repoLink" >
                 {this.props.repositorie.fileName}
                  </NavLink>
                <p className="mb-1">{this.props.repositorie.fileName}</p>
                <small>{this.props.repositorie.fileType}</small>
        </div>
        </div>
	  );
	}
}

export default fileManegerCard;
