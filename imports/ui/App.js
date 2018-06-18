import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
 
import { ColorTemplates } from '../api/colorTemplates.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.state = {view: "home"};
  }

  handleStartClick() {
    this.setState({view: "colorPage"});
  }

  handleUploadClick() {
    this.setState({view: "uploadPage"});
  }

  render() {
    const view = this.state.view;
    let page;

    if (view === "home") {
      page = 
        <div>
          <h1>
            <header>
              ZEN COLORING
            </header>
          </h1>
    
          <div id="left">
            <ul>
                <img src="images/sample.jpg"/>
            </ul>
          </div>
    
          <div id="right">
            <ul>
              <p className="subTheme">
                <img src="images/IMG_multiArea.jpg"/>
                  Multi-Area Selection
              </p>

              <p className="descTheme">
                Select multiple areas to color simultaneously.
              </p> 

              <p className="subTheme">
                <img src="images/IMG_lineSelection.jpg"/>
                  Line Coloring
              </p>
              <p className="descTheme">
                The lines can be colored as well.
              </p>
          
              <p className="subTheme">
                <img src="images/IMG_upload.jpg"  />
                  Upload
              </p>
              <p className="descTheme">
                Upload your own templates; Use templates contributed by other users.
              </p>
          
              <p className="subTheme">
                <img src="images/IMG_save.jpg"/>
                  Save
              </p>
              <p className="descTheme">
                Save your art, and do whatever you want with it.
              </p>
            </ul>
          </div>
    
          <div className ="buttons">
              <button onClick={this.handleStartClick}>
                <p className="buttonTop">START</p>
                <p className="buttonBottom">Choose an existing template</p>
              </button>

              <button onClick={this.handleUploadClick}>
                <p className="buttonTop">UPLOAD</p>
                <p className="buttonBottom">Upload your own template</p>
              </button>
          </div>
        </div>
      ;
      
    } else if (view === "colorPage") {
      page = 
        <div>
          <h1>
            <header>
              ZEN COLORING
            </header>
          </h1>
          
          <div className="coloringBody">
            <div className="vert-bar">
              <canvas id="picker"></canvas>
              <input id="color" value="54aedb"></input>
    
              <div className="pickButton">
                <button>Brush</button>
                <button>Fill</button>
              </div>
                 
              <div className="sizeSlider">
                <p> Brush size </p>
                  <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"></input>
              </div>

              <div className="opacitySlider">
                <p> Brush opacity </p>
                <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"></input>
              </div>
           
              <p> Color Lineart </p>
              <div className="pickButton">
                <button>On</button>
                <button>Off</button>
              </div>
            </div>
    
            <div className="horiz-bar">
              <button><img id="eyedropperImg" src="images/IMG_eyedropper.png"/></button>
              <button><img id="undoImg" src="images/IMG_undo.png"/></button>
              <button><img id="redoImg" src="images/IMG_undo.png"/></button>
              <button><img id="zoomInImg" src="images/IMG_zoomIn.png"/>  </button>
              <button><img id="zoomOutImg" src="images/IMG_zoomOut.png"/></button>
              <div className="selectButton">
                <button> Select </button>
                <button> De-select </button>
              </div>
              <button id="saveButton"> Save </button>
            </div>  

            <div className="canvas-container">
              <canvas></canvas>
            </div>  
          </div>  
        </div>
      ;
    } else if (view === "uploadPage") {
      page = 
        <div>
          <h1>
            <header>
              ZEN COLORING
            </header>
          </h1>
          <div className="uploadContainer">
            <p> Upload a .png file with no background </p>
            <input type="file" name="images" className="uploadFileInput"/>
          </div>
        </div>
      ;    
    }

    return (
      <div>
        {page}
      </div>  
    );  
  }
}

 