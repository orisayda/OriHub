import React, { Component } from 'react';
import './fileListItem.css';

// Services
import HttpService from '../services/http-service';

import DataService from '../services/data-service';
//import notificationService, {NOTIF_FILEORFOLDER_CHANGED,NOTIF_FILESLIST_CHANGED,NOTIF_CURRENTFOLDER_CHANGED} from '../services/notification-service';
import {
    NavLink,
} from "react-router-dom";


// Components


let ds = new DataService();



const http = new HttpService();

const ifFile = (<svg className="octicon octicon-file-directory" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>);

const ifFolder = (<svg className="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>);

class fileListItem extends Component {
  
    constructor(props) {
		super(props);
            
            var URLtitle, FOF;
        
            if(this.props.file.fileOrFolder) {
                FOF = true;
                URLtitle = "/repositories/Repo";
            } else {
                FOF = false;
                URLtitle = "/repositories/Repo/fileContent";
            }
        
            this.state = {
                fileName: this.props.file.fileName,
                fileOrFolder: FOF,
                repoUrl: URLtitle,
            };
            
        
            this.onFileClick =this.onFileClick.bind(this);
    }
    
    onFileClick = () => {
        
        if(this.state.fileOrFolder) {
            http.getProjects(ds.getCurrentFile()+"/"+this.state.fileName).then(data => { 
            ds.putNewFilesList(data);
            ds.changedCurrnetFile(ds.getCurrentFile()+"/"+this.state.fileName);
        });
        } else {
	    http.getContent(ds.getCurrentFile()+"/"+this.state.fileName).then(data => {
             
              ds.changedFileOrFolder(false);
              ds.putNewFileContent(data);
              
	    }, err => {
		  console.log("Can't get file content from the server! ")
	    });    
        }
    }
    
     fileOrFolderPic = () => {
        if(this.state.fileOrFolder) {
            return ifFolder;
        } else {
            return ifFile;
        }
    }
    
    render() {
    return (
        <li className="list-group-item fileLink" >
            <ul className="ULFiles">
                <li className="item-file-list">
                    {this.fileOrFolderPic()}
                </li>
                <li className="item-file-list">
                    <NavLink onClick={() => this.onFileClick()} to={this.state.repoUrl} className="list-group-item list-group-item-action flex-column align-items-start repoLink">
		  	{this.state.fileName} 
		  </NavLink>
                </li>
            </ul> 
        </li>
        );
    }
}

export default fileListItem;