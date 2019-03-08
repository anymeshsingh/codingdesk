import React, { Component } from 'react';
import './App.scss';
import CodeEditor from './components/CodeEditor/CodeEditor'
import WindowLayout from './components/WindowLayout/WindowLayout';
import Html from './components/HtmlComponent/Html';
import Css from './components/CssComponent/Css';
import Javascript from './components/JavascriptComponent/Javascript';
import Browser from './components/Browser/Browser';
// import TestLayout from './components/TestLayout/TestLayout';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projectState: { html: '<!--Add your HTML here-->\n<h1 id="h1">Hello World<h1>',
                      css: '/*CSS goes here!*/\nbody{background: lightgrey}',
                      js: '//JS goes here\ndocument.getElementById("h1").innerHTML = document.getElementById("h1").innerHTML + "!!!"' 
                    },
      htmlEditor: { isVisible: false, maximized: false
                  },
      cssEditor: {
                    isVisible: false, maximized: false
                  },
      jsEditor: {
                  isVisible: false, maximized: false
                },
      bowserWindow: {
                      isVisible: false, maximized: false
                    },
      codeEditorWindow: {
                        isVisible: true, maximized: true
                      },
    }
    this.html = false;
  }

  handleHtmlChange = (html) => {
    this.setState({...this.state, projectState:{ ...this.state.projectState, html}});
  }
  handleCssChange = (css) => {
    this.setState({...this.state, projectState:{ ...this.state.projectState, css}});
  }
  handleJsChange = (js) => {
    this.setState({...this.state, projectState:{ ...this.state.projectState, js}});
  }
  handleProjectStateChange = (projectState) => {
    this.setState({...this.state, projectState:{ ...this.state.projectState, ...projectState}}
  )}



  render() {
    return (
      <div className="app">
      <WindowLayout windowState={this.state.htmlEditor} component={<Html key="html" content={this.state.projectState.html} handleHtmlChange={this.handleHtmlChange} />} />
      <WindowLayout windowState={this.state.cssEditor} component={<Css key="css" content={this.state.projectState.css} handleCssChange={this.handleCssChange} />} />
      <WindowLayout windowState={this.state.jsEditor} component={<Javascript key="js" content={this.state.projectState.js} handleJsChange={this.handleHtmlChange} />} />
      <WindowLayout windowState={this.state.browser} component={<Browser key="browser" currentState={this.state.projectState} />} />
      <WindowLayout windowState={this.state.codeEditorWindow} component={<CodeEditor key="codeEditor" handleProjectStateChange={this.handleProjectStateChange} currentState={this.state.projectState} />} />

        <div className="dock">
          <span className="fab fa-html5 html5"></span> 
          <span className="fab fa-css3 css3"></span>
          <span className="fab fa-js js-logo"></span>
          <span className="fas fa-globe-asia globe"></span>
          <span className="fas fa-code code"></span>
        </div>
      </div>
    );
  }
}

export default App;
