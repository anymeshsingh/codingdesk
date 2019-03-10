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
      projectState: { html: '<!--Add your HTML here-->\n<h1 id="h1">Hello World</h1>',
                      css: '/*CSS goes here!*/',
                      js: '//JS goes here' 
                    },
      htmlEditor: { 
                    title: 'HTML Editor',
                    isVisible: false,
                    maximized: false,
                    minimized: false,
                    onTop: false
                  },
      cssEditor: {
                    title: 'CSS Editor',
                    isVisible: false,
                    maximized: false,
                    minimized: false,
                    onTop: false
                  },
      jsEditor: {
                  title: 'Javascript Editor',
                  isVisible: false,
                  maximized: false,
                  minimized: false,
                  onTop: false
                },
      browser: {
                title: 'Browser',
                isVisible: false,
                maximized: false,
                minimized: false,
                onTop: false
              },
      codeEditor: {
                    title: 'Code Editor',
                    isVisible: true,
                    maximized: true,
                    minimized: false,
                    onTop: true
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

  handleWindowClose = (key) => {
    this.setState({...this.state,[key]: {...this.state[key],isVisible: false}});
  }
  handleWindowMinimize = (key) => {
    this.setState({...this.state, [key]: {...this.state[key], maximized: false, minimized: !this.state[key].minimized}});
  }

  handleWindowMaximize = (key) => {
    this.setState({...this.state, [key]: {...this.state[key], maximized: !this.state[key].maximized}});
  }
  handleWindowOnTop = (key) => {
    this.setState({
      ...this.state,
      htmlEditor:{ ...this.state.htmlEditor, onTop: false },
      cssEditor:{ ...this.state.cssEditor, onTop: false },
      jsEditor:{ ...this.state.jsEditor, onTop: false },
      codeEditor:{ ...this.state.codeEditor, onTop: false },
      browser:{ ...this.state.browser, onTop: false },
      [key]: { ...this.state[key], onTop: true}
    })
  }

  render() {

    let htmlEditor = this.state.htmlEditor.isVisible ?  <WindowLayout windowState={this.state.htmlEditor} close={this.handleWindowClose} minimize={this.handleWindowMinimize} maximize={this.handleWindowMaximize} onTop={this.handleWindowOnTop} component={<Html key="htmlEditor" content={this.state.projectState.html} handleHtmlChange={this.handleHtmlChange} />} /> : null;
    let cssEditor = this.state.cssEditor.isVisible ? <WindowLayout windowState={this.state.cssEditor} close={this.handleWindowClose} minimize={this.handleWindowMinimize} maximize={this.handleWindowMaximize} onTop={this.handleWindowOnTop} component={<Css key="cssEditor" content={this.state.projectState.css} handleCssChange={this.handleCssChange} />} /> : null;
    let jsEditor = this.state.jsEditor.isVisible ? <WindowLayout windowState={this.state.jsEditor} close={this.handleWindowClose} minimize={this.handleWindowMinimize} maximize={this.handleWindowMaximize} onTop={this.handleWindowOnTop} component={<Javascript key="jsEditor" content={this.state.projectState.js} handleJsChange={this.handleHtmlChange} />} /> : null;
    let browser = this.state.browser.isVisible ? <WindowLayout windowState={this.state.browser} close={this.handleWindowClose} minimize={this.handleWindowMinimize} maximize={this.handleWindowMaximize} onTop={this.handleWindowOnTop} component={<Browser key="browser" currentState={this.state.projectState} />} /> : null;
    let codeEditor = this.state.codeEditor.isVisible ? <WindowLayout windowState={this.state.codeEditor} close={this.handleWindowClose} minimize={this.handleWindowMinimize} maximize={this.handleWindowMaximize} onTop={this.handleWindowOnTop} component={<CodeEditor key="codeEditor" handleProjectStateChange={this.handleProjectStateChange} currentState={this.state.projectState} />} /> : null;

    return (
      <div className="app">
        {htmlEditor}
        {cssEditor}
        {jsEditor}
        {browser}
        {codeEditor}
      

        <div className="dock">
          <span className="fab fa-html5 html5" onClick={()=>{ this.setState({...this.state, htmlEditor:{ ...this.state.htmlEditor, isVisible: true }}, ()=>{this.handleWindowOnTop('htmlEditor')}) }}></span> 
          <span className="fab fa-css3 css3" onClick={()=>{ this.setState({...this.state, cssEditor:{ ...this.state.cssEditor, isVisible: true }}, ()=>{this.handleWindowOnTop('cssEditor')}) }}></span>
          <span className="fab fa-js js-logo" onClick={()=>{ this.setState({...this.state, jsEditor:{ ...this.state.jsEditor, isVisible: true }}, ()=>{this.handleWindowOnTop('jsEditor')}) }}></span>
          <span className="fas fa-globe-asia globe" onClick={()=>{ this.setState({...this.state, browser:{ ...this.state.browser, isVisible: true }}, ()=>{this.handleWindowOnTop('browser')}) }}></span>
          <span className="fas fa-code code" onClick={()=>{ this.setState({...this.state, codeEditor:{ ...this.state.codeEditor, isVisible: true }}, ()=>{this.handleWindowOnTop('codeEditor')}) }}></span>
        </div>
      </div>
    );
  }
}

export default App;
