import React, { Component } from 'react';
import './CodeEditor.scss';
import Html from '../HtmlComponent/Html';
import Css from '../CssComponent/Css';
import Javascript from '../JavascriptComponent/Javascript';
import Browser from '../Browser/Browser';

class CodeEditor extends Component {

  handleHtmlChange = (html) => {
    this.props.handleProjectStateChange({ ...this.state, html })
  }
  handleCssChange = (css) => {
    this.props.handleProjectStateChange({...this.state, css})
  }
  handleJsChange = (js) => {
    this.props.handleProjectStateChange({...this.state, js});
  }

  render() {
    return (
        <div className="main-editor">
            <div className="html-container">
                <div className="title"><span><span className="fab fa-html5"></span> HTML</span></div>
                <div className="content border-right">
                    <Html />
                </div>
            </div>
            <div className="css-container">
                <div className="title"><span><span className="fab fa-css3"></span> CSS</span></div>
                <div className="content border-right">
                    <Css />
                </div>
            </div>
            <div className="js-container">
                <div className="title"><span><span className="fab fa-js"></span> JavaScript</span></div>
                <div className="content">
                    <Javascript />
                </div>
            </div>
            <div className="browser-container">
                <div className="title justify-center"><span><span className="fas fa-globe-asia"></span> Browser</span></div>
                <div className="content">
                    <Browser />
                </div>
            </div>
        </div>
    );
  }
}

export default CodeEditor;
