import React from 'react';
import './estPt.css' ;
// For ES5 builds, import from 'pts/dist/es5'. For ES6 or custom builds, import from 'pts'.
import {CanvasSpace, Line, Pt, Group} from 'pts'; 
import ReactRevealText from "react-reveal-text";

const one_degree=0.01;
var textArray = [];

export default class PtsCanvas extends React.Component {
  constructor(props) {
    super(props);
        this.pairs = [];
        this.canvRef = React.createRef();
        this.space = null;
        this.form = null;
        
        textArray.push("Hello, I'm Ori Sayda");
        textArray.push("I'm Software Engineer ");
        this.state = { 
            show: false,
            seconedShow: false,
            myText: textArray[0],
            seconedText: textArray[1],
            i: 0,
        };
        
        
       
  }

  componentDidMount() {
    this.init();
    this._loop();
      setTimeout(() => {
      this.setState({ show: true });
    }, 500);
      setTimeout(() => {
      this.setState({ seconedShow: true });
    }, 3500);
  }

  componentDidUpdate() {
    this._loop();
  }

    
    
    
  _loop() {
      this.space.bindMouse().bindTouch().play();
    if (this.props.loop) {
      this.space.play();
    } else {
      this.space.playOnce(0);
    }
  }


  // Required: Override this to use Pts' player `animate` callback
  // See guide: https://ptsjs.org/guide/space-0500
  animate( time, ftime) {
    for (let i=0, len=this.pairs.length; i<len; i++) {

        // rotate each line by 0.1 degree and check collinearity with pointer
        let ln = this.pairs[i];
        ln.rotate2D( one_degree/10, this.space.center );
        let collinear = Line.collinear( ln[0], ln[1], this.space.pointer, 0.1);

        if (collinear) {
          this.form.stroke("#fff").line(ln);

        } else {
          // if not collinear, color the line based on whether the pointer is on left or right side
          let side = Line.sideOfPt2D( ln, this.space.pointer );
          this.form.stroke( (side<0) ? "rgba(255,255,0,.1)" : "rgba(0,255,255,.1)" ).line( ln );
        }
        this.form.fillOnly("rgba(255,255,255,0.8").points( ln, 1);
      }

      this.form.fillOnly("#fff").point( this.space.pointer, 0.1, "circle");
  }

  
  // Optional: Override this to use Pts' player `start` callback
  start( space) {
      let r = space.size.minValue().value/2;

      // create 200 lines
      for (let i=0; i<120; i++) {
        let ln = new Group( Pt.make(2, r, true), Pt.make(2, -r, true) );
        ln.moveBy( 100 ).rotate2D( i*Math.PI/5, space.center );
        this.pairs.push(ln );
      }
  }


  // Optional: Override this to use Pts' player `resize` callback
  resize( size, evt ) {}


  // Optional: Override this to use Pts' player `action` callback
  action ( type, px, py, evt ) {}


   init() {
    this.space = new CanvasSpace( this.canvRef ).setup({bgcolor: this.props.background, resize: true, retina: true});
    this.form = this.space.getForm();

    this.space.add( this );
    this.space.bindMouse().bindTouch();
  }

  render() {
    return (
      <div className="canv">
            <canvas className="canv" ref={ c => (this.canvRef=c) } />
        <div className="bgStyles">
        <div className="textStyles">
          <ReactRevealText show={this.state.show} text={this.state.myText} />
          <ReactRevealText show={this.state.seconedShow} text={this.state.seconedText} />
        </div>
      </div>
      </div>
    );
  }
}


PtsCanvas.defaultProps = {
  name: "pt", // maps to className of the container div
  background: "#252934",
  resize: true,
  retina: true,
  loop: true
}