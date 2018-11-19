import React, { Component } from 'react';
import './files_card.css';

// Services
import HttpService from '../services/http-service';

import DataService from '../services/data-service';
import notificationService, {NOTIF_FILEORFOLDER_CHANGED,NOTIF_FILESLIST_CHANGED,NOTIF_CURRENTFOLDER_CHANGED} from '../services/notification-service';
import {
  Route,
} from "react-router-dom";


// Components
import FileContent from '../fileContent/fileContent';
import FileListItem from '../fileListItem/fileListItem';

let ds = new DataService();
let ns = new notificationService();


const http = new HttpService();


class Files_card extends Component {
  
    constructor(props) {
		super(props);
            
            var FOF;
        const cachedFOF = sessionStorage.getItem('fileOrFolder');
        if(cachedFOF) {
            FOF = JSON.parse(cachedFOF);
        } else {
            FOF = true;
            console.log('havent session storage fileOrFolder');
        }
        this.state = {
                    folderName: JSON.parse(sessionStorage.getItem('currnetFile')),
                    fileList:JSON.parse(sessionStorage.getItem('filesList')),
                    fileOrFolder: FOF,
                    isLoading: false,
                    repoUrl: "/repositories/Repo",
                         };
        
        
            console.log(this.state.folderName);
            this.displayFileContent = this.displayFileContent.bind(this);
            this.getProjectsList = this.getProjectsList.bind(this);
            this.getFilesList = this.getFilesList.bind(this);
            this.mainDisplay = this.mainDisplay.bind(this);
            
            this.loadFileList = this.loadFileList.bind(this);
            //this.loadFileContent = this.loadFileContent.bind(this);
            this.loadCurrnetFileState = this.loadCurrnetFileState.bind(this);
            this.loadFileOrFolder = this.loadFileOrFolder.bind(this);
            this.getSessionData = this.getSessionData.bind(this);
            this.fromPageChanger = this.fromPageChanger.bind(this);
            this.copyToClipboard =this.copyToClipboard.bind(this);
            this.fileContentTitle = this.fileContentTitle.bind(this);
            this.fromPageChanger();
            this.getSessionData();
    }
     componentDidMount() {
         ns.addObserver(NOTIF_FILEORFOLDER_CHANGED,this,this.loadFileOrFolder);
         ns.addObserver(NOTIF_FILESLIST_CHANGED,this,this.loadFileList);
         ns.addObserver(NOTIF_CURRENTFOLDER_CHANGED,this,this.loadCurrnetFileState);
         
     }
    
    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_FILESLIST_CHANGED);
        ns.removeObserver(this, NOTIF_CURRENTFOLDER_CHANGED);
        ns.removeObserver(this,NOTIF_FILEORFOLDER_CHANGED);
      }
    
    fromPageChanger = () => {
          if(ds.getFromPage() === 1) {
              this.setState({repoUrl: "/repositories/Repo"});
              ds.setFromPage(2);
              ds.changedFileOrFolder(true);
          } else if(ds.getFromPage() === 3) {
              this.setState({repoUrl: "/repositories/Repo"});
              ds.setFromPage(2);
              ds.changedFileOrFolder(true);
          }
      }
    
    getSessionData = () => {
        
        const cachedList = sessionStorage.getItem('filesList');
        const cachedCurrentFolder = sessionStorage.getItem('currnetFile');
        if(cachedList) {
            ds.putNewFilesList(JSON.parse(cachedList));
        } 
        if(cachedCurrentFolder) {
            ds.changedCurrnetFile(JSON.parse(cachedCurrentFolder));
        } 
    }
    
    loadFileOrFolder = (FILEORFOLDER) => {
        sessionStorage.removeItem('fileOrFolder');
        sessionStorage.setItem('fileOrFolder',JSON.stringify(FILEORFOLDER));
        this.setState({fileOrFolder: FILEORFOLDER});
        this.fromPageChanger();
    }
    
    loadCurrnetFileState = (currnetFile) => {
        sessionStorage.removeItem('currnetFile');
        sessionStorage.setItem('currnetFile',JSON.stringify(currnetFile));
        this.setState({folderName:currnetFile});
    }

    
    loadFileList = (FileList) => {
        sessionStorage.removeItem('filesList');
        sessionStorage.setItem('filesList',JSON.stringify(FileList));
        this.setState({fileList:FileList});
    }
    
    getProjectsList = () => {
        http.getProjects(this.state.folderName).then(data => {
            ds.putNewFilesList(data);
            this.setState({fileList:ds.filesList});
        });
    }
    
    
    displayFileContent = () => {
          const CONTENT = (  
            <li className="list-group-item cardFileContent">
                <Route path="/repositories/Repo/fileContent" component={FileContent}/>
            </li> 
	    );
	    return (CONTENT);
    }
    
     copyToClipboard = str => {
         console.log(str.fileContents);
      const el = document.createElement('textarea');
      el.value = str.fileContents;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };
   
    
    getFilesList = () => {
        if(this.state.fileList) {
            const list = this.state.fileList.map((file) =>
            <div key={file.fileName.toString()}>
                  <FileListItem file={file} />                               
            </div>
	    );
	    return (list);
        }
        
    }
    
    fileContentTitle = () => {
        if(window.location.hash==='#/repositories/Repo') {
            return (<li className="list-group-item fileLinkHeader">
                      <a>orisayda</a>
                </li>);
        } else {
            return ;
        }
    }
    
    mainDisplay = () => {
        if(window.location.hash==='#/repositories/Repo') {
            return this.getFilesList();
        } else {
            return this.displayFileContent();
        }
    }
    
    render() {
    return (
      <div className="card-header cardMain">
            <div className="sameRow">
                <h2 className="pathName">orisayda </h2> 
                <h3 className="pathName">/ </h3>
                <h2 className="pathName">{ds.getCurrentFile().toString()}</h2>
            </div>
            <div className="card-header cardHeadManeger">
                
          </div>
          <div className="card-body filesBodyCard">
              <ul className="filesList"> 
                {this.fileContentTitle()}
                {this.mainDisplay()}
              </ul>
          </div>
    </div>
    );
  }
}

export default Files_card;