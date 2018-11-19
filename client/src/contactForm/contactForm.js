import React, { Component } from 'react';
import './contactForm.css';


import Slide from 'react-reveal';
// Services
import HttpService from '../services/http-service';

const http = new HttpService();


let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ContactForm extends Component {
    constructor(props) {
    super(props);
        
        this.state = {
            name: "Name",          
            eMail: "Your eMail",
            message: "Message", 
            nameFill: false,
            eMailFill: false,
            messageFill: false,
        };
        
      
       this.sendMeeMail = this.sendMeeMail.bind(this);
       // this.sendMeeMail();
  }
    
  componentDidMount() {
    
  }
    
    
  sendMeeMail = () => {
      console.log(this.state);
      http.sendEmailToMe(this.state.name,this.state.eMail,"eMail by: "+this.state.eMail,this.state.message).then(data => {
          console.log(data);
            if(data) {
                console.log(111)
            } else {
                console.log(data);
            }
        });
  }

  updateInputValue(evt,nameToState) {
      if(nameToState==="name") {
          this.setState({
            name: evt.target.value
            });
          if(evt.target.value !== "Name" && evt.target.value !== "") {
              this.setState({nameFill: true})
          } else {
               this.setState({nameFill: false})
          }
      } else if(nameToState==="eMail") {
              this.setState({
            eMail: evt.target.value
            });
          
          if (re.test(evt.target.value)) {
              this.setState({eMailFill: true})
          } else {
               this.setState({eMailFill: false})
          }
      } else {
          this.setState({
            message: evt.target.value
            });
          if(evt.target.value!=="Message" && evt.target.value !== "") {
              this.setState({messageFill: true})
          } else {
               this.setState({messageFill: false})
          }
      }
  }

  render() {
    return (
        <div className="contactForm col-sm-12">
            <Slide bottom>
                    <h1 className="onBlackTitle homePageTitles">Contact Me</h1>
                </Slide>
            <Slide bottom>
                <input className="formFields col-sm-12" type="name" value={this.state.name} name="name" onChange={evt => this.updateInputValue(evt,"name")} />
            <br/>
                <input className="formFields col-sm-12" type="email" value={this.state.eMail} name="email" onChange={evt => this.updateInputValue(evt,"eMail")} />
            <br/>
                <textarea className="formFields col-sm-12" type="message" value={this.state.message} name="comment" onChange={evt => this.updateInputValue(evt,"message")}/>
            </Slide>
            <br/>
               <Slide left>
                   <button className="submitFormBtn" type="submit" onClick={() => this.sendMeeMail()} disabled={!this.state.nameFill || !this.state.eMailFill || !this.state.messageFill}>
                   Submit</button>
            </Slide> 
            
        </div>
    );
  }
}

export default ContactForm;