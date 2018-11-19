import React, { Component } from 'react';
import './MainRepoPage.css';

// Services
import HttpService from '../services/http-service';
import DataService from '../services/data-service';
import notificationService, {NOTIF_MAINFOLDER_CHANGED} from '../services/notification-service';
import {
  Route,
} from "react-router-dom";


// Components
import MyData from '../myData/myData';
import FilesCard from '../files-cards/files_card';
import FileManegerCard from '../file-maneger-card/file-maneger-card';




let ds = new DataService();
let ns = new notificationService();


const http = new HttpService();


const repo =  <h2 className="repoBoxTitle">Repositories</h2>
                ;

let instance = null;

class MainRepoPage extends Component {

	constructor(props) {
	    super(props);
	    if(!instance) {
                instance = this;
            }
	
	    this.state = {
              repositories:[],
              files:[],
              mainFolder:true,
              isLoading: false,
          };
	    
	    // Bind functions
          this.loadRepo = this.loadRepo.bind(this);
          this.repositoriesList = this.repositoriesList.bind(this);
          this.displayFiles = this.displayFiles.bind(this);
          this.oneRepo = this.oneRepo.bind(this);
          this.displayMyData = this.displayMyData.bind(this);
          this.displayRepoTitle = this.displayRepoTitle.bind(this);
          this.fromPageChanger = this.fromPageChanger.bind(this);
          this.loadRepo();
          this.fromPageChanger();
          return instance;
	}
    
     componentDidMount() {
         ns.addObserver(NOTIF_MAINFOLDER_CHANGED,this,this.loadFolderState);
         
      }
    
      componentWillUnmount() {
          ns.removeObserver(this, NOTIF_MAINFOLDER_CHANGED);
      }

  
      
      loadFolderState = () => {
          this.setState({mainFolder: ds.getMainFolder()});
      }
      
      loadRepo = () => {
          this.setState({isLoading: true});
	    var self = this;
	    http.getProjects('').then(data => {
		  self.setState({repositories: data})
              this.setState({isLoading: false});
	    }, err => {
		  
	    });
	}
      
      fromPageChanger = () => {
              ds.setFromPage(1);
      }
      
      repositoriesList = () => {
          const list = this.state.repositories.map((repositorie) => 
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" key={repositorie.fileName.toString()}>
            <li className="repoCard" key={repositorie.fileName.toString()}>
                  <FileManegerCard repositorie={repositorie}/>                   
            </li>
        </div>
	    );
	    
	    return (list);
      }
      
      oneRepo = () => {
          if(window.location.hash==='#/repositories') {
            const list = (
               <li className="list-group-item mainFilesCard" >
                    <Route path="/repositories/Repo" component={FilesCard}/>
                </li> );
                return (list);  
          } else {
              const list = 
               <li className="list-group-item mainFilesCardWithOutBorder">
                    <Route path="/repositories/Repo" component={FilesCard}/>
                </li> ;
                return (list);  
          }
          
      }
      
      displayRepoTitle = () => {
          if(window.location.hash==='#/repositories') {
              return (repo);
          } else {
              var x;
              return x;
          }
      }
      
      displayMyData = () => {
          if(window.location.hash==='#/repositories') {
              return (<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 infoCard">
			  	<MyData />
			  </div>);
          } else {
              var x;
              return x;
          }
      }
      
      displayFiles = () => {
          if(window.location.hash==='#/repositories') {
              return this.repositoriesList();
          } else {
              return this.oneRepo();
          }
      }

	render() {
          var colClass;
          if(this.state.isLoading) {
              return (
                <div>
                    <p className="isLoading">Loading...</p>
                </div>
                ); 
          } else {
            if(window.location.hash==='#/repositories') {
              colClass="col-lg-9 col-md-9";
          }
          else {
              colClass="col-lg-12 col-md-9";
          }
	       return (
                    <div className="row repoView">
                        {this.displayMyData()}
                        <div className={colClass}>
                            {this.displayRepoTitle()}
                            <ol className="pinned-repos-list">
                                {this.displayFiles()}
                            </ol>
                        </div>
                    </div>
	           );   
          }
	}
}

export default MainRepoPage;
