import React, { Component } from 'react';
import './aboutMe.css';
import arrowUp from './arrowUp.svg';
import Responsive from './functionality-usability.png';
import Simplicity from './simplicity-is-the-key.jpg';
import Fast from './fast.png';
import Innovative from './innovation-tech.jpg';
import config from 'react-reveal/globals';
import {Slide,Fade} from 'react-reveal';
import ContactForm from '../contactForm/contactForm';
import MainPageProjects from '../mainPageProjects/mainPageProjects';

// Services
//import HttpService from '../services/http-service';
//
//const http = new HttpService();




class aboutMe extends Component {
    constructor(props) {
    super(props);
        config({ ssrFadeout: true });
        var photoList= [];
        var first,second,third,fourth;
        first = {
            src: Responsive,
            sectionName: "Responsive",
            sectionText: "Web design that optimized for any device.",
        }
        second = {
            src: Simplicity,
            sectionName: "Simplicity",
            sectionText: "Web design that easy to use by the users.",
        }
        third = {
            src: Fast,
            sectionName: "Fast",
            sectionText: "Fast and error-free loading times.",
        }
        fourth = {
            src: Innovative,
            sectionName: "Innovative",
            sectionText: "Use new technologies for better UX and UI.",
        }
        photoList.push(first);
        photoList.push(second);
        photoList.push(third);
        photoList.push(fourth);
        this.state = {
                    photoList: photoList,
                         };
       this.createAboutMeHeadLines = this.createAboutMeHeadLines.bind(this);
        this.toTheTop = this.toTheTop.bind(this);
  }
    
  componentDidMount() {
    
  }
    
    toTheTop = () => {
        window.scrollTo(0, 0);
    }
    
  
  createAboutMeHeadLines = () => {
        if(this.state.photoList) {
            const list = this.state.photoList.map((photo) =>
            
                <li className="card aboutMeCard col-lg-3 col-xs-6" key={photo.src}>
                  <img className="card-img-top aboutMeImg" src={photo.src} alt="some Text" />
                  <div className="card-body">
                    <h5 className="card-title">{photo.sectionName}</h5>
                    <p className="sectionText">{photo.sectionText}</p>
                  </div>
            </li>                           
	    );
	    return (list);
        }
        
    }
    
  render() {
    return (
        <div className="aboutMeCards">
            <div className="row">
                <Slide bottom>
                    <h1 className="homePageTitles onWhiteTitle"> About Me </h1>
                </Slide>
            </div>
            <Fade bottom cascade>
            <ul className="row aboutMeList">
                 {this.createAboutMeHeadLines()}
            </ul>
            </Fade>
            <hr />
            <div className="row">
                <MainPageProjects />
            </div>
            <div className="row">
                <ContactForm />
            </div>
            
            <a href="/#" rel="nofollow"><img className="arrowUp" src={arrowUp} alt="" /></a> 
            
        </div>
    );
  }
}

export default aboutMe;