import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";


// Services



// Components
import Footer from '../footer/footer';
import NavBarMain from '../NavBarMain/NavBarMain';
import MainRepoPage from '../MainRepoPage/MainRepoPage';
import ResumeDisplay from '../ResumeDisplay/resumeDisplay';
import aboutMe from '../aboutMe/aboutMe';
import TestPt from '../testPt/testPt';


let instance = null;


class App extends Component {

	constructor(props) {
	    super(props);
            if(!instance) {
                instance = this;
            }
	return instance;
	}
    

	render() {
	  return (
             <HashRouter>
              <div className="App">
                  <TestPt id="PTS" />
                <NavBarMain />
                  <div className="container appContainer">
                    <div className="App-main repoView">
                        <Route exact path="/" component={aboutMe}/>
                        <Route path="/MyResume" component={ResumeDisplay}/>
                        <Route path="/repositories" component={MainRepoPage}/>
                    </div>
                  </div>
                <Footer />
              </div>
            </HashRouter>
	  );
	}
}

export default App;
