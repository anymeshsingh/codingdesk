import React, { Component } from 'react';
import './App.scss';
//Components
import CodeEditor from './components/CodeEditor/CodeEditor'
import WindowLayout from './components/WindowLayout/WindowLayout';
import Html from './components/HtmlComponent/Html';
import Css from './components/CssComponent/Css';
import Javascript from './components/JavascriptComponent/Javascript';
import Browser from './components/Browser/Browser';

// Redux
import { connect } from 'react-redux';
import { closeWindow } from './store/actions/windowActions';
import { onTopWindow } from './store/actions/windowActions';

// React-Bootstrap
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends Component {

  constructor(){
    super();
    this.appRef = React.createRef()
    this.contextMenuRef = React.createRef()
    this.state = {
      contextMenu: {
        isVisible: false,
        x: 0,
        y: 0
      }
    }
  }

  openContextMenu = (e) => {
    e.preventDefault();
    let windowHeight = this.appRef.current.offsetHeight;
    let windowWidth = this.appRef.current.offsetWidth;
    this.setState({contextMenu: {
      isVisible: true,
      x: (e.pageX > (windowWidth - 227 )) ? (e.pageX - 227) : e.pageX,
      y: (e.pageY > (windowHeight - 150 )) ? (e.pageY - 150) : e.pageY
    }})
  }

  closeContextMenu = () => {
    if(this.state.contextMenu.isVisible){
      this.setState({contextMenu:{isVisible:false,x:0,y:0}});
    }
  }

  render() {

    let htmlEditor = this.props.windowsState.htmlEditor.isVisible ?  <WindowLayout component={<Html key="htmlEditor" />} /> : null;
    let cssEditor = this.props.windowsState.cssEditor.isVisible ? <WindowLayout component={<Css key="cssEditor" />} /> : null;
    let jsEditor = this.props.windowsState.jsEditor.isVisible ? <WindowLayout  component={<Javascript key="jsEditor" />} /> : null;
    let browser = this.props.windowsState.browser.isVisible ? <WindowLayout component={<Browser key="browser" />} /> : null;
    let codeEditor = this.props.windowsState.codeEditor.isVisible ? <WindowLayout component={<CodeEditor key="codeEditor"  />} /> : null;
    let contextMenu = this.state.contextMenu.isVisible ? 
                      (<div ref={this.contextMenuRef}>
                        <ListGroup style={{position: 'absolute', zIndex: '200', top: this.state.contextMenu.y, left: this.state.contextMenu.x}}>
                          <ListGroup.Item action style={{cursor: 'default'}}>Save Current Project</ListGroup.Item>
                          <ListGroup.Item action style={{cursor: 'default'}}>Save Current Project As...</ListGroup.Item>
                          <ListGroup.Item action style={{cursor: 'default'}}>Preferences</ListGroup.Item>
                        </ListGroup>
                      </div>) : null
    return (
      <div className="app" onContextMenu={this.openContextMenu} onClick={this.closeContextMenu} ref={this.appRef}>
        {htmlEditor}
        {cssEditor}
        {jsEditor}
        {browser}
        {codeEditor}
        {contextMenu}
      

        <div className="dock">
          <OverlayTrigger placement="top" overlay={<Tooltip id='tooltip-top'>HTML Editor</Tooltip>}>
            <span className="fab fa-html5 html5" onClick={() => { this.props.open('htmlEditor'); this.props.onTop('htmlEditor') }}></span> 
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip id='tooltip-top'>CSS Editor</Tooltip>}>
            <span className="fab fa-css3 css3" onClick={() => { this.props.open('cssEditor'); this.props.onTop('cssEditor') }}></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip id='tooltip-top'>Javascript Editor</Tooltip>}>
            <span className="fab fa-js js-logo" onClick={() => { this.props.open('jsEditor'); this.props.onTop('jsEditor') }}></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip id='tooltip-top'>Browser</Tooltip>}>
            <span className="fas fa-globe-asia globe" onClick={() => { this.props.open('browser'); this.props.onTop('browser') }}></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip id='tooltip-top'>Code Editor</Tooltip>}>
            <span className="fas fa-code code" onClick={() => { this.props.open('codeEditor'); this.props.onTop('codeEditor') }}></span>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return {
    windowsState: state.windowsState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: (key) => {dispatch(closeWindow(key))},
    onTop: (key) => {dispatch(onTopWindow(key))}
  }
}


export default connect(mapStateTopProps,mapDispatchToProps)(App);
