import React, { Component } from 'react';
import './mainPageProjects.css';

import {Slide} from 'react-reveal';
import DronesProject from './DronesProject.jpg';
import Mvc4Crud from './mvc4Crud.jpg';
import Website from './website.png';
import Library from './library.jpg'

// Services
import HttpService from '../services/http-service';



const http = new HttpService();




class mainPageProjects extends Component {
    constructor(props) {
    super(props);
        var photoList= [];
        var first,second,third,fourth;
        first = {
            src: DronesProject,
            sectionColor: "blackText",
            Modeltext:"The purpose of this project is to develop an algorithm that gives the done the ability to respond in real time to the nearby drones. The algorithm will allow the drones to get inputs from the surroundings while taking into consideration the existing conditions in the area, in order to fly as a flock with a determined target."
        }
        second = {
            src: Library,
            sectionColor: "blackText",
            Modeltext:"This project is for electronic library services. The system is built in a java-eclipse environment. It is a decentralized operating system, so it is possible to work with the system from multiple work stations at the same time by different users. The system is built on a client-server architecture and includes a relational Data-Base. The communication between the client side and the system server is based on an IP / TCP based communication infrastructure.",
        }
        third = {
            src: Mvc4Crud,
            sectionColor: "blackText",
            Modeltext:"A task management system that built with web technologies of MS Sql Server, Asp.Net C#, Angular 2,Bootstrap 4. The system is responsive.",
        }
        fourth = {
            src: Website,
            sectionColor: "blackText",
            Modeltext:"Web page with html, css and a little javascript, responsive for all devices.",
        }
        photoList.push(first);
        photoList.push(second);
        photoList.push(third);
        photoList.push(fourth);
        
        this.state = ({
           projectsList: [],
            projectsImg: photoList,
            ModelTitle: "",
            ModelImg: null,
            Modeltext: "",
        });
        
        
        this.loadRepo = this.loadRepo.bind(this);
        this.getProjectsList = this.getProjectsList.bind(this);
        this.putCardData = this.putCardData.bind(this);
        this.loadRepo();
  }
    
  componentDidMount() {
    
  }
  
    loadRepo = () => {
	    var self = this;
	    http.getProjects('').then(data => {
              var tempList = [];
              for(var i = 0;i < data.length; i++) {
                  var temp = {
                      src: this.state.projectsImg[i],
                      projectData: data[i],
                  };
                  tempList.push(temp);
              }            
	    
		  self.setState({projectsList: tempList});
              console.log(this.state.projectsList);
	    }, err => {
		  
	    });
	}
    
    getProjectsList = () => {
        if(this.state.projectsList) {
            const list = this.state.projectsList.map((project) => 
            <li className={"upIL"} key={project.projectData.fileName} >
                <figure class="effect-ming">
                    <img className="projectImg" src={project.src.src} alt=""/>
				<figcaption className={project.src.sectionColor}>
                            <h2>{project.projectData.fileName}</h2>
				<a data-toggle="modal" data-target="#projectModal" onClick={() => this.putCardData(project)}></a>
                    </figcaption>			
                </figure>
            </li>                                      
	    );
            return (list);
        }
        
    }
    
    putCardData = (project) => {
        this.setState({
            ModelTitle: project.projectData.fileName,
            ModelImg: project.src.src,
            Modeltext: project.src.Modeltext
            });
        console.log(project.src.Modeltext);
    }
    
  render() {
    return (
        <div className="mainPageProjects col-sm-12">
            <div className="row">
                <Slide bottom>
                    <h1 className="homePageTitles onWhiteTitle">my projects</h1>
                </Slide>
            </div>
           <ul className="grid projectsList">
               
                {this.getProjectsList()}
              
            </ul> 
            <hr />
            <div className="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.state.ModelTitle}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <img className="modelImg" src={this.state.ModelImg} alt=""/>
                    <p className="projectDesc">{this.state.Modeltext}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        
    );
  }
}

export default mainPageProjects;