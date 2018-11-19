import React, { Component } from 'react';
import './resumeDisplay.css';

// Services
import HttpService from '../services/http-service';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const http = new HttpService();


class ResumeDisplay extends Component {
    
    constructor(props) {
	    super(props);
	    
          this.state = {jpgFile:null};
            
        // Bind functions
          this.loadPic = this.loadPic.bind(this);
          this.loadPic();
        
	}
    
    loadPic = () => {
	    http.getImg().then(images => {
              // Then create a local URL for that image and print it
                
              var myImage = document.querySelector('.picResume');
              var objectURL = URL.createObjectURL(images);
              //objectURL = objectURL.substr(5);
                myImage.src = objectURL;
          });
    }
    
    
    
    render() {
	  return (
            <Slide bottom ssrFadeout>
                    <div className="card resumeCard">
                    <Fade ssrFadeout>
                        <div className="card-header">
                            My Resume
                        </div>
                    </Fade>
                  <div className="card-body resumeBody">
                        <img id="mainCanvas" className="picResume" alt="" />
                  </div>
            </div>
            </Slide>
	  );
	}
}

export default ResumeDisplay;